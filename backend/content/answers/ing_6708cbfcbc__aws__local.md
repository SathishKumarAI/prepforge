---
qid: ing_6708cbfcbc__aws__local
question: 'Explain: Serving a custom completion model to millions of DAU: walk me
  through the inference-cost model and your top three levers.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 520
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:17:58-05:00'
sources: []
---

**Situation** – I led a team that had to expose a custom GPT‑style completion model to **10M daily active users (DAU)** on an e‑commerce platform. The inference latency budget was 200 ms and we needed to keep the cost per request under $0.0005.

**Task** – Design an end‑to‑end serving pipeline that balances performance, cost, and reliability while staying within AWS limits.

**Action**  

| Lever | Technical Solution | AWS Services | Rationale |
|-------|--------------------|--------------|-----------|
| **1️⃣ Model quantization & pruning** | 4‑bit weight quantization + sparsity (80 % weights removed) | SageMaker Neo, EC2 Inf1 | Reduces GPU memory by ~5× → cheaper inference cost and lower peak RAM. |
| **2️⃣ Autoscaling with request‑based batching** | Lambda@Edge + API Gateway + SQS FIFO for micro‑batching (max 32 requests) | AWS Lambda, API Gateway, SQS | Batch reduces per‑request overhead by 3×; autoscale on queue depth keeps latency <200 ms. |
| **3️⃣ Multi‑region edge cache** | CloudFront + Lambda@Edge to serve cached completions for popular prompts | CloudFront, Lambda@Edge | Cuts origin hits by ~70 %, lowering EC2 usage and improving availability in case of a region outage. |

I built an **end‑to‑end cost model**:  
- *Inference compute*: 0.0004 USD per request (after quantization).  
- *Batching & caching overhead*: +0.00005 USD.  
Total = **$0.00045**, below the target.

**Result** – After launch, we achieved <200 ms latency for 95 % of requests, reduced monthly inference spend from $12M to $5.4M (55 % savings), and maintained 99.99 % uptime across three regions.

**Learnings** – The biggest blocker was the initial over‑optimistic batch size; after A/B testing we adjusted to 16 requests per batch, balancing throughput and tail latency. This iteration reinforced *Ownership* (owning the entire cost/latency loop) and *Dive Deep* (profiling GPU memory vs. inference time).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
