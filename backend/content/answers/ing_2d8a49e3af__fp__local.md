---
qid: ing_2d8a49e3af__fp__local
question: 'Explain: 3 Context — AI Concepts - by Neo Kim and Logan Thorneloe'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 401
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:41:33-05:00'
sources: []
---

**The “Three‑Context” Framework (Neo Kim & Logan Thorneloe)**  
At its core, the framework formalises how a model interprets any input as a *triplet* of contexts:  

1. **Intrinsic context** – the raw token sequence itself.  
2. **Extrinsic context** – metadata (time stamp, user ID, device).  
3. **Pragmatic context** – the task‑specific objective or policy constraints.

Why this triad? A language model is fundamentally a conditional probability estimator \(P(\text{token} \mid \text{history})\). If we only condition on history (intrinsic), we ignore signals that drastically reshape the distribution—think of “in the morning” versus “at night.” Adding extrinsic cues gives the model a *prior* over plausible continuations, effectively regularising the inference. Pragmatic context injects a *posterior* bias: it re‑weights probabilities to satisfy higher‑level constraints (e.g., safety, style).  

Mathematically, we approximate  
\[
P(t \mid h; m, o) \propto P_{\text{LM}}(t \mid h)\,\phi_m(h,t)\,\psi_o(t),
\]  
where \(m\) encodes extrinsic metadata and \(o\) the objective function. This product form mirrors Bayesian updating: prior (extrinsic), likelihood (intrinsic), posterior (pragmatic).  

**Non‑obvious insight:** Treating extrinsic context as a *soft prompt* rather than hard conditioning enables continual learning without retraining; the model merely adjusts its prior each inference, preserving parameter efficiency while adapting to new domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
