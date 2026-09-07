---
qid: ing_e82eaf0306__faang__local
question: 'Explain: Evaluating RAG Pipelines — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 634
total_tokens: 870
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:39:41-05:00'
sources: []
---

**Clarify**  
You’re asking how to evaluate Retrieval‑Augmented Generation (RAG) pipelines, specifically using the *Haystack* framework. I’ll assume you want a reproducible, end‑to‑end assessment: from retrieval quality through generation fidelity, with metrics that matter for production (latency, relevance, hallucination). I’ll also presume you have a labeled query–answer set or at least a set of relevant documents per query.

**Approach**  
1. **Define objectives & constraints** – relevance vs. latency, acceptable hallucination rate.  
2. **Set up evaluation harness** – split queries into train/val/test; load Haystack components (DocumentStore, Retriever, Generator).  
3. **Retrieve‑only metrics** – Precision@k, Recall@k, MRR, NDCG on the retrieved set.  
4. **Generation‑only metrics** – BLEU, ROUGE, METEOR, and a hallucination score (e.g., using an external classifier or GPT‑based verifier).  
5. **End‑to‑end metrics** – QA F1/Exact Match if ground truth answers exist; otherwise human relevance scores.  
6. **Performance profiling** – latency per stage, CPU/GPU usage.  

**Depth**  
- *Retrieval*: Use BM25 or DPR embeddings; compute Recall@k on the document store.  
- *Generation*: Feed top‑k docs into a transformer (e.g., T5‑Large). Evaluate with ROUGE‑L and a hallucination detector that flags factual inconsistencies.  
- *Pipeline*: Run queries through Haystack’s Pipeline API, capture per‑component timings via callbacks.  
- *Statistical significance*: Bootstrap 95% CI for each metric; compare against baselines (retrieval only, generation only).  

**Edge Cases**  
- Empty retrieval set → fallback to a generic response or “no answer.”  
- Highly ambiguous queries leading to divergent top docs.  
- Out‑of‑domain documents causing hallucination spikes.  
Test with synthetic noisy queries and with very short vs. long queries.

**Optimize & Communicate**  
- **Improvement loop**: If Recall@k is low, tune the Retriever (embedding dimension, retriever type). If hallucinations high, adjust generation temperature or add a verification step.  
- **Narrative**: “We first measured retrieval quality; it was 0.72 Recall@10, which satisfies our SLA. Next we evaluated generation fidelity—ROUGE‑L hit 0.45 but hallucination flagged 12% of outputs. After adding a verifier, hallucinations dropped to 4%, improving overall QA F1 from 0.68 to 0.75.”  
- **Trade‑offs**: Higher k improves recall but increases latency; higher temperature boosts diversity but raises hallucination risk.  

This structured plan aligns with FAANG’s emphasis on clear assumptions, systematic experimentation, rigorous metrics, and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
