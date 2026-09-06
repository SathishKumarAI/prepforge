---
qid: ing_fdf510c62d__fp__local
question: 'Explain: Functional Requirements — ChatGPT System Design - by Neo Kim and
  Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 370
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:59:52-05:00'
sources: []
---

**Functional Requirements for the ChatGPT System (Neo Kim & Hayk)**  

At its core, ChatGPT must *translate* a user’s natural‑language prompt into an accurate, context‑aware continuation and return it with minimal latency.  
From this **“input → output” pipeline** we derive three essential functional blocks:

| Block | Why It Must Exist (Principle) | Key Capability |
|-------|------------------------------|----------------|
| **Encoder‑Decoder Stack** | *Information bottleneck*: a transformer compresses the prompt into hidden states that preserve semantics while discarding noise, then decodes them into tokens. | Token‑level generation with autoregressive conditioning. |
| **Context Manager** | *Probabilistic memory*: the model’s ability to maintain coherence over long dialogues hinges on storing and retrieving past turns as a weighted context vector. | Dynamic sliding window of recent utterances + session metadata. |
| **Inference Optimizer** | *Computational geometry*: inference must map high‑dimensional logits to tokens quickly; GPU tensor ops and beam‑search pruning reduce the search space without sacrificing quality. | Batched beam search with top‑k sampling, flash‑attention kernels. |

A non‑obvious insight: **the same transformer architecture that learns language also implements a universal approximation of conditional probability distributions**—hence every functional requirement is simply an engineered manifestation of *estimating \(P(\text{next token}\mid\text{history})\)* under resource constraints. This unifies the seemingly disparate needs (encoding, context, speed) into one coherent probabilistic framework.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
