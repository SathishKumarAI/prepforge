---
qid: ing_bdb97e688a__fp__local
question: 'Explain: RAG architecture (senior+) — Glean Interview Guide (2026): Process,
  Questions, Compensation \u2013 techinterview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 421
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:46:50-05:00'
sources: []
---

**RAG (Retrieval‑Augmented Generation)** is a hybrid architecture that turns a pure language model into an *information‑aware* system.  
At its core it solves the **“knowledge‑scarcity” problem**: large transformers can generate fluent text but they are frozen at training time and cannot incorporate fresh facts without retraining. RAG injects external documents on demand, turning inference into a two‑stage pipeline:

1. **Retriever** – given an input query *q*, it ranks a corpus *D* (e.g., Wikipedia) to produce the top‑k passages *P*.  
2. **Generator** – conditioned on both *q* and *P*, a seq2seq model (often BART or T5) produces the answer.

Why must it be two stages? Because retrieval is an *information‑theoretic bottleneck*: selecting *k* highly relevant documents reduces entropy from |D| to k, which keeps the generator’s decoding tractable. The retriever can be a dense vector model (e.g., DPR) or sparse BM25; both are differentiable only in the former, allowing end‑to‑end fine‑tuning.

The deeper principle is **modular learning**: retrieval learns *where* to look (a search problem), while generation learns *how* to synthesize. This separation mirrors human cognition—first consult a reference, then paraphrase.

### Non‑obvious insight  
Most practitioners treat the retriever as a black box and fine‑tune only the generator. In practice, **jointly training the retriever with a *contrastive loss* that rewards documents yielding high‑quality generations leads to better overall performance**. The contrastive signal is much weaker when training separately because the generator’s output distribution changes after each retrieval update; joint training aligns their objectives and yields a more robust RAG system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
