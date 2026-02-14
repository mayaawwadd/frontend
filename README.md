# AI Pulse Frontend

Enterprise Intelligence Platform - Curated AI intelligence for enterprise decision-makers.

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Architecture:** Atomic Design Pattern

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
app/                    # Pages (Next.js App Router)
components/
  ├── atoms/            # Basic UI elements
  ├── molecules/        # Atom combinations
  ├── organisms/        # Complex sections
  └── templates/        # Page layouts
lib/                    # Data & utilities
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/news` | AI news feed with search & filters |
