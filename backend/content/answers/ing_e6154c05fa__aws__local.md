---
qid: ing_e6154c05fa__aws__local
question: 'Explain: Request Prioritization — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 436
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:58:14-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of a real‑time recommendation engine from on‑prem to AWS. The inference pipeline had to serve 5 M requests/day while keeping latency <200 ms and staying under $20K/month.

**Action**  
I introduced *request prioritization* by tagging each request with a “priority score” derived from user engagement (CTR, recency). Using **Amazon Kinesis Data Streams** I routed high‑score events to an **AWS Lambda** worker pool that invoked a **SageMaker Endpoint** on a GPU instance. Low‑score traffic was funneled through a cheaper **EC2 Spot** batch job feeding the same endpoint via **AppSync**. The architecture included:

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Ingestion | Kinesis | Scales to 10 k/s, durable buffering |
| Prioritization | Lambda + DynamoDB TTL | Stateless, auto‑scaling |
| High‑priority inference | SageMaker real‑time endpoint (g4dn.xlarge) | Low latency |
| Low‑priority inference | Batch SageMaker endpoint on Spot | Cost reduction |

I added a **CloudWatch** metric for “latency per priority bucket” and set an alarm to auto‑scale the high‑priority pool by 20% when threshold exceeded.

**Result**  
Latency dropped from 350 ms (all traffic) to 140 ms for top‑10% requests, improving conversion by **12%**. Monthly cost fell to $14K – a 30% savings – while maintaining SLA compliance.  

**Reflection**  
I owned the trade‑off between speed and spend, diving deep into request patterns to validate the priority schema. The experiment taught me that *bias for action* can be paired with *ownership* to achieve measurable impact without compromising reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
