---
qid: ing_fecd03f954__star__local
question: 'Explain: Back-of-the-Envelope Estimation — Design WhatsApp | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 379
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:58:21-05:00'
sources: []
---

**Situation**  
During a system‑design mock interview I was asked to sketch a rough capacity plan for a WhatsApp‑style messaging service that could support 500 million active users with a peak of 10 billion messages per day.

**Task**  
I had to estimate the number and size of servers, storage needs, network bandwidth, and latency targets without digging into code or detailed specs—just a back‑of‑the‑envelope calculation that still made sense to stakeholders.

**Action**  
I started by assuming each user sends/receives 50 MB of data daily (≈10 k messages). That gives ~5 PB of traffic per day. With a 3× redundancy for durability, I rounded up to 15 PB of storage. For compute, I estimated 100 GB RAM per messaging server and projected about 2000 servers (100 GB × 2000 = 200 TB RAM) to handle peak load with a 2× safety margin. Network: at 1 Gbps links each server would need ~10 Gbps uplink; I chose 40‑Gbps switches for headroom. Latency target of <150 ms led me to place data centers in at least 4 continents, using CDN‑style edge caching for media.

**Result**  
The quick math produced a design that fit within a $120 M annual operating budget and met the latency goal. It also highlighted trade‑offs: higher redundancy increases cost but improves reliability; more edge nodes reduce latency but add complexity. I learned how to balance rough estimates with realistic constraints, a skill that’s invaluable in any large‑scale system design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
