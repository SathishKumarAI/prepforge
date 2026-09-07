---
qid: ing_bdb97e688a__faang__local
question: 'Explain: RAG architecture (senior+) — Glean Interview Guide (2026): Process,
  Questions, Compensation \u2013 techinterview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 538
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:03:39-05:00'
sources: []
---

**Clarify**  
You’re asking about *Retrieval‑Augmented Generation* (RAG) – a modern ML pipeline that couples an information‑retrieval system with a generative language model. Confirm: is the focus on the architecture, deployment, or evaluation? Assume we need to explain how it works end‑to‑end and why it matters in production.

**Approach**  
1. Outline the high‑level flow (query → retriever → index → generator).  
2. Detail each component’s role and data format.  
3. Discuss training & inference pipelines, latency trade‑offs, and evaluation metrics.

**Depth**  
- **Retriever**: dense or sparse embeddings (e.g., FAISS or BM25) indexed over a knowledge base (documents, code snippets). It returns top‑k passages given the user query.  
- **Generator**: a fine‑tuned transformer (GPT‑3/4, LLaMA) that conditions on the concatenated query + retrieved context to produce an answer.  
- **Fusion**: simple concatenation or more sophisticated cross‑attention over retrieved snippets; can be end‑to‑end trained via reinforcement learning to maximize relevance and factuality.  
- **Training**: pretrain retriever on large corpora, fine‑tune with contrastive loss (e.g., DPR). Train generator on query–context pairs; optionally joint training for consistency.  
- **Inference**: latency ≈ retriever (ms) + generator (≈100 ms per token); can be pipelined or batched to meet SLAs.  
- **Evaluation**: BLEU/ROUGE for fluency, R‑precision/F1 for relevance, and factual correctness via human review or automated fact‑checking.

**Edge Cases**  
- *Cold‑start*: no relevant docs → fallback to generic generation.  
- *Hallucination*: generator may ignore retrieved context; mitigate with gating or retrieval‑confidence thresholds.  
- *Index drift*: updates in knowledge base require re‑embedding and re‑indexing; schedule incremental updates.

**Optimize & Communicate**  
Explain how caching top‑k results, pruning the index, or distilling the retriever can cut latency by 30–50 %. Highlight that RAG scales linearly with index size but remains bounded by retrieval cost. Conclude by noting its impact: higher factuality, explainability, and adaptability in customer‑facing AI services—exactly what FAANG teams prioritize for next‑gen chatbots.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
