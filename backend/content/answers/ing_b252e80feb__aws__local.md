---
qid: ing_b252e80feb__aws__local
question: 'Explain: Company context — Xai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 431
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:08:08-05:00'
sources: []
---

**Situation & Task**  
In my last role at a fintech startup we launched **XAI‑Insights**, an AI‑driven compliance layer that flags suspicious transactions in real time. The product needed to scale from ~10k daily checks to >1M while keeping latency under 200 ms and cost below $0.05 per check.

**Action**  
*Owned the architecture*: decomposed the pipeline into three stateless Lambda functions (pre‑filter, model inference, post‑process).  
*Dived deep into data*: built a feature store in DynamoDB + S3, used SageMaker for incremental training and A/B testing.  
*Leveraged AWS services*:  
- **Amazon Kinesis** for ingestion (10 Gbps burst) → **Lambda** for low‑latency compute.  
- **SageMaker Endpoint** behind an Application Load Balancer with autoscaling policies (min 2, max 50).  
- **AWS Step Functions** to orchestrate retries and dead‑letter queues.  
*Optimized cost*: enabled Lambda provisioned concurrency only during peak hours; switched from On‑Demand to Spot Instances for SageMaker training.  

**Result**  
Reduced average inference latency from 1.2 s to 0.18 s, increased throughput by 100× (10k → 1M/day), and cut operational cost by 35% ($120K/year). The system also achieved 99.97 % availability in the EU‑Central region.

**Leadership Principles Highlighted**  
- **Ownership**: drove end‑to‑end delivery, handled post‑mortems, and iterated on feedback loops.  
- **Dive Deep**: quantified every component’s performance, tuned at the byte level.  

*Bar‑raiser focus*: clear ownership narrative, data‑driven impact, deep technical reasoning, and lessons learned from initial latency spikes (implemented caching layer after first failure).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
