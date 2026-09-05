---
qid: ing_0e435e83f9__fp__local
question: 'Explain: Beyond letter counting, what failure modes does tokenization cause?
  Think arithmetic, multilingual text, and code.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 581
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:36:11-05:00'
sources: []
---

Tokenisation is nothing more than a *bijective* map from an arbitrary string s to a sequence of indices \(t_1,\dots,t_k\).  
The **fundamental problem** it solves is that neural models operate on fixed‑dimensional vectors; we must compress the unbounded space of characters into a finite alphabet.  The mapping is chosen so that (i) it preserves enough linguistic signal for downstream tasks, and (ii) it keeps \(k\) small enough to be tractable.

Because the map is forced to be *discrete* and *deterministic*, several failure modes arise:

| Domain | Why it breaks | Typical symptom |
|--------|---------------|-----------------|
| **Arithmetic** | Tokens are usually sub‑word units; a number like “1234” may split into “12”, “34”.  The model learns embeddings for each piece, not the numeric value.  When required to perform addition or comparison, it treats them as unrelated tokens. | Zero‑precision arithmetic in LLMs, mis‑ranking of “12 × 34” vs “1 234” |
| **Multilingual text** | Tokenisers trained on one script (e.g., Latin) assign high‑frequency sub‑words that do not align with other scripts.  A word may be split into many low‑probability tokens, inflating sequence length and diluting attention. | Slower inference for Cyrillic/Chinese; loss of semantic cohesion |
| **Code** | Programming languages have strict token boundaries (keywords, operators).  Byte‑pair merging often splits identifiers or merges “++” into a single subtoken, breaking syntactic parsing. | Generated code that compiles incorrectly, off‑by‑one errors in string interpolation |

A non‑obvious insight: **tokenisation induces a bias in the positional embedding space**.  
When a token is split, its constituent subtokens inherit *different* positions than they would have had as a single unit.  This misalignment propagates through self‑attention and can cause catastrophic forgetting of long‑range dependencies—especially in transformer models that rely on relative position encoding.

In short, the act of forcing continuous text into a finite discrete set inevitably distorts numeric semantics, cross‑script alignment, and syntactic structure, and these distortions manifest as subtle yet systematic errors across arithmetic, multilingual, and code tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
