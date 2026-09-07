---
qid: ing_8ea1fbfb06__faang__local
question: 'Explain: Back-of-the-Envelope Estimation — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 509
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:15:52-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a quick back‑of‑the‑envelope (BOE) estimate of the system required to support Spotify’s core streaming service: ≈ 70 M active users, each listening an average of 3 h/day. I’ll confirm assumptions on peak concurrency, bitrate (320 kbps), data retention (30 days), and geographic distribution.

**Approach**  
1. **User‑level throughput** – compute daily bandwidth.  
2. **Storage** – estimate raw media + metadata for one month.  
3. **Compute & caching** – outline CDN, transcoding, recommendation engines.  
4. **Scalability** – use 3× redundancy and autoscaling thresholds.

**Depth**  
- *Bandwidth*: 70 M × 3 h × 3600 s × 320 kbps ≈ **2.5 PB/day** (~ 30 Tbps peak).  
- *Storage*: 70 M users × 1 TB media ≈ **70 PB**; add 10× metadata → ~ 80 PB.  
- *CDN nodes*: ~ 200 global edge servers, each handling ~ 150 Gbps.  
- *Compute*: Transcoding pipeline ~ 500 vCPU‑hrs/day for user‑generated content; recommendation ML ≈ 1 TB of training data, 10 GPU workers.  
- *Latency*: Target < 100 ms end‑to‑end → use low‑latency KV store (e.g., DynamoDB) + edge caching.

**Edge Cases**  
- Sudden viral releases causing traffic spikes (> 3× peak).  
- Offline mode with local storage limits.  
- GDPR/CCPA compliance for user data.  
- Network outages in specific regions.

**Optimize & Communicate**  
I’d suggest moving to a serverless CDN (e.g., CloudFront + Lambda@Edge) to auto‑scale, sharding metadata across multiple shards to reduce hot‑spots, and employing delta updates for playlists to cut bandwidth by ~ 20%. I would present the BOE in a slide: “Bandwidth” → “Storage” → “Compute” → “Cost”, then walk through trade‑offs while highlighting that this is a rough 10× safety factor estimate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
