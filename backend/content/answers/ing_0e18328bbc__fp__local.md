---
qid: ing_0e18328bbc__fp__local
question: 'Explain: Paired coding: write a chunker for a legal document that never
  splits a clause and carries enough context that a retrieved chunk is self-contained.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 607
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:35:41-05:00'
sources: []
---

**Why the problem matters**

A legal document is a *structured* text where each clause is a logical unit that can be interpreted only with its surrounding context (definitions, cross‑references, and modality). If we split a clause in half, downstream tasks—retrieval, summarisation, or compliance checking—receive an incomplete argument and may misclassify the clause’s intent. Therefore any chunker must **preserve clause boundaries** and provide enough *pre‑* and *post‑* context to make each fragment self‑contained.

**Fundamental principle**

The chunker is a *constraint‑aware segmentation* problem:  
\[
\min_{S}\sum_{s\in S}L(s) \quad
\text{s.t. } s \text{ contains whole clauses and } |s|\leq M,
\]
where \(L(s)\) is the length of chunk \(s\), \(M\) a maximum token budget, and the constraints enforce clause integrity.

**Derivation**

1. **Clause detection** – use a shallow syntactic parser (e.g., spaCy’s dependency tree). A clause begins at a finite verb or modal that dominates an *NP* subject and ends before the next such verb. This guarantees logical completeness.
2. **Context window** – for each clause \(c_i\), compute a minimal surrounding segment:
   \[
   w_i = c_{i-1}\;+\;\text{[separator]}\;+\;c_i\;+\;\text{[separator]}\;+\;c_{i+1},
   \]
   where the separators are legal‑document markers (“§”, “Clause”). If \(w_i\) exceeds \(M\), iteratively drop the furthest clause until the constraint holds.
3. **Self‑containment check** – run a coreference resolver on \(w_i\). If any pronoun in \(c_i\) links to an antecedent outside \(w_i\), prepend the antecedent’s sentence; repeat until all references are internal.

**Non‑obvious insight**

The *minimal* context window is usually **not** the shortest possible: legal clauses often rely on preceding definitions or subsequent clarifications. By formulating the chunker as a constraint optimisation, we avoid arbitrary heuristics and guarantee that each chunk is both clause‑complete and self‑contained while respecting a hard size limit.

**Result**

A deterministic algorithm that outputs chunks of at most \(M\) tokens, never splits clauses, and contains all needed antecedents—exactly what retrieval systems need to treat each chunk as an autonomous legal argument.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
