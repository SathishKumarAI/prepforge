---
qid: ing_e583f3b4a2__fp__local
question: What is over-refusal, and how do you manage the helpfulness-vs-safety tension?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 460
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:06:41-05:00'
sources: []
---

**Over‑refusal** arises when a language model, tuned for safety, rejects almost every request that could expose it to ambiguity or risk. The root problem is *unbounded uncertainty*: the model cannot reliably judge whether an instruction is benign or dangerous, so its policy defaults to “safe” → “reject.”  

Why this happens:  
1. **Risk‑averse reward shaping** – safety objectives are often hard constraints; any violation incurs a large penalty.  
2. **Sparse counterexamples** – training data contain few true unsafe prompts, so the model overfits to safe‑only patterns.  
3. **Calibration gap** – probability estimates of correctness are poorly calibrated; the model misestimates its own error likelihood.

To balance helpfulness and safety we must formalize *expected utility* under uncertainty:  

\[
U = \sum_{a} P(a|x) \bigl[ r_{\text{help}}(a,x) - \lambda\,r_{\text{safety}}(a,x) \bigr]
\]

where \(P(a|x)\) is the model’s confidence, \(r_{\text{help}}\) rewards correct assistance, \(r_{\text{safety}}\) penalizes potential harm, and \(\lambda\) tunes the trade‑off. The key insight is to *learn* a calibrated uncertainty estimator (e.g., via Bayesian ensembles or temperature scaling) that feeds into this utility function, rather than relying on a hard refusal threshold.

**Practical tactics**

- **Uncertainty‑aware gating**: only refuse when both confidence and safety risk exceed learned thresholds.  
- **Fine‑tuning with counterfactuals**: expose the model to near‑edge cases labeled “safe” vs “unsafe” to shrink the safe‑only region.  
- **Human‑in‑the‑loop fallback**: route borderline queries to a moderator, preserving helpfulness while limiting risk.

By turning over‑refusal into an optimization problem that explicitly weighs safety against usefulness—and by training models to estimate their own uncertainty—we mitigate needless refusals without sacrificing protection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
