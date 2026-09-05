---
qid: ing_400730d8cf__eli5__local
question: 'Explain: 4.2 Requirement 2: Music Search — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 219
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:17:23-05:00'
sources: []
---

**Imagine you’re building a giant, invisible library for music.**  
When someone asks the system “Play *Blue in Green* by Miles Davis,” the library must quickly find that exact song among millions, just like a librarian pulling a single book from shelves of thousands.

- **Requirement 2 – Music Search** is the part that turns the user’s request into a precise lookup.  
- The system receives a query (song title, artist, or even a short audio clip).  
- It translates this into a *search key* and looks it up in an index—a special table where every song has a unique ID tied to its metadata (title, artist, genre, release year).  
- Once the ID is found, the system fetches the full record from the database and streams the audio file stored elsewhere.

So, “Music Search” is like the library’s fast‑search desk: it takes any description of music, finds the exact match in the catalog, and hands over the track to play.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
