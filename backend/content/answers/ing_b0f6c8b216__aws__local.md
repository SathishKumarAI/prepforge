---
qid: ing_b0f6c8b216__aws__local
question: 'Explain: Components of Latency — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 441
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:05:19-05:00'
sources: []
---

**Situation** – I was tasked to redesign a real‑time recommendation engine that served 1 M requests per second while keeping *latency < 120 ms* and *throughput > 50 kRPS*.  
**Task** – Break down latency into its three components (network, processing, storage), quantify each, and architect a solution that balances throughput, bandwidth, and cost.  

**Action** –  
1. **Network Layer** – Measured round‑trip time from edge to Lambda; 70 % of total latency was network jitter (~30 ms). Deployed CloudFront + AWS Global Accelerator to reduce this to ~10 ms.  
2. **Processing Layer** – The ML inference step (TensorFlow model) accounted for 60 %. Migrated the model to SageMaker Runtime on GPU instances, parallelizing across 8 *ml.g5.12xlarge* nodes; batch‑size 64 reduced per‑request compute from 70 ms to 25 ms.  
3. **Storage Layer** – Feature store reads (DynamoDB) added 15 % latency (~20 ms). Switched to DynamoDB Accelerator (DAX) and pre‑cached hot keys in Redis, cutting this to ~5 ms.  

Result: End‑to‑end latency dropped from 250 ms to **95 ms** (a 62 % improvement), throughput rose to **80 kRPS**, and cost per inference fell by **$0.0003** (~30 %).  

**Leadership Principles** – *Customer Obsession* (met SLA), *Ownership* (took end‑to‑end responsibility).  
**Bar‑raiser cues** – I quantified each latency bucket, demonstrated trade‑offs between scaling GPU nodes vs cost, and learned that premature optimization of network can mask deeper compute bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
