---
qid: ing_fc6b16ac9a__star__local
question: 'Explain: Retrieval Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 342
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:53:19-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with improving the search experience for a large e‑commerce platform that had over 2 million product listings and a growing user base of 300k monthly active users. The existing keyword search returned noisy results, especially for niche categories.

**Task:**  
I needed to design a retrieval system that could surface relevant items in under 200 ms per query while handling high traffic and supporting multi‑language queries.

**Action:**  
I implemented a hybrid retrieval pipeline using Elasticsearch for token‑based matching and an approximate nearest neighbor (ANN) index with FAISS for semantic similarity. First, I curated a set of product embeddings from a fine‑tuned SentenceTransformer on the catalog metadata. Then I built two indexes: one inverted index for fast keyword hits and another ANN index for vector search. At query time, I ran both in parallel, merged results using a learned re‑ranking model (LightGBM) that weighted TF‑IDF scores against cosine similarity, and capped the final list to 10 items. I also introduced caching of popular queries with Redis to hit sub‑millisecond latency.

**Result:**  
Within three months we saw a 35 % lift in click‑through rate on search results, a 22 % reduction in bounce rates for product pages, and maintained average latency at 180 ms even during peak traffic. I learned that blending symbolic and vector retrieval with a smart re‑ranking layer can dramatically improve relevance while staying within strict performance constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
