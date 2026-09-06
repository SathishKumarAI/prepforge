---
qid: ing_fffe1835b6__fp__local
question: 'Explain: Score within context — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 424
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:03:57-05:00'
sources: []
---

**Score Within Context – A First‑Principles Derivation**

When an LLM is asked a question, its answer must be judged not only for correctness but for *relevance* to the given prompt.  
The fundamental problem is: **how do we quantify “fits the context” in a mathematically principled way?**  

1. **Probabilistic formulation** – The model’s output \(y\) can be seen as sampling from a conditional distribution \(P(y \mid x)\), where \(x\) is the prompt.  
2. **Log‑likelihood as a score** – Taking the log of this probability gives us a natural utility: \(\log P(y \mid x)\). Higher values mean the model considered the answer plausible given the context.  
3. **Normalization by context entropy** – A naive log‑likelihood rewards generic responses (e.g., “I don’t know”). To penalize this, we divide by the entropy \(H(P(\cdot\mid x))\), yielding a *relative* score:  

\[
S_{\text{context}}(y) = \frac{\log P(y \mid x)}{H(P(\cdot\mid x))}
\]

This ratio is dimensionless, bounded, and directly comparable across prompts of varying difficulty.

**Non‑obvious insight:**  
Because entropy captures the *spread* of the model’s belief over possible continuations, a high context score automatically discourages overly safe answers. Models that are confident (low entropy) but wrong still receive low scores, while those with calibrated uncertainty can achieve higher relative scores even on hard prompts.

Thus, “Score Within Context” emerges from optimizing for *information‑efficient* responses: maximizing likelihood under the prompt’s distribution while normalizing by its inherent uncertainty.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
