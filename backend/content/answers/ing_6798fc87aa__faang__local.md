---
qid: ing_6798fc87aa__faang__local
question: 'Explain: Scenario 3: Design a RAG system for enterprise search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 478
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:45:15-05:00'
sources: []
---

**Clarify**  
You’re asked to design a Retrieval‑Augmented Generation (RAG) pipeline that powers an *enterprise search* product—think internal docs, knowledge bases, compliance records, etc. The key requirements are: 1️⃣ low latency for interactive queries, 2️⃣ high relevance given strict privacy/security constraints, and 3️⃣ the ability to update with new content without re‑training the entire model.

**Approach**  
1. **Indexing layer** – Vector store + inverted index.  
2. **Retriever** – Dual‑phase: (a) keyword match via Lucene for quick filtering; (b) dense retrieval using a fine‑tuned transformer (e.g., SBERT).  
3. **Generator** – Prompt‑based LLM (e.g., GPT‑4o or a custom BART) that receives the top‑k retrieved passages plus metadata.  
4. **Post‑processing** – Re‑rank with a lightweight neural reranker, cache results, and apply compliance filters.

**Depth**  
- *Index*: Use Faiss/Annoy for cosine similarity; shard by department to honor data‑segregation policies.  
- *Retriever*: Query expansion via synonyms + entity linking to handle enterprise jargon. Complexity: Retrieval O(log N) per query; generation ~O(length).  
- *Generator*: Prompt template includes “source citations” and a “confidence score” field, enabling auditability. Fine‑tune on internal QA pairs to reduce hallucination.  
- *Security*: Encrypt vectors at rest; use IAM roles for access control; audit logs for every query.

**Edge Cases**  
- New documents arriving mid‑session → incremental indexing with background workers.  
- Highly ambiguous queries → fallback to keyword search only.  
- Sensitive content accidentally retrieved → automatic redaction filter before generation.

**Optimize & Communicate**  
Explain trade‑offs: dense retrieval yields higher relevance but higher compute; hybrid approach keeps latency <200 ms for 95% of queries. Show how caching popular query results cuts GPU usage by ~30%. Conclude with a deployment diagram and a plan to monitor recall/precision metrics in production, iterating on retriever embeddings every month.

*Total words: ~210*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
