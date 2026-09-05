---
qid: ing_3495506daf__fp__local
question: 'Explain: RAG Pipelines <a name="rag"></a> — Courses'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 371
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:56:33-05:00'
sources: []
---

## RAG Pipelines: A First‑Principles View

The core challenge for any language model is **knowledge incompleteness**—its parameters are frozen after training and cannot adapt to new facts.  
A Retrieval‑Augmented Generation (RAG) pipeline resolves this by turning the *generation* step into a two‑stage process:

1. **Retrieval** – given a query \(q\), we retrieve a set of documents \(\{d_i\}\) from an external corpus that maximally overlap with \(q\).  
   This is simply an optimization problem: maximize similarity score \(s(q,d)\) under a fixed index, which reduces to efficient nearest‑neighbor search in a learned embedding space.

2. **Augmented Generation** – the model receives both \(q\) and \(\{d_i\}\) as input and produces output \(y = G(q,\{d_i\})\).  
   Here, the generation objective is no longer to memorize facts but to *condition* on evidence, turning inference into a probabilistic integration over retrieved contexts.

The deeper principle is **information bottleneck**: retrieval supplies a compressed, task‑relevant representation of the world that the generative model can exploit without re‑learning all facts.  
A non‑obvious insight is that *retrieval quality dominates* generation quality; even a weak language model can outperform a strong one if fed high‑fidelity evidence. This explains why RAG excels on open‑domain QA: it sidesteps catastrophic forgetting by treating knowledge as an external, updatable resource rather than static weights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
