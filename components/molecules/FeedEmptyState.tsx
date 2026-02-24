interface FeedEmptyStateProps {
  hasFilters: boolean;
  onReset: () => void;
  onSetPrefs: () => void;
  hasPreferences: boolean;
}

export default function FeedEmptyState({
  hasFilters,
  onReset,
  onSetPrefs,
  hasPreferences,
}: FeedEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center animate-fade-in">
      <div className="w-12 h-12 rounded-full bg-background-surface border border-border flex items-center justify-center mb-4">
        <svg className="w-5 h-5 text-foreground-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" strokeWidth="2" />
          <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {hasFilters ? (
        <>
          <h3 className="font-display font-semibold text-foreground mb-1">No results found</h3>
          <p className="text-sm text-foreground-muted mb-5 max-w-xs">Try adjusting your filters or search query.</p>
          <button
            onClick={onReset}
            className="px-5 py-2.5 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:brightness-110 transition-all"
          >
            Reset filters
          </button>
        </>
      ) : (
        <>
          <h3 className="font-display font-semibold text-foreground mb-1">Choose your interests</h3>
          <p className="text-sm text-foreground-muted mb-5 max-w-xs">
            Personalise AI Pulse to surface the most relevant intelligence for you.
          </p>
          {!hasPreferences && (
            <button
              onClick={onSetPrefs}
              className="px-5 py-2.5 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:brightness-110 transition-all"
            >
              Set preferences →
            </button>
          )}
        </>
      )}
    </div>
  );
}
