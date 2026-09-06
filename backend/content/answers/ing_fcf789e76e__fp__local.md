---
qid: ing_fcf789e76e__fp__local
question: 'Explain: editing document at all because only one'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 325
total_tokens: 494
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:57:39-05:00'
sources: []
---

**Why we often rewrite the *whole* document, not just a paragraph**

At its core, writing is an optimization problem: we want to convey a set of ideas \(I\) with maximal clarity and minimal cognitive load for the reader.  
A paragraph in isolation behaves like a *local* optimum—it may look good on its own but can clash with the global structure (tone, flow, logical progression). When you edit only that fragment, you implicitly assume the surrounding context is fixed, which is rarely true because the preceding and following sections influence each other’s interpretation.  

The deeper principle is **coherence as a constraint in sequence modeling**: every sentence \(s_k\) depends on its neighbors via conditional probabilities \(P(s_k|s_{k-1}, s_{k+1})\). A local edit changes these probabilities, potentially propagating errors backward and forward. By revisiting the entire document you re‑optimize the joint distribution over all sentences, ensuring that edits harmonize with the global narrative.

**Non‑obvious insight:**  
Most people think of editing as a surface activity (typos, grammar). In fact, it is fundamentally *structural*—each revision reshapes the latent semantic graph. A single sentence can alter the weight of an entire argument chain; thus, the “one‑document” approach is not just thorough—it’s mathematically necessary for coherent reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
