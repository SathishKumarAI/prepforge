---
qid: ing_69fcc94c95__star__local
question: 'Explain: Playback Service — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 382
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:59:23-05:00'
sources: []
---

**Situation**  
At my previous company we built a music streaming platform that served millions of users worldwide. Our existing playback pipeline suffered from high latency during peak hours, and the quality‑of‑service (QoS) metrics—average start time 2.8 s and buffering events per user 1.4—were far above industry targets.

**Task**  
I was tasked with designing a scalable Playback Service that could deliver low‑latency audio streaming to 10 million concurrent users while ensuring graceful degradation during network congestion, all within our budget constraints.

**Action**  
First, I introduced a two‑tier caching strategy: a CDN‑level edge cache for popular tracks and an in‑region distributed cache (Redis Cluster) for session‑specific playlists. To handle varying bitrates, I implemented adaptive bitrate streaming using the DASH protocol, selecting codecs based on real‑time bandwidth probes from the client. For fault tolerance, I added a stateless microservice layer behind a load balancer that routes requests to healthy instances and falls back to lower quality if latency exceeds 300 ms. Finally, I integrated a telemetry pipeline (Prometheus + Grafana) to monitor start times, buffer counts, and cache hit ratios in real time.

**Result**  
After deployment, average playback start time dropped from 2.8 s to 0.9 s, and buffering events per user fell below 0.3 during peak periods—meeting our SLA of <1 s start time 99% of the time. The caching layer reduced CDN bandwidth costs by 35%. I learned that combining edge caching with adaptive bitrate streaming and real‑time telemetry is key to balancing latency, cost, and QoS in a global music service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
