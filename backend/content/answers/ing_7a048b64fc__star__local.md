---
qid: ing_7a048b64fc__star__local
question: 'Explain: The Full Pipeline: Hybrid + Reranking — Contextual Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 324
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:37:47-05:00'
sources: []
---

**Situation:**  
In late‑2023 I was leading the search feature for a fintech app that had over 12 million active users. Our click‑through rate on “investment insights” articles had dropped to 1.8% because the ranking engine struggled with niche queries like “ethical ETFs under $500.”  

**Task:**  
I needed to design a new retrieval pipeline that combined fast lexical matching with semantic understanding, then re‑rank results so that relevant content surfaced higher without hurting latency.

**Action:**  
I built a hybrid system: first, an ElasticSearch index performed term‑based retrieval (BM25) on title and meta tags. Simultaneously, I ran a lightweight Bi-Encoder Transformer (distilBERT fine‑tuned on our domain) to generate dense vectors for each article. For each query, we fetched the top 200 BM25 hits, then re‑ranked them using cosine similarity against the query vector and a learned logistic regression that weighted relevance signals (recency, user click history). The reranker was deployed as an AWS Lambda function, keeping overall latency below 150 ms.

**Result:**  
Within two weeks of rollout, the CTR for “investment insights” rose to 3.6%—a 100% increase—and the average session time on articles grew by 18%. I learned that blending fast lexical retrieval with lightweight semantic reranking can dramatically improve relevance while staying within strict performance budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
