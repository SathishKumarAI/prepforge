---
qid: ing_5a35106abc__eli5__local
question: 'Explain: Audio Files (The Big One) — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 217
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:59:22-05:00'
sources: []
---

Imagine a giant library that never closes, where every song is a book and the shelves are spread across many cities.  
When someone asks for “Shape of You,” the library’s *catalog* (a fast database) looks up the book’s location—say shelf 12 in city New York. The request then goes to a *content server* that streams the pages (audio chunks) over the internet, while a *cache layer* keeps copies of popular books on nearby shelves so the next reader gets them instantly.  
The system must keep every copy identical (exact audio files), handle millions of readers at once (horizontal scaling), and quickly replace an outdated edition if an artist updates a track (versioning).  
In short, designing Spotify’s “big” audio file service is like building a worldwide, always‑open library that can fetch, stream, and update songs in real time while staying fast for everyone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
