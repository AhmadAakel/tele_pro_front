import React, { useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TrialVideos = () => {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const videoData = [
    {
      id: 1,
      title: t('trialvideos.firstvideo.title'),
      description: t('trialvideos.firstvideo.description'),
      thumbnail: '/trade1.jpg',
      duration: '19:59',
      level: 'Free',
      link: '/powerpoinrt 1.mp4'
    },
    {
      id: 2,
      title: t('trialvideos.secondvideo.title'),
      description: t('trialvideos.secondvideo.description'),
      thumbnail: '/trade1.jpg',
      duration: '17:54',
      level: 'Free',
      link: '/Merge 1.mp4'
    },
  ];

  const VideoCard = ({ video, onClick }) => {
    return (
      <div 
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        onClick={() => onClick(video)}
      >
        <div className="relative">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-49 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-[#117CA2] flex items-center justify-center">
              <Play className="h-8 w-8 text-white ml-1" />
            </div>
          </div>
          <div className="absolute bottom-2 right-2 bg-[#2c2928] text-white text-sm px-2 py-1 rounded">
            {video.duration}
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-[#2c2928] line-clamp-2">{video.title}</h3>
            <span className="text-xs font-medium bg-[#D9D9D9] text-[#2c2928] px-2 py-1 rounded">
              {video.level}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{video.description}</p>
          <button className="text-[#117CA2] font-medium text-sm flex items-center hover:underline">
            {t('trialvideos.button')} <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    );
  };

  const VideoModal = ({ video, onClose }) => {
    if (!video) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          <div className="relative aspect-video bg-black w-full">
            <video 
              className="absolute inset-0 w-full h-full object-cover" 
              controls
            >
              <source src={video.link} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-6 flex-1 overflow-auto">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold text-[#2c2928]">{video.title}</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="mt-4 text-gray-600">{video.description}</p>
            <div className="mt-6 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="bg-[#D9D9D9] text-[#2c2928] px-3 py-1 rounded">
                  {video.level}
                </span>
                <span className="text-gray-500">{video.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div id="courses" className="py-16 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2c2928]">{t('trialvideos.title.0')}</h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('trialvideos.title.1')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {videoData.map(video => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onClick={setSelectedVideo}
            />
          ))}
        </div>
      </div>
      
      {selectedVideo && (
        <VideoModal 
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
};

export default TrialVideos;