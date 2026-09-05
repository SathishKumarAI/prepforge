---
qid: ing_203d66abed__fp__local
question: 'Explain: Design a RAG system over an enterprise''s data: 10M documents
  in object storage plus structured tables, with per-user access controls. Walk me
  through the architecture and how you''d evaluate it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 512
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:14:33-05:00'
sources: []
---

**Why a RAG system is needed**  
A Retrieval‑Augmented Generation (RAG) model must *select* the subset of an enterprise’s 10 M documents that is both **relevant** to the user query and **permitted** under fine‑grained ACLs. The fundamental problem is a two‑stage optimization: first, retrieve a candidate set that maximizes relevance while obeying policy; second, condition generation on those candidates so the answer respects both data quality and compliance.

### Architecture

| Layer | Function | Implementation |
|-------|----------|----------------|
| **Ingestion** | Parse PDFs, logs, tables → embeddings. | Apache Spark + LangChain‑Vector‑Store (FAISS) for docs; Postgres + pgvector for structured rows. |
| **Metadata & ACL index** | Store per‑document/user permissions and tags. | Redis‑Graph for fast permission lookups; store as a binary mask of user groups. |
| **Retrieval Engine** | Multi‑modal search: text + table columns + vector similarity. | Hybrid query: keyword filter → ACL filter → ANN search (FAISS). |
| **Policy Layer** | Enforce per‑user access before generation. | Wrap the retrieval API with an RBAC gate; audit logs capture every doc ID returned. |
| **Generation Service** | Prompt = *query + top‑k retrieved docs*. | Fine‑tuned Llama‑2‑70B via OpenAI’s embeddings API, with a safety prompt that filters out disallowed content. |

### Evaluation

1. **Relevance** – ROUGE/LexRank against a hand‑labelled test set of 1 000 queries.
2. **Compliance** – False‑positive rate: proportion of retrieved docs violating ACLs (should be <0.01%).
3. **Latency** – End‑to‑end percentile latencies; target 200 ms for top‑k=10 retrieval + generation.
4. **Scalability** – Stress test with 1 M concurrent users, measuring CPU/GPU utilisation and cache hit ratio.

A non‑obvious insight: *the ACL filter must be applied **before** the ANN search*. Even if a vector is highly relevant, returning it would violate policy; pre‑filtering shrinks the search space, improving both security and speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
