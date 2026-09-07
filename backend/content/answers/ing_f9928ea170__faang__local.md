---
qid: ing_f9928ea170__faang__local
question: 'Explain: Bringing latency down — Under the hood: Broadcasting live video
  to millions - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 600
total_tokens: 842
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:19:57-05:00'
sources: []
---

**Clarify**  
The question asks how a platform like Meta can keep end‑to‑end latency low when broadcasting a single live video stream to millions of viewers worldwide. I’ll assume we’re targeting sub‑200 ms total delay (capture → server → client) and that the network is heterogeneous (Wi‑Fi, 4G/5G, fiber).

**Approach**  
1. **Edge caching & CDN placement** – push the stream to edge nodes near user clusters.  
2. **Adaptive bitrate & packetization** – use low‑latency codecs (e.g., AV1‑LD) and small GOPs.  
3. **Transport protocol tuning** – QUIC with zero‑RTT, prioritized packets, congestion control tuned for live traffic.  
4. **Server‑side scaling** – sharded ingest, auto‑scaling transcoding workers, and multi‑region replication to reduce round‑trips.  
5. **Client‑side optimizations** – pre‑fetching, buffer underrun detection, and predictive buffering.

**Depth**  
- *CDN*: each region hosts ~10 edge servers; we use consistent hashing of user IPs to pick the nearest node, reducing RTT from 100 ms (global) to <30 ms.  
- *Codec*: AV1‑LD with 2‑frame GOP gives ~50 ms codec latency and ~400 kbps per stream at 720p.  
- *Transport*: QUIC’s 0‑RTT handshake eliminates the first RTT; we also implement congestion control “low‑delay” mode to favor throughput over fairness during a live burst.  
- *Scaling*: We run N ingest nodes (N≈users/10k) and shard transcoding across GPU clusters, achieving O(log M) latency where M is viewer count.  
- *Client*: A 200 ms buffer allows jitter handling; predictive buffering uses the last few seconds of data to fill gaps.

**Edge Cases**  
- **Network churn**: sudden loss of edge node forces re‑routing; we fall back to the nearest available CDN.  
- **Massive spikes**: auto‑scaling might lag; pre‑provisioned “warm” nodes mitigate this.  
- **Device heterogeneity**: older phones may not support AV1; fallback to H.264 with slightly higher latency.

**Optimize & Communicate**  
Future gains come from *federated edge AI* for real‑time packet prioritization and *adaptive mesh networking* among clients to offload traffic. I’d explain the trade‑off between buffer size (latency vs. smoothness) and how we tune it per region. This narrative shows a clear, systematic solution with concrete numbers—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
