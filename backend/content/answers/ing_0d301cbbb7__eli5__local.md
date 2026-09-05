---
qid: ing_0d301cbbb7__eli5__local
question: 'Explain: Core APIs — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 276
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:56:29-05:00'
sources: []
---

Think of building a giant library that lets millions read books at the same time.  
**Core APIs are like the library’s “catalogue” and “checkout desk.”**  

1. **Catalog API (search & discovery)** – It tells users which books exist, where they’re stored, and what tags or genres they belong to. In Spotify this is the *Search* and *Browse* endpoints that return tracks, albums, or playlists.  
2. **Playback API (play, pause, skip)** – This is the “checkout desk.” When a user hits play, the API streams the audio file from storage, keeps track of current position, and updates the queue if they hit next/previous.  
3. **User‑profile API (likes, playlists, history)** – Like a library card that records what books you’ve borrowed. It stores favorite tracks, custom playlists, and listening history.  

All these APIs talk to databases (for metadata), object storage (for audio files), and caching layers (to keep hot data fast). By keeping each function focused—search, play, or user data—you can scale them independently, just as a library separates its catalog from its checkout system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
