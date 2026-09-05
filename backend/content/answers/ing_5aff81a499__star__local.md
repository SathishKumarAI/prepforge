---
qid: ing_5aff81a499__star__local
question: 'Explain: Retrieval Depth — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 346
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:29:28-05:00'
sources: []
---

**Situation:**  
While leading the migration of our customer support knowledge base from a legacy wiki to an AI‑powered search platform, we noticed that users were still hitting “no results” for many niche queries. The existing vector index was shallow—only top‑10 nearest vectors were returned—so subtle semantic matches were missed.

**Task:**  
I needed to design a hybrid retrieval pipeline that deepened the search without blowing up latency or storage costs, ensuring every user query surfaced at least one relevant answer within 200 ms.

**Action:**  
First, I re‑engineered the vector index to store multiple embeddings per document (title, body, FAQ tags) and introduced a depth parameter controlling how many nearest neighbors to fetch. Next, I built an RAG layer: after retrieving the top‑N vectors, I ran a lightweight semantic filter using a BERT reranker that scored each candidate against the query. Finally, I added a fallback keyword search on the remaining corpus for low‑confidence cases. I tuned depth from 10 to 50 during A/B tests, monitoring CPU usage and response times.

**Result:**  
The hybrid approach raised recall by 35 % (from 68 % to 93 %) while keeping average latency at 185 ms. User satisfaction scores on the help portal jumped from 4.1/5 to 4.6/5. I learned that balancing retrieval depth with re‑ranking can dramatically improve precision without sacrificing performance, and that hybrid pipelines are essential when dealing with diverse content types.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
