---
qid: ing_0ca989e1d1__faang__local
question: Why is RAG the right architecture for an enterprise assistant instead of
  fine-tuning on the company's data? Where does RAG break?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 452
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:13:24-05:00'
sources: []
---

**Clarify**  
You’re asking why Retrieval‑Augmented Generation (RAG) is preferable for an enterprise assistant over a purely fine‑tuned model, and where RAG might fail. Key assumptions: the company owns large, proprietary documents; regulatory compliance matters; latency budgets are tight; data changes frequently.

**Approach**  
1. Compare data‑centric vs. retrieval‑centric paradigms.  
2. List enterprise benefits of RAG (freshness, explainability, cost).  
3. Identify failure modes (index drift, hallucination, privacy leaks).

**Depth**  

| Aspect | Fine‑tuned Model | RAG |
|--------|------------------|-----|
| **Data freshness** | Retraining every *k* days; stale insights. | Pulls latest docs on each query → up‑to‑date answers. |
| **Explainability** | Black‑box weights; hard to audit source of answer. | Retrieval step provides provenance (doc IDs, snippets). |
| **Cost & compute** | Fine‑tuning large LMs is expensive; inference cost per token remains high. | Uses lightweight backbone + sparse retrieval; can cache embeddings → lower GPU usage. |
| **Compliance** | Model may inadvertently expose sensitive patterns learned during training. | Retrieval limits exposure to explicitly stored documents; easier to audit. |

**Edge Cases**  
- *Sparse knowledge*: If relevant facts are missing from the index, RAG will hallucinate.  
- *High‑volume updates*: Re‑embedding large corpora can be costly and introduce latency spikes.  
- *Privacy leakage*: Retrieval indices might inadvertently expose PII if not sanitized.

**Optimize & Communicate**  
Start with a small vector store (FAISS/PGVector), fine‑tune only the decoder, and periodically refresh embeddings using incremental updates. Use a hybrid fallback: if retrieval confidence is low, fall back to a general LM. When presenting this architecture, highlight that RAG offers real‑time compliance, auditability, and cost‑efficiency—core concerns for enterprise AI products.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
