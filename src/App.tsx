import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { JobListings } from './components/JobListings';
import { IndustryDirectory } from './components/IndustryDirectory';
import { SalaryComparison } from './components/SalaryComparison';
import { CvGuideToolkit } from './components/CvGuideToolkit';
import { AntiScamShield } from './components/AntiScamShield';
import { RecruitmentReviews } from './components/RecruitmentReviews';
import { JobDetailModal } from './components/JobDetailModal';
import { QuickApplyModal } from './components/QuickApplyModal';
import { SavedJobsDrawer } from './components/SavedJobsDrawer';
import { JobAlertsModal } from './components/JobAlertsModal';
import { Footer } from './components/Footer';

import { JOBS, INDUSTRIES, COMPANIES, INTERVIEW_REVIEWS } from './data/mockData';
import { Job, InterviewReview, IndustryCode } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'jobs' | 'industries' | 'salary' | 'cv-guide' | 'anti-scam' | 'reviews'>('jobs');
  
  // Jobs state
  const [jobs, setJobs] = useState<Job[]>(JOBS);
  const [savedJobIds, setSavedJobIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('noicohoi_saved_jobs');
      return stored ? JSON.parse(stored) : ['job-fresher-react-fpt', 'job-viettel-post-logistics'];
    } catch {
      return ['job-fresher-react-fpt', 'job-viettel-post-logistics'];
    }
  });

  // Reviews state with localStorage persistence
  const [reviews, setReviews] = useState<InterviewReview[]>(() => {
    try {
      const stored = localStorage.getItem('noicohoi_reviews');
      return stored ? JSON.parse(stored) : INTERVIEW_REVIEWS;
    } catch {
      return INTERVIEW_REVIEWS;
    }
  });

  // Filters state
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [activeExpTab, setActiveExpTab] = useState<'all' | 'no_exp' | 'has_exp'>('all');
  const [activeQuickFilter, setActiveQuickFilter] = useState<string>('');

  // Selected Sector for direct navigation from Sector Click
  const [selectedSectorCode, setSelectedSectorCode] = useState<IndustryCode | null>(null);

  // Modals state
  const [selectedJobForDetail, setSelectedJobForDetail] = useState<Job | null>(null);
  const [selectedJobForApply, setSelectedJobForApply] = useState<Job | null>(null);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState<boolean>(false);
  const [isJobAlertsModalOpen, setIsJobAlertsModalOpen] = useState<boolean>(false);

  // Persist saved jobs
  useEffect(() => {
    try {
      localStorage.setItem('noicohoi_saved_jobs', JSON.stringify(savedJobIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedJobIds]);

  // Persist reviews
  useEffect(() => {
    try {
      localStorage.setItem('noicohoi_reviews', JSON.stringify(reviews));
    } catch (e) {
      console.error(e);
    }
  }, [reviews]);

  const handleToggleSaveJob = (jobId: string) => {
    setSavedJobIds((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  const handleAddReview = (newReview: InterviewReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  const handleSearch = () => {
    setActiveTab('jobs');
  };

  const handleSelectQuickFilter = (filterKey: string) => {
    setActiveQuickFilter(filterKey);
    setActiveTab('jobs');

    if (filterKey === 'no_exp') {
      setActiveExpTab('no_exp');
    } else if (filterKey === 'internship') {
      setActiveExpTab('all');
      setSearchTerm('Thực tập sinh');
    } else if (filterKey === 'part_time') {
      setActiveExpTab('all');
      setSearchTerm('Part-time');
    } else if (filterKey === 'high_salary') {
      setActiveExpTab('all');
      setSearchTerm('');
    }
  };

  const savedJobsList = jobs.filter((job) => savedJobIds.includes(job.id));

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-500 selection:text-white">
      
      {/* Top Bar Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedJobsCount={savedJobIds.length}
        onOpenSavedJobs={() => setIsSavedDrawerOpen(true)}
        onOpenJobAlerts={() => setIsJobAlertsModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Banner (Always shown when exploring jobs or landing) */}
        {activeTab === 'jobs' && (
          <HeroBanner
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            selectedIndustry={selectedIndustry}
            setSelectedIndustry={setSelectedIndustry}
            onSearch={handleSearch}
            onSelectQuickFilter={handleSelectQuickFilter}
            activeQuickFilter={activeQuickFilter}
          />
        )}

        {/* Tab 1: Job Listings */}
        {activeTab === 'jobs' && (
          <JobListings
            jobs={jobs}
            savedJobIds={savedJobIds}
            onToggleSaveJob={handleToggleSaveJob}
            onSelectJob={(job) => setSelectedJobForDetail(job)}
            onApplyJob={(job) => setSelectedJobForApply(job)}
            activeExpTab={activeExpTab}
            setActiveExpTab={setActiveExpTab}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            selectedIndustry={selectedIndustry}
            setSelectedIndustry={setSelectedIndustry}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        )}

        {/* Tab 2: Industry Directory & Companies */}
        {activeTab === 'industries' && (
          <IndustryDirectory
            industries={INDUSTRIES}
            companies={COMPANIES}
            jobs={jobs}
            onSelectJob={(job) => setSelectedJobForDetail(job)}
            onApplyJob={(job) => setSelectedJobForApply(job)}
            initialSelectedIndustryCode={selectedSectorCode}
          />
        )}

        {/* Tab 3: Salary Benchmark Comparison */}
        {activeTab === 'salary' && (
          <SalaryComparison />
        )}

        {/* Tab 4: CV Guide & Google Sites Toolkit */}
        {activeTab === 'cv-guide' && (
          <CvGuideToolkit />
        )}

        {/* Tab 5: Anti-Scam Shield & Scam Detector */}
        {activeTab === 'anti-scam' && (
          <AntiScamShield />
        )}

        {/* Tab 6: Recruitment & Interview Reviews */}
        {activeTab === 'reviews' && (
          <RecruitmentReviews
            reviews={reviews}
            onAddReview={handleAddReview}
          />
        )}
      </main>

      {/* Modals & Drawers */}
      <JobDetailModal
        job={selectedJobForDetail}
        onClose={() => setSelectedJobForDetail(null)}
        onApply={(job) => {
          setSelectedJobForDetail(null);
          setSelectedJobForApply(job);
        }}
        isSaved={selectedJobForDetail ? savedJobIds.includes(selectedJobForDetail.id) : false}
        onToggleSave={handleToggleSaveJob}
      />

      <QuickApplyModal
        job={selectedJobForApply}
        onClose={() => setSelectedJobForApply(null)}
      />

      <SavedJobsDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedJobs={savedJobsList}
        onRemoveSavedJob={handleToggleSaveJob}
        onSelectJob={(job) => setSelectedJobForDetail(job)}
        onApplyJob={(job) => setSelectedJobForApply(job)}
      />

      <JobAlertsModal
        isOpen={isJobAlertsModalOpen}
        onClose={() => setIsJobAlertsModalOpen(false)}
        recentJobs={jobs}
        onSelectJob={(job) => setSelectedJobForDetail(job)}
      />

      {/* Global Footer */}
      <Footer onNavigateTab={setActiveTab} />

    </div>
  );
}
