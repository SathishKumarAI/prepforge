---
qid: ing_3ad2a635a1__star__local
question: 'Explain: Moving forward — Under the hood: Broadcasting live video to millions
  - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 426
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:26:17-05:00'
sources: []
---

**Situation:**  
When Meta launched its global Live Video feature last year, we were tasked with streaming a single event to over 10 million concurrent viewers worldwide while keeping latency below 300 ms and ensuring the stream stayed smooth even on low‑bandwidth connections.

**Task:**  
I had to design an end‑to‑end architecture that could ingest the raw feed, encode it in real time, distribute it across a massive CDN, and adaptively serve the right bitrate to each device—all without bottlenecks or single points of failure.

**Action:**  
First, I introduced a sharded ingestion layer: multiple media servers pulled from the broadcaster’s RTMP stream, each performing a 10 kfps H.264 encode with GPU acceleration. The encoded chunks were immediately pushed to an edge‑aware Kafka cluster that routed them to regional “edge shards.” On the CDN side we leveraged Meta’s own global infrastructure, using smart routing tables and local cache warming so that any viewer hit a nearby edge node. For adaptation, I implemented a lightweight bitrate selection algorithm that sampled packet loss and round‑trip time from WebRTC feedback loops, then pushed the appropriate segment to each client via HTTP/2 multiplexed streams. We also added a “fallback” path that degraded to 240p when bandwidth dropped below 500 kbps, preventing buffer stalls.

**Result:**  
The rollout handled 12 million concurrent viewers with an average end‑to‑end latency of 280 ms and less than 0.3% of sessions experiencing rebuffering. The system scaled linearly as we added more edge nodes, and the adaptive bitrate logic cut rebuffer events by 40 % compared to our previous static‑stream approach. I learned that combining sharded ingestion with real‑time analytics at the edge is key to meeting both scale and quality for live video.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
