---
qid: ing_fc6b16ac9a__faang__local
question: 'Explain: Retrieval Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 451
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:26:41-05:00'
sources: []
---

**Retrieval patterns** describe how an information‑retrieval system (e.g., a search engine or RAG model) fetches relevant documents before feeding them into a downstream component (like a language model).  
---

### 1️⃣ Clarify  
*Goal:* Return the most useful passages for a user query.  
Assumptions to confirm:  
- Query is text‑based and may be ambiguous.  
- The corpus is large (millions of documents) but indexed.  
- Latency constraints (~200 ms).  

### 2️⃣ Approach  
1. **Embedding‑based retrieval** – encode both query and document vectors with a pretrained model (e.g., Sentence‑BERT).  
2. **Approximate Nearest Neighbor (ANN)** search (FAISS, Milvus) to get top‑k candidates quickly.  
3. **Re‑ranking** via a lightweight transformer or BM25+score fusion for higher precision.  

### 3️⃣ Depth  
- **Complexity:** Index build O(N log N); query O(k · d + log N).  
- **Trade‑offs:** Larger k → better recall but more latency; ANN reduces exactness but acceptable in practice.  
- **Scalability:** Shard index across GPUs; use HNSW for dynamic updates.  

### 4️⃣ Edge Cases  
- *Out‑of‑vocabulary terms:* fallback to keyword BM25.  
- *No relevant docs:* return “no results” or ask clarifying question.  
- *Very short queries:* augment with user context or query expansion.  

### 5️⃣ Optimize & Communicate  
- **Cache** popular queries (in Redis).  
- **Pre‑fetch** next‑k documents during decoding in RAG to hide latency.  
- Explain: “We first embed the query, use ANN for speed, then re‑rank with a lightweight model to balance recall and precision.”  

This pattern keeps retrieval fast while ensuring high relevance—essential for production AI services at FAANG.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
