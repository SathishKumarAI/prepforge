---
qid: ing_252e19ab44__faang__local
question: 'Explain: Mobile App (Client) — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 445
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:10:18-05:00'
sources: []
---

**Clarify**  
We’re asked to sketch a high‑level system design for the *Spotify* mobile client.  
Key assumptions:  
- Users stream music on demand, with offline caching.  
- The app must support search, playlists, recommendations, and real‑time playback.  
- Latency < 200 ms for UI actions; bandwidth is limited on cellular.

**Approach**  
1. **Client architecture** – split into *UI*, *Playback Engine*, *Data Layer* (cache + DB), *Sync Service*.  
2. **Backend services** – catalog service, recommendation engine, playback streaming API, user profile & playlist service, content delivery network (CDN).  
3. **Data flow** – client requests → gateway → auth → appropriate microservice; responses cached locally where feasible.

**Depth**  
- *Playback*: Use a low‑latency streaming protocol (HTTP/2 or QUIC) with adaptive bitrate. Buffer 5 s ahead to hide network jitter.  
- *Caching*: Store recently played tracks in local SQLite + LRU eviction. Sync playlists via background sync.  
- *Search & recommendations*: Client hits a search API that queries Elasticsearch; recommendation service returns top‑N vectors from a pre‑computed model.  
- *Scalability*: CDN fronts the audio blobs; catalog and recommendation services are stateless, auto‑scaled. Use gRPC for inter‑service calls.

**Edge Cases**  
- Offline play: fall back to cache; show “offline” badge if track not cached.  
- Network loss during streaming: pause playback, resume when reconnected.  
- Large playlist sync: chunked transfer with progress indicator.

**Optimize & Communicate**  
Explain trade‑offs: heavier client caching reduces CDN load but increases storage; adaptive bitrate saves bandwidth but adds encoding complexity. Narrate that we prioritize user QoE (latency + reliability) while keeping backend stateless for horizontal scaling. This structured walkthrough demonstrates clear problem framing, technical depth, and awareness of edge cases—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
