---
qid: ing_fb1806bf45__fp__local
question: 'Explain: The interview loop — Waymo'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 328
total_tokens: 495
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:53:38-05:00'
sources: []
---

**Waymo’s Interview Loop: a principled design for autonomous‑vehicle talent**

At its core the loop is a *feedback‑controlled selection* problem: how to keep only those candidates whose skill profile matches the evolving, high‑stakes demands of self‑driving research.  
1. **Signal extraction** – each interview stage (coding, systems design, safety case) produces a measurable “signal” (score, error rate).  
2. **Objective function** – Waymo’s objective is *probability of future contribution* \(P(C|S)\), where \(C\) denotes impactful work and \(S\) the observed signals.  
3. **Bayesian update** – after each stage we update our posterior over \(P(C|S)\). If a candidate’s signal distribution shifts upward, the loop continues; if it falls below a threshold, we terminate early, saving resources.  

This is an instance of *active learning* in human capital: the interview itself refines the predictive model about future performance. The non‑obvious insight is that the loop’s **length is not fixed** but adapts to signal uncertainty—high‑variance signals (e.g., a novel architecture) trigger extra rounds, while low‑variance ones allow fast decisions. Thus Waymo trades off *information gain* against *time cost*, ensuring that only those whose latent potential is confidently above the threshold reach production teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
