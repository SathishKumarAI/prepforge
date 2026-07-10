# PrepForge

Local-first interview-prep platform for **AI · Machine Learning · Data Science · Data Analytics**.
Curated Q&A bank, flashcards with spaced repetition, quizzes, a live-aggregated resource feed
(YouTube + blog RSS + scraped articles), and a progress dashboard.

- **Frontend** — React + Vite + TypeScript + Tailwind (Catppuccin Mocha), framer-motion, Recharts.
- **Backend** — Python FastAPI. Serves the Q&A bank and runs the scrapers.
- **Storage** — flat JSON files (no database). Your progress lives in the browser (localStorage).

## Run

```bash
# 1. backend  (http://127.0.0.1:8000)
cd backend
python3 -m venv .venv && ./.venv/bin/pip install -r requirements.txt
./.venv/bin/uvicorn main:app --reload --port 8000

# 2. frontend (http://localhost:5173)  — new terminal
cd frontend
npm install
npm run dev
```

Or use the helper: `./dev.sh` (starts both).

## Resource feed

Edit `backend/config/sources.yaml` to add RSS feeds, YouTube channels/searches, or web pages.
For YouTube, copy `backend/.env.example` to `backend/.env` and add a free Data API v3 key.
Then click **Refresh** on the Resources page.

## Layout

```
backend/
  main.py              FastAPI app + endpoints
  scrapers/            rss.py · html.py · youtube.py
  content/questions.json   curated Q&A bank
  config/sources.yaml  scrape sources
  data/resources.json  scraper output (generated)
frontend/
  src/pages/           Browse · Flashcards · Quiz · Resources · Dashboard · Bookmarks
  src/components/       Layout · QuestionCard · Badge · Markdown
  src/hooks/           useQuestions · useProgress
  src/lib/             api · storage · topics · types
```
