---
qid: ing_5a35106abc__faang__local
question: 'Explain: Audio Files (The Big One) — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 553
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:13:27-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design the core audio‑storage/streaming subsystem of a music service like Spotify.  
Assumptions to confirm:  
* Scale – millions of users, billions of tracks, high concurrent streams (≈10k per second).  
* Features – on‑demand playback, offline caching, adaptive bitrate, user playlists, DRM protection.  
* Constraints – low latency (<200 ms), cost‑effective storage, global CDN coverage.

**2️⃣ Approach**  
1. **Ingest & Encode** – upload → transcoding into multiple bitrates (128/256/320 kbps, AAC/HLS).  
2. **Storage Layer** – object store (S3‑compatible) for raw files; metadata DB (Cassandra) for track info and bitrate mapping.  
3. **CDN Distribution** – edge caches with smart prefetching for popular tracks; use HTTP/2 + TLS.  
4. **Playback API** – RESTful endpoints returning signed URLs, support HLS/DASH for adaptive streaming.  
5. **User‑Side Cache** – local disk or RAM cache per device, sync playlist changes.

**3️⃣ Depth**  
*Encoding*: parallel workers (Kinesis → Lambda) → cost ≈$0.01/GB processed.  
*Storage*: 1 TB raw ≈$23/month; compressed ≈$15/month.  
*CDN*: edge cache hit rate ~95%; reduce origin load by >10×.  
*Latency*: CDN <50 ms, encode queue ≤5 s.  
*Fault‑tolerance*: multi‑AZ replication, immutable object storage, request retry with exponential backoff.

**4️⃣ Edge Cases**  
*Burst traffic (e.g., new release)* – auto‑scale workers; pre‑warm edge nodes.  
*Device offline → resume* – store last‑played timestamp in metadata DB.  
*DRM breach* – use token‑based signed URLs expiring after short window.

**5️⃣ Optimize & Communicate**  
Future: adopt **chunked progressive downloads** to reduce buffering, implement **predictive prefetching** using ML on listening habits. I’d present this flow diagrammatically, justify each trade‑off (cost vs latency), and show how monitoring metrics (cache hit rate, transcoding queue length) drive auto‑scaling decisions. This structure demonstrates clear problem framing, a solid design plan, depth in implementation details, awareness of edge cases, and an eye toward continuous improvement—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
