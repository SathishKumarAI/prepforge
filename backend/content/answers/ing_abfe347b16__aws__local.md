---
qid: ing_abfe347b16__aws__local
question: 'Q: What determines TTFT vs TPS? — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 434
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:54:53-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the redesign of a real‑time recommendation engine that served ~3 M users/day. The SLA required <200 ms for the first byte (TTFT) while still handling >10 k TPS.  

**Action**  
I split the inference pipeline into two micro‑services: *Feature Store* (Redis + DynamoDB) and *Model Inference* (SageMaker Endpoint). I introduced a **cache‑first strategy** – hot embeddings were cached in Amazon ElastiCache for Redis; cold hits triggered async model calls. I instrumented CloudWatch metrics to separate TTFT (latency from request receipt to first byte of response) vs TPS (throughput of processed requests).

*AWS services used:*  
- **Amazon SageMaker** for low‑latency inference (multi‑model endpoint).  
- **Amazon ElastiCache (Redis)** for sub‑millisecond feature lookup.  
- **API Gateway + Lambda@Edge** to offload TLS termination and edge caching.  
- **Kinesis Data Streams** to buffer burst traffic.

I performed a **capacity planning simulation** in CloudWatch, showing that caching reduced TTFT from 350 ms to 110 ms while TPS rose from 4 k to 12 k without additional cost (Redis cluster remained under 70 % CPU).  

**Result**  
TTFT dropped 68 %, TPS increased 200 %. Customer satisfaction scores improved by 15 points. The design also lowered operational costs by $8K/month.  

> **Leadership Principles:** *Customer Obsession* – we met the user‑experience goal; *Ownership* – I drove cross‑team alignment and continuous monitoring.  
> **Bar‑raiser cues:** clear ownership, deep dive into latency sources, quantified impact, and lessons from initial over‑provisioning that led to cost savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
