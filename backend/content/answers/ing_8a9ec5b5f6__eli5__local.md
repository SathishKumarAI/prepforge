---
qid: ing_8a9ec5b5f6__eli5__local
question: 'Explain: Metadata — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 198
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:15:53-05:00'
sources: []
---

Imagine you’re building a giant digital music library like Spotify, but you also need to describe every song so the system can find it quickly and suggest similar tracks. **Metadata** is that descriptive “profile” for each song—its title, artist, genre, release year, and even hidden clues like how many times it’s been played or what mood it gives. Think of metadata as a library card: it tells the computer where to locate the record and how to sort it without having to listen to every track.

In a system‑design interview, you’d explain that storing this metadata separately (in a fast database) lets the service answer queries—“Show me all 90s rock hits” or “Recommend songs with a similar vibe”—without scanning the entire music collection. Thus, metadata is the backbone that makes searching and recommending efficient and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
