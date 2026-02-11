import { Link } from 'react-router';

export function Landing() {
  return (
    <div 
      className="min-h-screen flex flex-col" 
      style={{ backgroundColor: '#1F1F1F' }}
    >
      {/* Header */}
      <header 
        className="px-8 md:px-16 py-6" 
        style={{ borderBottom: '1px solid #2A2A2A' }}
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center gap-3">
            <div 
              className="rounded-full"
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#FFE600',
                animation: 'heartbeat 1.8s ease-in-out infinite'
              }}
            />
            <h1 
              className="text-xl font-bold tracking-tight" 
              style={{ 
                fontFamily: 'Inter, sans-serif', 
                color: '#FFFFFF',
                letterSpacing: '-0.02em'
              }}
            >
              AI <span style={{ color: '#FFE600' }}>Pulse</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-[64px] py-[110px]">
        <div className="max-w-[1200px] w-full">
          <div className="mb-6">
            <span 
              className="inline-block px-4 py-2 rounded-full"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                backgroundColor: 'rgba(255, 230, 0, 0.1)',
                color: '#FFE600',
                border: '1px solid rgba(255, 230, 0, 0.2)'
              }}
            >
              Enterprise Intelligence
            </span>
          </div>

          <h2 
            className="text-5xl md:text-[80px] font-bold tracking-tight mb-8" 
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              color: '#FFFFFF', 
              lineHeight: '1.1',
              letterSpacing: '-0.03em'
            }}
          >
            Intelligence for the{' '}
            <span style={{ color: '#FFE600' }}>AI era</span>
          </h2>
          
          <p 
            className="text-lg md:text-[22px] mb-12 md:mb-16 max-w-[700px] font-light" 
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              color: '#A0A0A0', 
              lineHeight: '1.7',
              letterSpacing: '-0.01em'
            }}
          >
            Curated AI intelligence for enterprise decision-makers. Stay informed with structured insights from across the industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/news">
              <button 
                className="px-10 py-4 transition-all duration-300"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  border: '1px solid #FFE600',
                  backgroundColor: '#FFE600',
                  color: '#1F1F1F',
                  fontSize: '15px',
                  fontWeight: '600',
                  letterSpacing: '0.01em',
                  borderRadius: '4px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.85';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                Access Intelligence Feed
              </button>
            </Link>
            
            
          </div>
        </div>
      </main>
    </div>
  );
}