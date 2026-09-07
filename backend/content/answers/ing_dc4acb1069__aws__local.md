---
qid: ing_dc4acb1069__aws__local
question: 'Explain: Capacity Planning System Design — Back of the Envelope - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 493
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:37:03-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑science team at my previous company, we had to launch an ML model that would serve predictions for 200 k users per minute. The CTO asked me to sketch a capacity‑planning system “back of the envelope” so we could scale on demand without overspending.

**Action – Design & AWS Services**  
I scoped three key layers:  
1. **Ingestion** – *Kinesis Data Streams* (partitioned by user segment) to buffer raw events at 2 M records/s.  
2. **Feature Store** – *DynamoDB Global Tables* with TTL for real‑time features, backed by *AWS Glue* jobs that pre‑aggregate nightly metrics into *S3* for batch inference.  
3. **Inference** – *Amazon SageMaker Endpoint* behind an *Application Load Balancer*; I provisioned 4 GPU instances (p3.2xlarge) and set up autoscaling based on CPU > 70% or request latency > 200 ms.

I calculated peak load:  
- 200 k req/min ≈ **333 req/s**.  
- With a 10 ms inference time, each instance handles ~100 req/s → **4 instances** suffice for 95 % of traffic; the autoscaler bumps to 8 during flash sales (30 % surge).  

Cost estimate:  
- Kinesis: $0.015/GB ≈ $120/day.  
- DynamoDB: $1.25 per read/write unit × 200 units = $250/day.  
- SageMaker endpoints: 4 × $3/hr = $36/hr ≈ $864/month; autoscaling to 8 adds only ~$400/month.

**Result**  
We launched with a **99.9 % SLA** and handled a 50 % traffic spike during a product launch without any outages, saving ~20 % on compute costs versus over‑provisioning.  

**Reflection**  
I learned that *dive deep* into latency budgets and *ownership* of the end‑to‑end pipeline are critical—any misstep in data freshness or scaling thresholds would have cascaded to the user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
