---
qid: ing_4c6ddefe44__fp__local
question: What's the case for tokenizer-free models, and why hasn't the tokenizer
  died yet?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 454
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:47:36-05:00'
sources: []
---

**Why tokenizers still matter**

At its core a language model is an *information‑theoretic* compressor: it learns a probability distribution \(p(x)\) over sequences of symbols and assigns each symbol a code length \(-\log p(\cdot)\). A tokenizer provides the *alphabet* on which that compression operates.  
If we let the alphabet be characters, we get a very fine‑grained representation; if we use words or subwords, we gain statistical efficiency because many tokens share context. The key trade‑off is **entropy vs. parameter sharing**: a larger alphabet reduces per‑token entropy but inflates model size and sparsity.

**Tokenizer‑free claims**

Token‑free models (e.g., character‑level LSTMs, transformer‑based byte‑wise nets) argue that the tokenizer is an *extraneous* inductive bias—one could let the network learn its own discrete units. They appeal to universality: a sufficiently expressive neural net can approximate any function, so it should discover useful substructures without pre‑defining them.

**Why the bias persists**

1. **Statistical efficiency** – A tokenizer collapses many high‑frequency patterns into single symbols, dramatically reducing the number of parameters needed for good generalization.
2. **Optimization tractability** – Training with a fixed alphabet yields smoother loss landscapes; learning discrete units endogenously is a hard combinatorial problem that current gradient methods approximate poorly.
3. **Hardware friendliness** – GPUs/TPUs are tuned for dense matrix operations on small vocabularies; byte‑wise attention leads to massive sparsity and memory blowup.

**Non‑obvious insight**

Tokenizers act as *implicit regularizers* that encode prior knowledge about linguistic units (e.g., morphemes). Even a sophisticated model cannot beat this unless it can learn an equivalent or better bias from data alone—something that remains computationally intractable with today’s scale. Thus, tokenizers survive not because they are perfect, but because they are the *cheapest* way to inject useful inductive bias into massive models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
