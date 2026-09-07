---
qid: ing_0dd40a9650__aws__local
question: 'Explain: Bandwidth — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 428
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:56:52-05:00'
sources: []
---

**Situation** – I was leading a data‑pipeline redesign for a global ad‑tech platform that shipped user‑behavior models to edge devices every minute. The old architecture had *latency* ≈ 250 ms, *throughput* 10 K events/s and a max bandwidth of 500 Mbps, causing backlogs during peak traffic (24 h spikes up to 1 M events).

**Task** – Reduce end‑to‑end latency to < 50 ms while doubling throughput without exceeding the existing budget.

**Action**  
1. **Dive Deep** into the network graph: identified a single bottleneck at the ingestion API.  
2. Deployed **Amazon Kinesis Data Streams** (sharded) for burstable throughput, and **AWS Lambda** with *reserved concurrency* to process events in parallel.  
3. Added **Amazon CloudFront** + edge‑location caching to shave latency on downstream model delivery.  
4. Implemented **Auto Scaling** on the API Gateway and an SQS buffer to smooth traffic spikes.  
5. Conducted A/B tests; measured *latency* (95th percentile), *throughput*, and *bandwidth* via CloudWatch metrics.

**Result** – Latency dropped to 38 ms, throughput rose to 25 K events/s, bandwidth peaked at 800 Mbps during spikes but stayed within the 1‑Gbps plan. Cost increased by only 12 % (from $3k to $3.36k/month).  

**Leadership Principles** – *Customer Obsession* (ensured models reached devices on time), *Ownership* (took end‑to‑end responsibility), and *Bias for Action* (rolled out changes in two sprints). The bar‑raiser will note my quantitative impact, depth of analysis, and the post‑mortem that taught us to monitor sharding thresholds proactively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
