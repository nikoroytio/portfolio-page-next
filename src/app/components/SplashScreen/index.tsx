// Component for displaying the splash screen with a video.
import React, { useEffect, useState } from 'react';
import styles from './SplashScreen.module.css'; 

// Define the type for the props
type SplashScreenProps = {
  onFinished: () => void;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinished }) => {
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    // Set overflow to hidden when the splash screen mounts
    document.body.style.overflow = "hidden";

    if (videoEnded) {
      onFinished();
    }

    // Reset overflow when the splash screen unmounts
    return () => {
      document.body.style.overflow = "auto"; // or "visible"
    };
  }, [videoEnded, onFinished]);

  return (
    <div className={styles.splashScreen}>
      <video
        width="100%"
        height="100%"
        autoPlay
        muted
        onEnded={() => setVideoEnded(true)}
      >
        <source src="/assets/videos/splash-screen.mp4" type="video/mp4" />
        {/* A fallback message for browsers that do not support the video tag. */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SplashScreen;