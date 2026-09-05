---
qid: ing_18a4fcf101__fp__local
question: 'Explain: Tokenization — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 449
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:58:24-05:00'
sources: []
---

### Why a language model *tokenizes* text?

At its core, an LLM is a statistical predictor:  
\(P(x_{t+1}\mid x_1,\dots ,x_t)\).  
The raw input—Unicode characters—is not amenable to efficient learning because the vocabulary size would explode (every possible character sequence becomes a “token”).  
By grouping symbols into **tokens** we:

1. **Compress** the sequence length → fewer predictions, lower memory.
2. **Regularize** the distribution: common morphemes or words become frequent tokens, smoothing rare‑word estimation.

Mathematically this is a *partition* of the string space that maximizes mutual information between token and its context while keeping vocabulary size tractable.  
The optimal partition balances two objectives:

| Objective | Effect |
|-----------|--------|
| **High entropy** (many distinct tokens) | Rich expressivity, but training data sparsity increases. |
| **Low entropy** (few tokens) | Efficient learning, but loses fine‑grained semantics. |

Tokenization is thus an *information bottleneck* problem: we compress the input while preserving as much predictive power as possible.

### Deeper principle

The choice of token size implicitly defines a **geometry** over language.  
Subword units (e.g., Byte‑Pair Encoding) impose a lattice where words are paths; the LLM learns embeddings in this lattice, effectively performing a low‑rank approximation of the full language manifold.  

### Non‑obvious insight

Most people treat tokenization as a preprocessing step.  
In reality, **the tokenizer itself is part of the model’s inductive bias**:  
changing the token dictionary alters which linguistic regularities are *explicitly* encoded versus learned from scratch.  
Thus, fine‑tuning on domain data often requires *re‑tokenizing* to expose new subword patterns that the original tokenizer missed—an operation as crucial as adjusting weights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
