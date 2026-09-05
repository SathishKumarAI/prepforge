---
qid: ing_9d2e43ca97__star__local
question: 'Q: When would you use hybrid search over pure dense search?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 261
total_tokens: 499
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:46:27-05:00'
sources: []
---

**Situation:** In a product launch for our e‑commerce recommendation engine, we noticed that users were clicking on “related products” but the click‑through rate (CTR) dropped from 18% to 12% after deploying the new dense vector search model.

**Task:** I had to improve relevance while keeping latency under 200 ms, and ensure that keyword queries like “wireless earbuds” still returned accurate results for both semantic intent and exact term matches.

**Action:** I introduced a hybrid search pipeline: first, a lightweight inverted index performed an exact match on the query terms; second, a dense vector model (using Sentence‑BERT fine‑tuned on purchase logs) ranked candidates. We combined scores via learned weighted sum and applied a top‑k pre‑filter to keep latency low. I also added an auto‑switch that fell back to pure dense search when the query contained no exact tokens.

**Result:** CTR rose to 16% within two weeks, and latency stayed at 180 ms on average. The hybrid approach taught me how to balance interpretability and recall, and it became a standard pattern for all future semantic search features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
