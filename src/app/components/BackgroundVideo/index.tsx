import React from 'react';
import styles from './BackgroundVideo.module.css'; // Assuming you have CSS Modules set up


// This functional component renders a video that plays automatically in the background of hero section
const BackgroundVideo: React.FC = () => {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/assets/videos/oma-kuva.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BackgroundVideo;