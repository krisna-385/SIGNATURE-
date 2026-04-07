/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Activity, 
  Database, 
  Map as MapIcon, 
  ChevronRight, 
  ChevronLeft, 
  Info, 
  Terminal,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Menu,
  X
} from 'lucide-react';
import { PHASES, CHAPTERS, CAST, Chapter, Phase } from './constants';

export default function App() {
  const [currentChapterId, setCurrentChapterId] = useState(1);
  const [showCast, setShowCast] = useState(false);
  const [showPhases, setShowPhases] = useState(false);
  const [integrity, setIntegrity] = useState(100);

  const currentChapter = useMemo(() => 
    CHAPTERS.find(c => c.id === currentChapterId) || CHAPTERS[0],
  [currentChapterId]);

  const currentPhase = useMemo(() => 
    PHASES.find(p => p.chapters.includes(currentChapterId)) || PHASES[0],
  [currentChapterId]);

  // Update integrity based on chapter progress
  useEffect(() => {
    const progress = (currentChapterId / CHAPTERS.length) * 100;
    // Integrity drops more sharply in later chapters
    if (currentChapterId <= 10) {
      setIntegrity(100 - (currentChapterId * 0.5));
    } else if (currentChapterId <= 20) {
      setIntegrity(95 - ((currentChapterId - 10) * 2));
    } else if (currentChapterId <= 28) {
      setIntegrity(75 - ((currentChapterId - 20) * 8));
    } else {
      setIntegrity(Math.max(0, 10 - ((currentChapterId - 28) * 2)));
    }
  }, [currentChapterId]);

  const nextChapter = () => {
    if (currentChapterId < CHAPTERS.length) {
      setCurrentChapterId(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevChapter = () => {
    if (currentChapterId > 1) {
      setCurrentChapterId(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-mono selection:bg-neutral-700 selection:text-white">
      {/* Header / System Status */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-neutral-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-neutral-400 hidden sm:inline">
              System_Signature.v2.026
            </span>
          </div>
          <div className="h-4 w-px bg-neutral-800 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase text-neutral-500">Integrity:</span>
            <div className="w-24 h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
              <motion.div 
                className={`h-full ${integrity > 70 ? 'bg-emerald-500' : integrity > 30 ? 'bg-amber-500' : 'bg-rose-600'}`}
                initial={{ width: '100%' }}
                animate={{ width: `${integrity}%` }}
                transition={{ type: 'spring', stiffness: 50 }}
              />
            </div>
            <span className={`text-[10px] font-bold ${integrity < 30 ? 'animate-pulse text-rose-500' : 'text-neutral-400'}`}>
              {Math.round(integrity)}%
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowCast(!showCast)}
            className={`p-2 rounded-md transition-colors ${showCast ? 'bg-neutral-800 text-white' : 'hover:bg-neutral-900 text-neutral-500'}`}
            title="Cast Profiles"
          >
            <Info className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setShowPhases(!showPhases)}
            className={`p-2 rounded-md transition-colors ${showPhases ? 'bg-neutral-800 text-white' : 'hover:bg-neutral-900 text-neutral-500'}`}
            title="Phases"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-32 px-6 max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentChapterId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-12"
          >
            {/* Phase Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                <Activity className="w-3 h-3" />
                <span>Phase {currentPhase.id}: {currentPhase.tamilName}</span>
              </div>
              <h2 className="text-sm text-neutral-400 font-medium italic">
                {currentPhase.description}
              </h2>
            </div>

            {/* Chapter Title */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100">
                Chapter {currentChapter.id}: {currentChapter.title}
              </h1>
              <div className="h-px w-12 bg-neutral-700" />
            </div>

            {/* Tamil Quote if exists */}
            {currentChapter.tamilQuote && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-6 bg-neutral-900/50 border-l-2 border-neutral-700 italic text-neutral-400 leading-relaxed"
              >
                "{currentChapter.tamilQuote}"
              </motion.div>
            )}

            {/* Chapter Content */}
            <div className="space-y-8 text-lg leading-relaxed text-neutral-300">
              {currentChapter.content.map((paragraph, idx) => (
                <p key={idx} className="first-letter:text-2xl first-letter:font-bold first-letter:text-neutral-500">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-neutral-950 via-neutral-950 to-transparent">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={prevChapter}
            disabled={currentChapterId === 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs uppercase tracking-widest"
          >
            <ChevronLeft className="w-4 h-4" />
            Prev
          </button>

          <div className="text-[10px] text-neutral-600 font-bold tracking-tighter">
            {currentChapterId.toString().padStart(2, '0')} / {CHAPTERS.length.toString().padStart(2, '0')}
          </div>

          <button
            onClick={nextChapter}
            disabled={currentChapterId === CHAPTERS.length}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-xs uppercase tracking-widest text-neutral-100"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>

      {/* Overlays */}
      <AnimatePresence>
        {/* Cast Overlay */}
        {showCast && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-neutral-950/95 backdrop-blur-xl p-8 overflow-y-auto"
          >
            <div className="max-w-2xl mx-auto space-y-12">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tighter flex items-center gap-3">
                  <Shield className="w-6 h-6 text-neutral-500" />
                  System Architecture: Cast
                </h2>
                <button onClick={() => setShowCast(false)} className="p-2 hover:bg-neutral-900 rounded-full">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="grid gap-8">
                {CAST.map((member, idx) => (
                  <motion.div 
                    key={member.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 border border-neutral-800 rounded-xl bg-neutral-900/50 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-neutral-100">{member.name}</h3>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-500 bg-neutral-800 px-2 py-1 rounded">
                        {member.role}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {member.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Phases Overlay */}
        {showPhases && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-y-0 right-0 z-[60] w-full sm:w-80 bg-neutral-900 border-l border-neutral-800 p-6 overflow-y-auto"
          >
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500">System Phases</h2>
                <button onClick={() => setShowPhases(false)} className="p-1 hover:bg-neutral-800 rounded">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                {PHASES.map((phase) => (
                  <button
                    key={phase.id}
                    onClick={() => {
                      setCurrentChapterId(phase.chapters[0]);
                      setShowPhases(false);
                    }}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      currentPhase.id === phase.id 
                        ? 'bg-neutral-800 border-neutral-700 text-white' 
                        : 'bg-neutral-950/50 border-neutral-900 text-neutral-500 hover:border-neutral-800'
                    }`}
                  >
                    <div className="text-[10px] uppercase tracking-widest mb-1">Phase {phase.id}</div>
                    <div className="font-bold mb-1">{phase.tamilName}</div>
                    <div className="text-[10px] text-neutral-600">{phase.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Grid Effect */}
      <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />
      </div>
    </div>
  );
}
