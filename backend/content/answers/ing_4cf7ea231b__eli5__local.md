---
qid: ing_4cf7ea231b__eli5__local
question: 'Explain: Spotify System Design: High Level Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 210
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:38:56-05:00'
sources: []
---

Imagine Spotify as a giant library that knows every book (song) and every reader’s taste.  
**Catalog Service** is the library’s card catalogue – it stores metadata (title, artist, genre).  
When you press play, **Search & Recommendation Engine** looks up similar books from the catalog and suggests ones you might like, just as a librarian recommends titles based on your past reads.  
The **Streaming Layer** is the reading room: it streams the chosen audio file to your device, buffering only what’s needed so playback stays smooth even if many readers are in session at once.  
Behind all this, **User Profile Service** keeps track of who you are and what you’ve listened to (like a personal diary).  
Together, these parts form Spotify’s high‑level architecture: catalog, recommendation, streaming, and user profile—all working like a well‑organized library that always knows which book you’ll enjoy next.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
