---
qid: ing_28674dae0c__aws__local
question: 'Explain: Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 223
output_tokens: 441
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:56:57-05:00'
sources: []
---

**Hybrid Search – A Customer‑Obsessed Solution**

**Situation / Task**  
At my previous role I led the migration of a legacy search platform for an e‑commerce catalog that served ~5 M users/day. The existing keyword engine returned 30% irrelevant results and had latency >500 ms, hurting conversion by ~3%. My goal was to deliver a hybrid search combining semantic AI (BERT) with traditional inverted indexes, reducing click‑through time and improving relevance.

**Action**  
1. **Requirements & Design** – Built a two‑tier architecture:  
   * **ElasticSearch** for fast token‑based retrieval (high availability, auto‑scaling).  
   * **Amazon SageMaker** hosted a fine‑tuned BERT model that generated similarity scores on user queries.  
2. Deployed the models as **AWS Lambda** functions behind an API Gateway to keep costs low; used **S3** for storing embeddings and **DynamoDB** for caching.  
3. Implemented **A/B testing** with a 10% traffic split, collecting relevance metrics (Precision@5, NDCG).  
4. Optimized the Lambda concurrency to 5000 and applied provisioned concurrency for peak hours.

**Result**  
- Relevance scores improved from **NDCG = 0.32 → 0.48** (15% absolute lift).  
- Search latency dropped from 480 ms to **110 ms** on average.  
- Conversion rate increased by **2.7%**, translating to ~$4M/year in incremental revenue.

**Learning & Ownership**  
I owned the full stack, continuously monitored CloudWatch metrics, and iterated the model after each test cycle. The bar‑raiser will note my deep dive into latency bottlenecks, quantifiable impact on business KPIs, and proactive post‑deployment learning loop—demonstrating **Ownership**, **Dive Deep**, and a **Bias for Action** mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
