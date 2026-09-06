---
qid: ing_86fc4840a1__fp__local
question: 'Explain: Field Summary — Tokenizer (Lucene 7.3.1 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 353
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:51:25-05:00'
sources: []
---

**Tokenizer – the first step in a Lucene index**

When we ask Lucene to “index” text it must transform a raw document into a stream of *tokens* that can be stored and later compared efficiently.  
A tokenizer is precisely that transformation: it reads an input character stream, applies language‑specific rules (e.g., whitespace, punctuation, stemming), and emits discrete tokens with start/end offsets and optional payloads.

Why must this work the way it does?  
1. **Search correctness** – queries are tokenized in the same way as documents; mismatches would lead to false negatives.  
2. **Index compactness** – by emitting only the minimal lexical units, we avoid storing every character.  
3. **Scalability** – a linear‑time pass over the input guarantees that indexing time grows linearly with document size.

Under the hood the tokenizer is a *finite state machine* (FSM). Each character feeds into the FSM; when a transition reaches an accepting state, a token boundary is declared. This connects to automata theory: the FSM encodes the regular language of valid tokens, guaranteeing deterministic, O(n) processing.

**Non‑obvious insight:**  
The tokenizer’s *offsets* are not merely bookkeeping—they enable *highlighting* and *span queries*. By preserving character positions, Lucene can reconstruct the original text fragment for a match, even after complex transformations (e.g., stop‑word removal). Thus, tokenizers are not just parsing tools; they embed positional metadata that powers advanced query features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
