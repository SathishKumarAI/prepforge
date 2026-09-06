---
qid: ing_dd631185cd__fp__local
question: 'Explain: Week 1 — Generative AI with Large Language Models | Coursera'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 342
total_tokens: 517
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:50:10-05:00'
sources: []
---

**Week 1 – From “What is it?” to “Why does it work?”**

The first module tackles *generative* large‑language models (LLMs) by framing them as **probabilistic decoders of human text**.  
At the core, an LLM estimates \(P(w_{t}\mid w_{1:t-1})\), a conditional distribution over tokens given all prior context. This is nothing more than learning the *Markov chain* that best captures language’s statistical regularities—an optimization problem: maximize log‑likelihood on billions of tokens. The transformer architecture supplies a **self‑attention** mechanism, which implements a soft‑max weighted sum of hidden states; this can be viewed as an efficient approximation to computing all pairwise interactions in the context window.

Why self‑attention? It lets the model focus its capacity on the most informative parts of the input—an embodiment of *information bottleneck* theory: compress the past into a representation that preserves predictive power for the next token.  

A non‑obvious insight: **training data is not just a “big number” but a high‑dimensional manifold**. The transformer learns to navigate this manifold by implicitly parameterizing its tangent space, enabling smooth interpolation between unseen prompts—a property that underlies creative generation.

By the end of week 1 students will have derived the LLM’s objective from first principles and appreciated how architecture choices encode deep statistical intuitions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
