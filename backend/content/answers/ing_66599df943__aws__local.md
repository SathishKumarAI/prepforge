---
qid: ing_66599df943__aws__local
question: 'Explain: and those points were sent to Kafka — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 435
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:16:26-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of a real‑time ride‑matching pipeline for a regional taxi company (think *Uber/Ola*). Our goal was to ingest 10 k events/second, process them in <200 ms, and scale elastically during surge periods.

**Action**  
1. **Event Ingestion** – I chose **Amazon MSK (Kafka)** because it guarantees ordered delivery with sub‑millisecond latency and seamless integration with downstream services.  
2. **Stream Processing** – A fleet of **AWS Lambda** functions (auto‑scaling, 10 ms cold start) consume Kafka topics via the *MSK Connect* connector, performing geospatial joins and scoring.  
3. **State Management** – Results are written to a partitioned **Amazon DynamoDB Global Table** for instant read‑through by the dispatch service; TTL removes stale matches after 5 min.  
4. **Monitoring & Scaling** – CloudWatch metrics (consumer lag, Lambda errors) trigger Auto Scaling for both MSK brokers and Lambda concurrency. I also set up a **S3 data lake** to archive raw events for ML model retraining.

**Result**  
- Latency dropped from 1 s → <200 ms (95th percentile).  
- Throughput rose to 15 k events/s, supporting 30% more rides during peak.  
- Operational cost fell by 22 % due to serverless compute and auto‑scaling.

**Learnings**  
Ownership: I championed the end‑to‑end flow, not just a component. Dive Deep: I built custom metrics to surface consumer lag before it hit SLA. Bar‑raiser cues: clear ownership, data‑driven impact, and iterative learning from early production failures guided my design choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
