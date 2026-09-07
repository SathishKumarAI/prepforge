---
qid: ing_f4f0f1ef86__aws__local
question: 'Explain: Airbnb — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 391
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:30:48-05:00'
sources: []
---

**Situation / Task**  
At Airbnb I led the redesign of the recommendation engine that surfaced listings to guests during search. The business goal was to lift click‑through rate (CTR) by 15 % while keeping latency under 200 ms for millions of concurrent users.

**Action**  
1. **Ownership & Bias for Action** – I scoped a pilot, built a new model in SageMaker using a deep factorization machine trained on 3 billion interaction records.  
2. **Dive Deep** – I profiled data drift quarterly; discovered that seasonal “stay‑cation” signals were decaying, so added a real‑time feature store (Amazon Timestream + DynamoDB) to refresh embeddings every hour.  
3. **Invent & Simplify** – Replaced the 10 GB inference model with a quantized TensorFlow Lite version deployed via Lambda@Edge, cutting GPU usage by 70 %.  
4. **Deliver Results** – Rolled out A/B test (n=2M users); CTR rose from 3.1 % to 3.6 % (+15 %), revenue increased $12 M/month, and cost per inference dropped from $0.02 to $0.005.

**Result**  
The new pipeline runs on a fully serverless stack (SageMaker → Lambda@Edge → DynamoDB), achieving >99.9 % availability, auto‑scaling with 1‑minute cold start latency, and a 60 % reduction in operational spend.  

*Bar‑raiser note*: I own the end‑to‑end loop—data ingestion, model training, deployment, monitoring—and iterate based on concrete metrics, learning from each drift event to keep the system robust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
