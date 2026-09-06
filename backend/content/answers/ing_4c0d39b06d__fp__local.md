---
qid: ing_4c0d39b06d__fp__local
question: 'Explain: Tokenizers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 336
total_tokens: 500
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:46:48-05:00'
sources: []
---

Tokenization is the **pre‑processing bridge** between raw text and a model’s numerical representation.  
At its core, the problem is *discretisation*: a continuous stream of characters must be split into atomic units that can be mapped to indices in an embedding matrix.  

Why does this matter? Every downstream operation—attention, loss computation, gradient flow—assumes each token corresponds to a fixed‑size vector. If we allow arbitrary length substrings, the model would have to handle unbounded vocabularies, making training infeasible and generalisation impossible.

The design principle that governs all tokenizers is **information preservation vs. compression**.  
- **Character‑level tokenizers** preserve maximal information but suffer from long sequences (high computational cost).  
- **Word‑piece / subword tokenizers** (BPE, WordPiece) strike a balance: they compress frequent words into single tokens while breaking rare or morphologically complex terms into composable subunits. This mirrors the *minimum description length* principle—encode data with the shortest possible representation that still reconstructs it exactly.

A non‑obvious insight is that **tokenization choices encode linguistic bias**. For example, a BPE trained on English will implicitly favour suffixes and prefixes that are orthographically salient; when applied to morphologically rich languages, the tokenizer may produce many subword tokens, inflating sequence length and diluting semantic signal. Thus, careful tokenisation is not just a preprocessing step—it shapes the inductive biases of the entire model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
