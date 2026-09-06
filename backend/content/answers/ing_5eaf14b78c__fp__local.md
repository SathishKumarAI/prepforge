---
qid: ing_5eaf14b78c__fp__local
question: 'Explain: TL;DR — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 353
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:25:54-05:00'
sources: []
---

**TL;DR — Glean** is a *semantic summarizer* that learns how to distill the core of any document into a single, concise sentence.  
At its heart it solves the optimization problem  

\[
\min_{s}\;\text{dist}(s,d)+\lambda\,|s|
\]

where \(d\) is the source text, \(s\) is a candidate summary and \(\text{dist}\) measures semantic dissimilarity (often via cosine distance in a language‑model embedding space). The penalty term \(|s|\) forces brevity.  
Why must this be *semantic* rather than lexical? Because information is not only the words it contains but the relations they encode; two sentences can share 90 % of their tokens yet convey opposite facts. Glean maps both \(d\) and \(s\) into a high‑dimensional latent space trained on millions of human‑crafted “TL;DR” pairs, so that the model internalizes which entities, actions, and constraints are essential.

A non‑obvious insight: **brevity can be enforced without hard length limits**. By letting \(\lambda\) grow during training, Glean learns to prune only *redundant* clauses, not just stop at a token count. This yields summaries that stay within human attention spans while preserving all critical information—an elegant blend of information theory and natural‑language inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
