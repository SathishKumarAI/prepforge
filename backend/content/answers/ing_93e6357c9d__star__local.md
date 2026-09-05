---
qid: ing_93e6357c9d__star__local
question: 'Explain: Weighted Score Fusion — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 350
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:28:42-05:00'
sources: []
---

**Situation:**  
At my last company we were building a product‑search feature for an e‑commerce site that had to surface both catalog items and user‑generated content (reviews, Q&A). The existing search engine returned either product results or content, but never combined them effectively, so our click‑through rate on organic searches was only 12 %.

**Task:**  
I needed to design a hybrid ranking system that fused relevance scores from the SQL‑based product index and the Elasticsearch text index into a single ranked list, while keeping latency under 200 ms.

**Action:**  
1. Extracted TF‑IDF scores from Elasticsearch and BM25 scores from our product database via a nightly ETL job.  
2. Normalized each score to z‑scores and applied weights (0.6 for product relevance, 0.4 for content relevance) based on A/B test results.  
3. Implemented the fusion logic in Go as a microservice that queried both indices concurrently, merged the ranked lists using a weighted sum, and cached top‑k results with Redis to hit the latency budget.  
4. Added a feedback loop: logged user clicks and updated weights every week using a small gradient‑descent routine.

**Result:**  
The new hybrid search lifted organic CTR from 12 % to 18 % within two months, and overall conversion increased by 5 %. I learned that careful normalization and real‑time weight tuning are critical for blending heterogeneous relevance signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
