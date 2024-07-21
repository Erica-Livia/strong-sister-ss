import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMicrophone, FaCamera } from 'react-icons/fa';
import '../translate.css';

const Modal = ({ isOpen, onClose, type }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audioURL, setAudioURL] = useState('');
  const [videoURL, setVideoURL] = useState('');

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
          setAudioChunks((prev) => [...prev, event.data]);
        }
      };
      recorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: 'video/mp4' });
        const url = URL.createObjectURL(blob);
        setVideoURL(url);
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
              {audioURL && <audio src={audioURL} controls />}
              <button
                onClick={isRecording ? stopVideoRecording : startVideoRecording}
                className={`${commonBtnClasses} ${isRecording ? 'bg-red-500' : 'bg-orange-50'} hover:bg-orange-100 text-black`}
              >
                {isRecording ? 'STOP VIDEO' : 'RECORD VIDEO/PHOTO'} <FaCamera className="ml-2" />
              </button>
              {videoURL && <video src={videoURL} controls />}
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
            {audioURL && <audio src={audioURL} controls />}
            <button
              onClick={isRecording ? stopVideoRecording : startVideoRecording}
              className={`${commonBtnClasses} ${isRecording ? 'bg-red-500' : 'bg-orange-50'} hover:bg-orange-100 text-black`}
            >
              {isRecording ? 'STOP VIDEO' : 'RECORD VIDEO/PHOTO'} <FaCamera className="ml-2" />
            </button>
            {videoURL && <video src={videoURL} controls />}
          </div>
        );
      case 'gbv':
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4 py-8">GBV Action (Gender Based Violence)</h1>
            <p>What would you like to do next to report the incident? Please select the most suitable way for you, we will request for help for you.</p>
            <a href="tel:911" className={`${commonBtnClasses} bg-orange-700 hover:bg-orange-800 text-white`}>
              CALL POLICE <FaPhone className="ml-2" />
            </a>
            <a href="mailto:migeprof@example.com" className={`${commonBtnClasses} bg-orange-300 hover:bg-orange-400 text-white`}>
              CONTACT MIGEPROF
            </a>
            <button
              onClick={isRecording ? stopAudioRecording : startAudioRecording}
              className={`${commonBtnClasses} ${isRecording ? 'bg-red-500' : 'bg-orange-200'} hover:bg-orange-300 text-black`}
            >
              {isRecording ? 'STOP AUDIO' : 'SEND AUDIO'} <FaMicrophone className="ml-2" />
            </button>
            {audioURL && <audio src={audioURL} controls />}
            <button
              onClick={isRecording ? stopVideoRecording : startVideoRecording}
              className={`${commonBtnClasses} ${isRecording ? 'bg-red-500' : 'bg-orange-50'} hover:bg-orange-100 text-black`}
            >
              {isRecording ? 'STOP VIDEO' : 'RECORD VIDEO/PHOTO'} <FaCamera className="ml-2" />
            </button>
            {videoURL && <video src={videoURL} controls />}
          </div>
        );
      case 'natural':
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4 py-8">Disaster Action</h1>
            <p>What would you like to do next to report the incident? Please select the most suitable way for you, we will request for help for you.</p>
            <a href="tel:minema" className={`${commonBtnClasses} bg-orange-700 hover:bg-orange-800 text-white`}>
              CALL MINEMA <FaPhone className="ml-2" />
            </a>
            <a href="tel:shelter_nearby" className={`${commonBtnClasses} bg-orange-300 hover:bg-orange-400 text-white`}>
              SEEK NEARBY SHELTER <FaPhone className="ml-2" />
            </a>
            <button
              onClick={isRecording ? stopAudioRecording : startAudioRecording}
              className={`${commonBtnClasses} ${isRecording ? 'bg-red-500' : 'bg-orange-200'} hover:bg-orange-300 text-black`}
            >
              {isRecording ? 'STOP AUDIO' : 'SEND AUDIO'} <FaMicrophone className="ml-2" />
            </button>
            {audioURL && <audio src={audioURL} controls />}
            <button
              onClick={isRecording ? stopVideoRecording : startVideoRecording}
              className={`${commonBtnClasses} ${isRecording ? 'bg-red-500' : 'bg-orange-50'} hover:bg-orange-100 text-black`}
            >
              {isRecording ? 'STOP VIDEO' : 'RECORD VIDEO/PHOTO'} <FaCamera className="ml-2" />
            </button>
            {videoURL && <video src={videoURL} controls />}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="modal-content bg-white p-6 rounded shadow-lg h-screen md:h-auto relative">
        <button className="modal-close absolute top-2 right-2 bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded" onClick={onClose}>
          X
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

export default Modal;
