---
qid: ing_124974f163__fp__local
question: 'Explain: What Information to Capture — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 374
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:44:45-05:00'
sources: []
---

**What information must an AI evaluation actually *measure*?**  
Start with the *goal*: a model should behave as intended under all conditions it will encounter. That goal is an optimization problem—maximize user‑satisfaction subject to constraints on safety, fairness, and resource use. The only way to know whether you’re moving toward that optimum is to observe *signals* that reliably correlate with each dimension of the objective.

1. **Task‑level performance** (accuracy, BLEU, etc.) tells us if the model solves the problem it was trained for.  
2. **Calibration & confidence** expose over‑ or under‑confidence—critical for safety.  
3. **Distributional shift tests** (out‑of‑distribution prompts, adversarial inputs) reveal robustness; a model that only works on training data is useless in practice.  
4. **Fairness metrics** capture bias across protected attributes; they are not just statistical curiosities but constraints in many regulatory regimes.  
5. **Resource footprints** (latency, FLOPs, energy) quantify the cost of deploying the optimum.

Why these? Because each captures a *constraint* or *reward* term in the underlying constrained‑optimization formulation that defines “good behavior.” If you omit any, you’re optimizing on an incomplete objective and may inadvertently favor one dimension at the expense of another.

**Non‑obvious insight:** *Calibration is often more informative than raw accuracy.* A highly accurate model can still be dangerous if its confidence estimates are skewed—users will trust it blindly. Therefore, evaluation suites should treat calibration as a primary metric, not an afterthought.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
