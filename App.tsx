
import React, { useState, useEffect } from 'react';
import { AppTab } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FaceAnalysis from './components/FaceAnalysis';
import PhotoEditor from './components/PhotoEditor';
import FaceInteraction from './components/FaceInteraction';
import HeightCalculator from './components/HeightCalculator';
import ImageGenerator from './components/ImageGenerator';
import VideoGenerator from './components/VideoGenerator';
import AboutScience from './components/AboutScience';
import Footer from './components/Footer';
import MethodAgent from './components/MethodAgent';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.HOME);

  // Smooth scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.HOME:
        return <Hero onExplore={(tab) => setActiveTab(tab)} />;
      case AppTab.ABOUT:
        return <AboutScience />;
      case AppTab.SYMMETRY:
        return <FaceAnalysis />;
      case AppTab.EDITOR:
        return <PhotoEditor />;
      case AppTab.IMAGEN:
        return <ImageGenerator />;
      case AppTab.VEO:
        return <VideoGenerator />;
      case AppTab.INTERACTION:
        return <FaceInteraction />;
      case AppTab.HEIGHT:
        return <HeightCalculator />;
      default:
        return <Hero onExplore={(tab) => setActiveTab(tab)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#030303] text-slate-100 overflow-x-hidden">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-grow pt-24">
        <div className="px-4 md:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for "premium" feel
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      <Footer onTabChange={setActiveTab} />
      {/* Global Method AI Agent */}
      <MethodAgent context={{ currentView: activeTab }} />
    </div>
  );
};

export default App;
