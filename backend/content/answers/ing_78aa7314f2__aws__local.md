---
qid: ing_78aa7314f2__aws__local
question: 'Explain: Topical relevance: Hybrid search with reranking'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 484
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:58:09-05:00'
sources: []
---

**Situation (S)**  
I led a feature to improve our knowledge‑base search for an enterprise SaaS product that handled 1 M queries/day. Customers complained that the top hits were often generic and irrelevant, causing a 12 % drop in NPS.

**Task (T)**  
Design a hybrid search + re‑ranking pipeline that boosts topical relevance while keeping latency <200 ms and cost <$0.01 per query.

**Action (A)**  

| Step | AWS Services | Why |
|------|--------------|-----|
| 1️⃣ Indexing | **Amazon OpenSearch Service** (with dense vector fields) | Handles keyword + semantic search at scale, auto‑scaling nodes for burst traffic. |
| 2️⃣ Retrieval | **OpenSearch query DSL** with `knn` and `bool` queries | Retrieves top‑k (k=20) candidates in ~70 ms. |
| 3️⃣ Re‑ranking | **Amazon SageMaker Endpoint** (LightGBM model) + **AWS Lambda** for orchestration | Trains a lightweight gradient‑boosted tree on query+document embeddings, predicting topical score. Lambda batches 10 queries to reduce inference cost. |
| 4️⃣ Caching | **Elasticache Redis** | Stores recent top‑k results; reduces OpenSearch calls by ~30 %. |
| 5️⃣ Monitoring | **CloudWatch + Prometheus exporter** | Tracks latency, error rate, and re‑rank accuracy. |

*Bias for Action:* I prototyped the pipeline in two weeks, iterating on vector dimensionality (64→128) to hit our latency SLA.

**Result (R)**  
- Topical relevance ↑ 35 % (measured by click‑through rate).  
- NPS recovered to 78 (+6 points).  
- Cost per query dropped from $0.02 → $0.008, saving ~$120K/yr.  

**Reflection**  
I learned that early integration of caching dramatically cuts OpenSearch load; a naive design would have exceeded the budget. I documented trade‑offs (model size vs latency) for future teams and handed off the pipeline as an internal AWS Solution Blueprint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
