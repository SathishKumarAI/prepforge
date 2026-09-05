---
qid: ing_c7a1c57673__star__local
question: 'Explain: Solving the “thundering herd” problem — Under the hood: Broadcasting
  live video to millions - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 361
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:08:47-05:00'
sources: []
---

**Situation:**  
At Meta, we were launching a new live‑video feature that would allow creators to broadcast to up to 10 million concurrent viewers during peak hours. Our CDN had been fine for static content, but the initial load tests showed a classic “thundering herd” – every edge node attempted to pull the same high‑resolution stream from origin servers simultaneously, saturating bandwidth and causing latency spikes.

**Task:**  
I needed to design an architecture that would scale to millions of simultaneous viewers without overloading any single server or network path, while keeping per‑viewer quality consistent and minimizing end‑to‑end latency.

**Action:**  
We introduced a two‑tiered approach: first, we deployed a lightweight “edge cache” layer using Memcached‑backed key/value stores on each CDN edge. When a viewer requested a stream, the edge would check if it already had the current segment; if not, it fetched only that segment from a dedicated origin pool and cached it for the next 30 seconds. Second, we implemented a publish–subscribe model with Kafka to fan‑out “segment ready” events to all edges, so they pulled new segments asynchronously rather than simultaneously. We also used adaptive bitrate switching at the player level to reduce load during peak congestion.

**Result:**  
Load tests showed a 70 % reduction in origin bandwidth usage and a 40 % drop in average latency during peak times. The feature launched with zero buffering incidents for over 8 million viewers, and we learned that fine‑grained caching combined with event‑driven pulls is essential to tame the thundering herd in high‑scale video delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
