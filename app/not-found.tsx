export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-md text-center">
                <div className="accent-line mx-auto mb-6" />
                <h1 className="font-display text-3xl font-bold mb-3">Page not found</h1>
                <p className="text-foreground-muted text-sm">
                    The page you’re looking for doesn’t exist.
                </p>
            </div>
        </main>
    );
}
