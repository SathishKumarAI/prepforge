---
qid: ing_bac3242240__star__local
question: 'Explain: Two-Stage Pipeline — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 339
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:44:32-05:00'
sources: []
---

**Situation**  
During a product launch for an e‑commerce search feature at my previous company, the first‑pass ranking algorithm was pulling up relevant products but still had a 12 % click‑through drop compared to our target KPI. The engineering team needed a quick win without redesigning the core model.

**Task**  
I was tasked with boosting CTR by 5–7 % within two weeks while keeping latency under 200 ms per query, using only the data already available from the search logs.

**Action**  
I proposed a two‑stage pipeline: (1) keep the existing neural ranking model as the *retrieval* stage to filter the top 200 candidates; (2) build a lightweight gradient‑boosted tree reranker that reorders those 200 based on fine‑grained signals—user dwell time, historical conversion rates, and session context. I implemented the reranker in XGBoost, trained it on a week of click data, and integrated it via a microservice behind our existing search API. To meet latency constraints, I limited the feature set to 15 engineered features and used model quantization.

**Result**  
Within one month, CTR rose from 12 % to 17 %, surpassing the target by 2 %. The reranker added only 35 ms per query, keeping overall latency well below our SLA. I learned that a lightweight second‑stage reranker can deliver significant business impact without overhauling the main ranking pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
