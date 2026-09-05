---
qid: ing_437e21f1d1__think__local
question: 'Explain: System Design: AI Search Infrastructure — Perplexity AI Interview
  Prep 2026: Process, Questions & What to Expect'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 501
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:04:13-05:00'
sources: []
---

**1. Clarify the ask and set assumptions**  
- *What* is meant by “AI Search Infrastructure” (e.g., indexing pipelines, query engines, vector stores)?  
- *Which level* of detail? (High‑level architecture vs. low‑level implementation).  
- Assume interviewers expect a balance: show understanding of core components and how they fit together in a production AI search stack.

**2. Adopt a mental model / framework**  
Use the classic **pipeline + system layers** approach:  
1. Data ingestion → 2. Preprocessing & embedding generation → 3. Indexing (vector + lexical) → 4. Retrieval & reranking → 5. Serving layer & monitoring.  
Map each layer to common tools (e.g., Logstash, Transformers, FAISS/ElasticSearch, BM25, Reranker, Kubernetes).

**3. Step‑by‑step reasoning toward an answer**  
- Start with *data sources* (web crawls, logs, documents).  
- Explain *cleaning & normalization*, then *embedding models* and why we might use sentence‑transformers or custom fine‑tuned encoders.  
- Detail the *index*: hybrid vector + inverted index; storage choices, sharding, replication.  
- Discuss *retrieval strategies*: nearest‑neighbor search (FAISS, HNSW), fallback to lexical retrieval for exact matches.  
- Cover *reranking* (cross‑encoder or BERT ranker) and how it improves relevance.  
- End with *serving*: API gateway, latency budgets, autoscaling; and *monitoring* (latency metrics, drift detection).

**4. Common traps to avoid**  
- Overloading the answer with too many tool names without explaining trade‑offs.  
- Forgetting to mention **scalability concerns** (index growth, query volume).  
- Ignoring **data freshness & re‑embedding** cycles.  
- Neglecting **security and privacy** aspects of storing embeddings.

**5. Sanity‑check & verbalize**  
- Ask mentally: “Does this answer cover ingestion → serving?”  
- Summarize each layer in one sentence before diving deeper.  
- Use a quick example (e.g., searching legal documents) to illustrate the flow and reassure that you understand end‑to‑end.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
