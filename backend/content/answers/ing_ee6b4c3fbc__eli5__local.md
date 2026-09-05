---
qid: ing_ee6b4c3fbc__eli5__local
question: 'Explain: 2.2 Storage Estimates — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 295
total_tokens: 462
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:52:40-05:00'
sources: []
---

Imagine you’re planning a giant library that will hold every song anyone could ever want to listen to, plus all the playlists people create and their personal listening histories.  
**1. How many songs?**  
A single song averages about 5 MB (just under 5 megabytes). If Spotify had 70 million tracks, that’s roughly 350 TB of raw audio files.  
**2. How many users?**  
With 400 million active listeners, each user might save a few hundred songs to their library and create dozens of playlists. Even if you count only the “saved” data (not the full song), it’s another 100–200 TB.  
**3. Metadata and logs**  
Every track has tags (artist, genre, release date) – say 1 KB each. That’s 70 GB for all tracks. User activity logs (what you listened to, when, where) can add a few terabytes per month.  

So the total storage budget is on the order of **500–600 TB** just for media and basic data, plus extra space for backups, caching, and future growth. Think of it as building a library that’s 10 times larger than a typical city’s public library—every shelf holds a song instead of a book.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
