---
qid: ing_99bd0ee022__star__local
question: 'Explain: Embedding model & representation — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 301
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:40:11-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, our customer support portal was drowning in unstructured FAQ data. Every time an agent searched for “payment dispute,” the system returned irrelevant pages because it relied on keyword matching.

**Task**  
I had to redesign the search so that agents could find the exact policy or guidance text they needed within minutes, even when the wording differed from the user query.

**Action**  
I built a semantic search pipeline using a transformer‑based embedding model (Sentence‑BERT). First, I vectorized every FAQ entry and stored the embeddings in an approximate nearest neighbor index (FAISS) for sub‑millisecond lookups. Then I created a lightweight REST API that accepted a user query, embedded it on the fly, and returned the top 5 most semantically similar documents along with cosine similarity scores. To keep latency low, I cached popular queries and used GPU acceleration for batch encoding during off‑peak hours.

**Result**  
Search relevance improved from an average precision@10 of 0.32 to 0.78—cutting agent query time by 65 %. Customer satisfaction scores rose 12 points in the following quarter, and the team adopted the same embedding strategy across other product lines. I learned that choosing the right pre‑trained model and indexing library can dramatically reduce friction without a huge infrastructure cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
