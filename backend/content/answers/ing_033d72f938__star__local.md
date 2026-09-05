---
qid: ing_033d72f938__star__local
question: 'Explain: SLM Distillation — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 336
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:34:44-05:00'
sources: []
---

**Situation**  
At my last role I was part of a search‑engine team tasked with improving click‑through rates for a niche e‑commerce platform. The existing language model (SLM) served as the backbone for ranking product queries, but our A/B tests showed only a 2 % lift in CTR after fine‑tuning, and latency on mobile devices was still unacceptable.

**Task**  
I had to design a lightweight reranking pipeline that could be deployed in production without increasing inference time, while boosting relevance scores by at least 5 %.

**Action**  
I implemented SLM distillation: first I distilled the large transformer into a smaller student model using knowledge‑distillation loss with soft labels from the teacher. Then I added a reranker that combined the distilled SLM’s top‑k predictions with handcrafted features (e.g., click‑through history, price proximity) in a gradient‑boosted tree. The reranker was trained on a held‑out set of 200 k query–product pairs and tuned to minimize mean reciprocal rank. I wrapped both models into a single microservice using ONNX Runtime, achieving sub‑30 ms inference per request.

**Result**  
After rollout, CTR increased by 7 %, while latency dropped from 120 ms to 35 ms on average. The experiment also revealed that incorporating user‑behavior features in the reranker contributed more than the distilled model alone, a lesson I carried into future projects involving hybrid ranking pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
