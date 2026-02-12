export default function Header() {
  return (
    <header
      className="px-8 md:px-16 py-6"
      style={{ borderBottom: '1px solid #2A2A2A' }}
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center gap-3">
          <span
            className="inline-block rounded-full animate-heartbeat"
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#FFE600',
            }}
          />
          <h1
            className="text-xl font-bold tracking-tight"
            style={{
              fontFamily: 'Inter, sans-serif',
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
            }}
          >
            AI <span style={{ color: '#FFE600' }}>Pulse</span>
          </h1>
        </div>
      </div>
    </header>
  );
}