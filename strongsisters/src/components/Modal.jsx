import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMicrophone, FaCamera, FaDownload, FaWhatsapp } from 'react-icons/fa';
import '../translate.css';

const Modal = ({ isOpen, onClose, type }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audioURL, setAudioURL] = useState('');
  const [videoChunks, setVideoChunks] = useState([]);
  const [videoURL, setVideoURL] = useState('');

  useEffect(() => {
    return () => {
      if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
      }
    };
  }, [mediaRecorder]);

  if (!isOpen) return null;

  const startAudioRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks((prev) => [...prev, event.data]);
        }
      };
      recorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: 'audio/wav' });
        const url = URL.createObjectURL(blob);
        setAudioURL(url);
        setAudioChunks([]); // Clear chunks after recording
      };
      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (err) {
      console.error('Error accessing media devices.', err);
    }
  };

  const stopAudioRecording = () => {
    mediaRecorder.stop();
    setIsRecording(false);
    setMediaRecorder(null);
  };

  const startVideoRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setVideoChunks((prev) => [...prev, event.data]);
        }
      };
      recorder.onstop = () => {
        const blob = new Blob(videoChunks, { type: 'video/mp4' });
        const url = URL.createObjectURL(blob);
        setVideoURL(url);
        setVideoChunks([]); // Clear chunks after recording
      };
      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (err) {
      console.error('Error accessing media devices.', err);
    }
  };

  const stopVideoRecording = () => {
    mediaRecorder.stop();
    setIsRecording(false);
    setMediaRecorder(null);
  };

  const downloadFile = (url, filename) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const sendToWhatsApp = (url) => {
    const phoneNumber = '+250790137395';
    const message = `Here's the recorded media: ${url}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const renderContent = () => {
    const commonBtnClasses = "flex items-center justify-center w-full font-bold py-2 px-4 rounded mb-2";

    switch (type) {
      case 'theft':
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4 py-8">Take Action</h1>
            <p>What would you like to do next to report the incident? Please select the most suitable way for you, we will request for help for you.</p>
            <div className='w-full py-10'>
              <a href="tel:911" className={`${commonBtnClasses} bg-orange-700 hover:bg-orange-800 text-white`}>
                CALL POLICE <FaPhone className="ml-2" />
              </a>
              <a href="mailto:police@example.com" className={`${commonBtnClasses} bg-orange-300 hover:bg-orange-400 text-white`}>
                SEND A QUICK MESSAGE <FaEnvelope className="ml-2" />
              </a>
              <button
                onClick={isRecording ? stopAudioRecording : startAudioRecording}
                className={`${commonBtnClasses} ${isRecording ? 'bg-red-500' : 'bg-orange-200'} hover:bg-orange-300 text-black`}
              >
                {isRecording ? 'STOP AUDIO' : 'SEND AUDIO'} <FaMicrophone className="ml-2" />
              </button>
              {audioURL && (
                <>
                  <audio src={audioURL} controls className="mb-2" />
                  <button
                    onClick={() => downloadFile(audioURL, 'recording.wav')}
                    className={`${commonBtnClasses} bg-blue-500 hover:bg-blue-600 text-white`}
                  >
                    DOWNLOAD AUDIO <FaDownload className="ml-2" />
                  </button>
                  <button
                    onClick={() => sendToWhatsApp(audioURL)}
                    className={`${commonBtnClasses} bg-green-500 hover:bg-green-600 text-white`}
                  >
                    SEND TO WHATSAPP <FaWhatsapp className="ml-2" />
                  </button>
                </>
              )}
              <button
                onClick={isRecording ? stopVideoRecording : startVideoRecording}
                className={`${commonBtnClasses} ${isRecording ? 'bg-red-500' : 'bg-orange-50'} hover:bg-orange-100 text-black`}
              >
                {isRecording ? 'STOP VIDEO' : 'RECORD VIDEO/PHOTO'} <FaCamera className="ml-2" />
              </button>
              {videoURL && (
                <>
                  <video src={videoURL} controls className="mb-2" />
                  <button
                    onClick={() => downloadFile(videoURL, 'recording.mp4')}
                    className={`${commonBtnClasses} bg-blue-500 hover:bg-blue-600 text-white`}
                  >
                    DOWNLOAD VIDEO <FaDownload className="ml-2" />
                  </button>
                  <button
                    onClick={() => sendToWhatsApp(videoURL)}
                    className={`${commonBtnClasses} bg-green-500 hover:bg-green-600 text-white`}
                  >
                    SEND TO WHATSAPP <FaWhatsapp className="ml-2" />
                  </button>
                </>
              )}
            </div>
          </div>
        );
      case 'medical':
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4 py-8">Take Action</h1>
            <p>What would you like to do next to report the incident? Please select the most suitable way for you, we will request for help for you.</p>
            <a href="tel:911" className={`${commonBtnClasses} bg-orange-700 hover:bg-orange-800 text-white`}>
              CALL AMBULANCE <FaPhone className="ml-2" />
            </a>
            <a href="tel:hospitals_nearby" className={`${commonBtnClasses} bg-orange-300 hover:bg-orange-400 text-white`}>
              CONTACT NEARBY HOSPITALS <FaPhone className="ml-2" />
            </a>
            <button
              onClick={isRecording ? stopAudioRecording : startAudioRecording}
              className={`${commonBtnClasses} ${isRecording ? 'bg-red-500' : 'bg-orange-200'} hover:bg-orange-300 text-black`}
            >
              {isRecording ? 'STOP AUDIO' : 'SEND AUDIO'} <FaMicrophone className="ml-2" />
            </button>
            {audioURL && (
              <>
                <audio src={audioURL} controls className="mb-2" />
                <button
                  onClick={() => downloadFile(audioURL, 'recording.wav')}
                  className={`${commonBtnClasses} bg-blue-500 hover:bg-blue-600 text-white`}
                >
                  DOWNLOAD AUDIO <FaDownload className="ml-2" />
                </button>
                <button
                  onClick={() => sendToWhatsApp(audioURL)}
                  className={`${commonBtnClasses} bg-green-500 hover:bg-green-600 text-white`}
                >
                  SEND TO WHATSAPP <FaWhatsapp className="ml-2" />
                </button>
              </>
            )}
            <button
              onClick={isRecording ? stopVideoRecording : startVideoRecording}
              className={`${commonBtnClasses} ${isRecording ? 'bg-red-500' : 'bg-orange-50'} hover:bg-orange-100 text-black`}
            >
              {isRecording ? 'STOP VIDEO' : 'RECORD VIDEO/PHOTO'} <FaCamera className="ml-2" />
            </button>
            {videoURL && (
              <>
                <video src={videoURL} controls className="mb-2" />
                <button
                  onClick={() => downloadFile(videoURL, 'recording.mp4')}
                  className={`${commonBtnClasses} bg-blue-500 hover:bg-blue-600 text-white`}
                >
                  DOWNLOAD VIDEO <FaDownload className="ml-2" />
                </button>
                <button
                  onClick={() => sendToWhatsApp(videoURL)}
                  className={`${commonBtnClasses} bg-green-500 hover:bg-green-600 text-white`}
                >
                  SEND TO WHATSAPP <FaWhatsapp className="ml-2" />
                </button>
              </>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal bg-white px-4">
        <button onClick={onClose} className="close-button">X</button>
        {renderContent()}
      </div>
    </div>
  );
};

export default Modal;
