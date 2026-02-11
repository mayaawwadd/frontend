'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { mockNewsArticles, categories } from '../data/mockNews';

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['All']);
  const [isLoading, setIsLoading] = useState(true);
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll to collapse/expand header
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        setIsHeaderCollapsed(true);
      } else if (currentScrollY < 50) {
        setIsHeaderCollapsed(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFilter = (category: string) => {
    if (category === 'All') {
      setSelectedFilters(['All']);
    } else {
      const newFilters = selectedFilters.includes(category)
        ? selectedFilters.filter(f => f !== category)
        : [...selectedFilters.filter(f => f !== 'All'), category];
      
      setSelectedFilters(newFilters.length === 0 ? ['All'] : newFilters);
    }
  };

  const filteredArticles = useMemo(() => {
    let results = mockNewsArticles;

    // Apply category filter
    if (!selectedFilters.includes('All')) {
      results = results.filter((article: any) => selectedFilters.includes(article.category));
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter((article: any) =>
        article.headline.toLowerCase().includes(query) ||
        article.summary.toLowerCase().includes(query) ||
        article.source.toLowerCase().includes(query)
      );
    }

    return results;
  }, [selectedFilters, searchQuery]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1F1F1F' }}>
      {/* Interactive AI Pulse Header */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out"
        style={{ 
          backgroundColor: '#1F1F1F',
          borderBottom: '1px solid #353535'
        }}
      >
        <div className="max-w-[1600px] mx-auto px-16 transition-all duration-700 ease-in-out"
          style={{
            paddingTop: isHeaderCollapsed ? '20px' : '60px',
            paddingBottom: isHeaderCollapsed ? '20px' : '60px'
          }}
        >
          <div className="flex items-center justify-between">
            {/* AI Pulse Logo with Heartbeat */}
            <Link href="/">
              <div className="flex items-center gap-4">
                <div 
                  className="rounded-full transition-all duration-700 ease-in-out"
                  style={{
                    width: isHeaderCollapsed ? '12px' : '20px',
                    height: isHeaderCollapsed ? '12px' : '20px',
                    backgroundColor: '#FFE600',
                    animation: 'heartbeat 1.8s ease-in-out infinite'
                  }}
                />
                <h1 
                  className="font-bold tracking-tight hover:opacity-70 transition-all duration-700 ease-in-out cursor-pointer" 
                  style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    color: '#FFFFFF',
                    fontSize: isHeaderCollapsed ? '20px' : '48px',
                    letterSpacing: '-0.02em'
                  }}
                >
                  AI <span style={{ color: '#FFE600' }}>Pulse</span>
                </h1>
              </div>
            </Link>

            {/* Search and Filters - Collapsed State */}
            {isHeaderCollapsed && (
              <div className="flex items-center gap-4 animate-fadeIn">
                {/* Compact Search */}
                <div className="relative">
                  <Search 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2" 
                    size={16} 
                    style={{ color: '#666666' }}
                  />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-11 pr-4 py-2.5 focus:outline-none transition-all"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: '400',
                      color: '#FFFFFF',
                      backgroundColor: '#2A2A2A',
                      border: '1px solid #3A3A3A',
                      borderRadius: '4px',
                      width: '240px'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#4A4A4A'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#3A3A3A'}
                  />
                </div>

                {/* Compact Filter Chips */}
                <div className="flex gap-2">
                  {categories.slice(0, 5).map((category: any) => (
                    <button
                      key={category}
                      onClick={() => toggleFilter(category)}
                      className="px-3 py-1.5 rounded-full transition-all duration-200"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '11px',
                        fontWeight: '500',
                        letterSpacing: '0.01em',
                        backgroundColor: selectedFilters.includes(category) ? 'rgba(255, 230, 0, 0.12)' : 'transparent',
                        color: selectedFilters.includes(category) ? '#FFE600' : '#888888',
                        border: selectedFilters.includes(category) ? '1px solid #FFE600' : '1px solid #444444'
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Expanded State Content */}
          {!isHeaderCollapsed && (
            <div className="animate-fadeIn">
              <p 
                className="font-light max-w-[700px] transition-all duration-700 ease-in-out" 
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  color: '#A0A0A0',
                  lineHeight: '1.6',
                  fontSize: '18px',
                  marginTop: '24px',
                  marginBottom: '48px'
                }}
              >
                Curated AI intelligence for enterprise decision-makers
              </p>

              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative max-w-[800px]">
                  <Search 
                    className="absolute left-5 top-1/2 transform -translate-y-1/2" 
                    size={20} 
                    style={{ color: '#666666' }}
                  />
                  <input
                    type="text"
                    placeholder="Search intelligence..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-6 py-5 focus:outline-none transition-all"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: '400',
                      color: '#FFFFFF',
                      backgroundColor: '#2A2A2A',
                      border: '1px solid #3A3A3A',
                      borderRadius: '4px'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#4A4A4A'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#3A3A3A'}
                  />
                </div>
              </div>

              {/* Filter Chips */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category: any) => (
                  <button
                    key={category}
                    onClick={() => toggleFilter(category)}
                    className="px-5 py-2.5 rounded-full transition-all duration-200"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: '500',
                      letterSpacing: '0.01em',
                      backgroundColor: selectedFilters.includes(category) ? 'rgba(255, 230, 0, 0.12)' : 'transparent',
                      color: selectedFilters.includes(category) ? '#FFE600' : '#888888',
                      border: selectedFilters.includes(category) ? '1px solid #FFE600' : '1px solid #444444'
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div style={{ height: isHeaderCollapsed ? '80px' : '400px', transition: 'height 0.7s ease-in-out' }} />

      {/* Main Content */}
      <main className="px-16 py-16">
        <div className="max-w-[1600px] mx-auto">
          {/* Loading State */}
          {isLoading ? (
            <div className="grid grid-cols-2 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="relative overflow-hidden"
                  style={{
                    backgroundColor: '#2A2A2A',
                    borderRadius: '6px',
                    border: '1px solid #3A3A3A',
                    height: '480px'
                  }}
                >
                  {/* Heartbeat Pulse Animation */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 p-8"
                    style={{ height: '55%' }}
                  >
                    {/* Title Skeleton */}
                    <div 
                      className="mb-3"
                      style={{
                        height: '50px',
                        backgroundColor: 'rgba(255, 230, 0, 0.15)',
                        borderRadius: '4px',
                        animation: 'heartbeat 1.8s ease-in-out infinite'
                      }}
                    />
                    
                    {/* Summary Skeleton */}
                    <div className="mb-4 space-y-2">
                      <div 
                        style={{
                          height: '16px',
                          width: '100%',
                          backgroundColor: 'rgba(255, 230, 0, 0.12)',
                          borderRadius: '3px',
                          animation: 'heartbeat 1.8s ease-in-out infinite',
                          animationDelay: '0.2s'
                        }}
                      />
                      <div 
                        style={{
                          height: '16px',
                          width: '95%',
                          backgroundColor: 'rgba(255, 230, 0, 0.12)',
                          borderRadius: '3px',
                          animation: 'heartbeat 1.8s ease-in-out infinite',
                          animationDelay: '0.3s'
                        }}
                      />
                      <div 
                        style={{
                          height: '16px',
                          width: '80%',
                          backgroundColor: 'rgba(255, 230, 0, 0.12)',
                          borderRadius: '3px',
                          animation: 'heartbeat 1.8s ease-in-out infinite',
                          animationDelay: '0.4s'
                        }}
                      />
                    </div>

                    {/* Footer Skeleton */}
                    <div className="flex items-center justify-between">
                      <div 
                        style={{
                          height: '12px',
                          width: '120px',
                          backgroundColor: 'rgba(255, 230, 0, 0.1)',
                          borderRadius: '3px',
                          animation: 'heartbeat 1.8s ease-in-out infinite',
                          animationDelay: '0.5s'
                        }}
                      />
                      <div 
                        style={{
                          height: '12px',
                          width: '100px',
                          backgroundColor: 'rgba(255, 230, 0, 0.1)',
                          borderRadius: '3px',
                          animation: 'heartbeat 1.8s ease-in-out infinite',
                          animationDelay: '0.6s'
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* News Grid */}
              <div className="grid grid-cols-2 gap-8">
                {filteredArticles.map((article: any) => (
                  <article 
                    key={article.id}
                    className="relative overflow-hidden transition-all duration-300 hover:translate-y-[-2px]"
                    style={{
                      backgroundColor: '#2A2A2A',
                      borderRadius: '6px',
                      border: '1px solid #3A3A3A',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                      height: '480px'
                    }}
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${article.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    
                    {/* Gradient Overlay - Soft and Natural */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0.7) 75%, rgba(0, 0, 0, 0.85) 100%)'
                      }}
                    />

                    {/* Content Area with Seamless Blur */}
                    <div className="absolute bottom-0 left-0 right-0" style={{ minHeight: '60%' }}>
                      {/* Blur Layer with Soft Edge Gradient */}
                      <div 
                        className="absolute inset-0"
                        style={{
                          backdropFilter: 'blur(16px)',
                          WebkitBackdropFilter: 'blur(16px)',
                          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
                          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
                          backgroundColor: 'rgba(0, 0, 0, 0.15)'
                        }}
                      />
                      
                      {/* Text Content */}
                      <div className="relative p-8 flex flex-col justify-end" style={{ minHeight: '100%' }}>
                        {/* Category Tag Slot - Single Instance */}
                        <div className="mb-3 flex gap-2 flex-wrap">
                          <span 
                            className="inline-block px-3 py-1.5 rounded-full"
                            style={{ 
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '11px',
                              fontWeight: '600',
                              letterSpacing: '0.02em',
                              textTransform: 'uppercase',
                              backgroundColor: 'rgba(255, 230, 0, 0.15)',
                              color: '#FFE600',
                              border: '1px solid rgba(255, 230, 0, 0.3)'
                            }}
                          >
                            {article.category}
                          </span>
                        </div>

                        <h3 
                          className="mb-3"
                          style={{ 
                            fontFamily: 'Inter, sans-serif',
                            color: '#FFFFFF',
                            fontSize: '18px',
                            fontWeight: '700',
                            lineHeight: '1.4',
                            letterSpacing: '-0.01em',
                            textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word'
                          }}
                        >
                          {article.headline}
                        </h3>
                        
                        <p 
                          className="mb-4"
                          style={{ 
                            fontFamily: 'Inter, sans-serif',
                            color: '#E0E0E0',
                            fontSize: '14px',
                            fontWeight: '300',
                            lineHeight: '1.6',
                            textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)',
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          {article.summary}
                        </p>

                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span 
                            className="font-medium"
                            style={{ 
                              fontFamily: 'Inter, sans-serif',
                              color: '#B0B0B0',
                              fontSize: '12px',
                              letterSpacing: '0.01em',
                              textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)'
                            }}
                          >
                            {article.source}
                          </span>
                          <span 
                            style={{ 
                              fontFamily: 'Inter, sans-serif',
                              color: '#999999',
                              fontSize: '12px',
                              textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)'
                            }}
                          >
                            {new Date(article.publishDate).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* No Results */}
              {filteredArticles.length === 0 && (
                <div className="text-center py-32">
                  <p 
                    className="text-xl font-light"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      color: '#666666'
                    }}
                  >
                    No articles found matching your criteria
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* Scoped styles for the heartbeat animation */}
      <style jsx>{`
        @keyframes heartbeat {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.2);
          }
          40% {
            transform: scale(1);
          }
          60% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in;
        }
      `}</style>
    </div>
  );
}
