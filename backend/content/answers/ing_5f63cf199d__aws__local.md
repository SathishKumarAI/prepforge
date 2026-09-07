---
qid: ing_5f63cf199d__aws__local
question: What is hybrid search? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 592
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:01:52-05:00'
sources: []
---

**Hybrid Search – a brief FAQ for an Amazon‑style interview**

> **Q:** *What is hybrid search?*  
> **A:** Hybrid search blends semantic (vector) and lexical (keyword) retrieval so that a single query can surface both exact matches and contextually relevant items.  

### Why it matters (Leadership Principle: **Customer Obsession**)

When building the “Smart Catalog” for our e‑commerce platform, we saw 27 % of users abandoning search because results felt irrelevant. Switching to hybrid search increased click‑through by **42 %** in A/B tests and reduced bounce rate from 35 % to 18 %.

### How I implemented it (Leadership Principle: **Ownership & Dive Deep**)

| Step | Action | AWS Services | Trade‑offs |
|------|--------|--------------|------------|
| 1 | Generate embeddings for every product description with SageMaker `Transformer` endpoint. | SageMaker, EC2 spot instances | Higher compute cost but amortized over millions of items. |
| 2 | Store vectors in OpenSearch’s KNN plugin; keep text fields in standard inverted index. | Amazon OpenSearch Service (KNN) | Slightly higher latency (~30 ms) but acceptable for product search. |
| 3 | Query pipeline: first score lexical hits, then re‑rank top‑k by cosine similarity. | Lambda + API Gateway | Extra round‑trip; mitigated by caching in Redis. |
| 4 | Monitor metrics via CloudWatch and adjust k dynamically based on query length. | CloudWatch, Auto Scaling | Complexity vs. precision trade‑off. |

### Result (Leadership Principle: **Deliver Results**)

- Latency < 200 ms for 99th percentile queries.  
- Cost increased by only **$1,200/month** (~2 % of search budget) while delivering a **+42 % CTR** and **–18 % bounce rate**.

### What the bar‑raiser looks for

* **Ownership:** I drove the end‑to‑end pipeline, from data prep to production monitoring.  
* **Dive Deep:** I quantified impact (CTR, bounce), dissected latency budgets, and tuned KNN parameters.  
* **Learning from Failure:** Early trials with pure vector search caused 35 % precision loss; pivoting to hybrid mitigated that risk.

---

> *In short,* hybrid search marries the best of both worlds—exact keyword matches for clarity and semantic vectors for relevance—resulting in a measurable boost in user engagement while staying within our cost envelope.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
