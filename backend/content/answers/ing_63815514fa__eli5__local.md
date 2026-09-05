---
qid: ing_63815514fa__eli5__local
question: 'Explain: Content Delivery Network (CDN) — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 209
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:13:48-05:00'
sources: []
---

Imagine every song in Spotify is a popular book that people want to read instantly, no matter where they are.  
A **Content Delivery Network (CDN)** is like a library system that keeps copies of each book in many local branches around the world. When you ask for a song, your phone (the user) contacts the branch nearest to you instead of traveling all the way to Spotify’s main server. That branch streams the music directly, so the download feels instant and smooth.

In practice, Spotify places small “cache” servers near cities or even inside mobile networks. These caches store the most‑played tracks; if a requested song isn’t there, the CDN fetches it from the central storage, stores a copy for future requests, and streams it to you. This reduces latency (faster start), saves bandwidth on the main server, and keeps your listening experience glitch‑free even during peak hours.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
