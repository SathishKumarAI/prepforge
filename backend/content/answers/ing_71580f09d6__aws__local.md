---
qid: ing_71580f09d6__aws__local
question: 'Explain: can get to decide which implementation or'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 423
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:41:48-05:00'
sources: []
---

**Situation** – In a recent e‑commerce launch I had to pick an inference engine for a recommendation model that served 2 M requests per day. The options were: (1) a self‑hosted Docker stack on EC2, (2) SageMaker Endpoint, or (3) AWS Lambda with TensorFlow Lite.  

**Task** – Deliver <10 ms latency, 99.9% availability, and keep ops cost below $15k/month while staying compliant with GDPR.

**Action** –  
1. **Dive Deep into metrics:** Benchmarked each stack on a representative dataset (≈500 GB). EC2 achieved 8 ms but required 4 c5.xlarge instances → $24k/mo. SageMaker gave 9 ms, auto‑scales, and used spot instances → $10k/mo. Lambda hit 15 ms but could not sustain the traffic spike during sales.  
2. **Ownership & Bias for Action:** I sketched a hybrid design: use SageMaker with *Realtime Endpoint* + *Auto Scaling* (min 2, max 12). Add a CloudFront cache layer to offload cold starts.  
3. **Cost/Availability trade‑off:** Calculated that the endpoint would consume ~30 GB/s of inference traffic → 0.5 ms per request on average. With a 20% buffer for peak load and a 99.9% SLA, the cost dropped to $12k/mo.

**Result** –  
*Latency:* 8–10 ms (average), *Availability:* 99.94%, *Cost:* $12.3k/month.  
The model now handles 4× traffic growth with zero outages. I documented the decision in a “Post‑Mortem” deck, noting that early reliance on EC2 would have hidden the auto‑scaling cost benefit.  

**Leadership Principles:** Ownership & Dive Deep.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
