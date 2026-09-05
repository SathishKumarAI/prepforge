---
qid: ing_31448b3fa2__star__local
question: 'Explain: Sort search results — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 376
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:06:54-05:00'
sources: []
---

**Situation**  
During a product launch for our e‑commerce analytics dashboard, the team noticed that customer queries returned irrelevant “hot” items at the top of the list, pushing out lower‑quality but highly relevant products. The KPI—conversion rate from search results—was down 12% compared to last quarter.

**Task**  
I was tasked with redesigning the ranking logic so that relevance and business value were balanced, ensuring that high‑confidence matches appeared first while still promoting featured items when appropriate.

**Action**  
First, I mapped out the current `sort` pipeline in our ES queries. We were only using a simple field sort on `price`. I added a composite sort:  
1. Primary sort by `_score` (BM25 relevance) with a boost for the `category_match` field.  
2. Secondary sort by a custom script that weighted `rating` and `stock_level`, giving higher scores to well‑reviewed, in‑stock items.  
3. Finally, I introduced a “featured” flag with a small positive tie‑breaker so promoted products stayed ahead of equal‑scoring items.  
I tuned the query using the Kibana Profiling UI, reduced the latency from 1.2 s to 0.8 s, and ensured that each sort component was cached.

**Result**  
The new sorting logic lifted the conversion rate by 18% within two weeks of deployment. Search relevance scores improved (average BM25 score rose from 3.4 to 4.1), and featured items still appeared prominently without sacrificing overall quality. I learned how to layer multiple sort criteria in ES, balance scoring with business rules, and measure impact through A/B testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
