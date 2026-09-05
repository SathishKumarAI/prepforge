---
qid: ing_162c652b67__star__local
question: 'Explain: Customers who viewed this item also viewed'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 334
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:12:51-05:00'
sources: []
---

**Situation:**  
In the fall of 2023, our e‑commerce team was tasked with boosting cross‑sell revenue on the flagship product page for a high‑margin electronics line. The conversion rate from view to purchase had plateaued at 2%, and we needed an additional 0.5% lift without inflating advertising spend.

**Task:**  
Design and deploy a recommendation system that surfaces “customers who viewed this item also viewed” suggestions, ensuring relevance while keeping latency under 200 ms for the front‑end experience.

**Action:**  
I built a lightweight collaborative filtering model using implicit feedback from the last 6 months of clickstream data. After normalizing user and product embeddings in a 64‑dimensional space with ALS (Spark MLlib), I generated top‑10 item–item similarity lists. To keep inference fast, I pre‑computed these lists daily and stored them in Redis as sorted sets keyed by product ID. On the web layer, a simple Go microservice fetched the nearest neighbors in < 50 ms and injected the suggestions into the React component via GraphQL. We also A/B‑tested a “confidence threshold” filter to reduce noise.

**Result:**  
Within three weeks of rollout, view‑to‑purchase on the product page rose from 2% to 2.7%, translating to an additional $1.4 M in monthly revenue for that SKU line. I learned how careful preprocessing and caching can bring sophisticated ML into production at scale without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
