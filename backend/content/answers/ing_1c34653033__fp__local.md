---
qid: ing_1c34653033__fp__local
question: Nothing deployed, no infra alerts - but users say the AI feature "got worse."
  How do you detect and debug silent quality regressions?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 430
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:06:07-05:00'
sources: []
---

**Why a silent regression can appear**

A model’s *performance* is an expected value over its output distribution conditioned on user context:  
\(P(y|x,\theta)\).  When the deployment pipeline changes (e.g., new preprocessing, batch‑norm shift, or data drift) the conditional distribution shifts even if no code changed. Because users only see the final decision, a subtle drop in \(P(y|x,\theta)\) can be masked by unchanged accuracy metrics on held‑out data.

**Detecting it**

1. **Shadow sampling** – run the new model in parallel with the live one for a fixed window (e.g., 1 % of traffic).  
   *Metric:* compute pairwise KL divergence between their predictions.  
2. **Feature‑level drift tests** – apply *Kolmogorov–Smirnov* or *MMD* on each input feature stream; significant shifts flag potential causes.  
3. **Latency‑to‑confidence curve** – plot average confidence vs. response time; a steepening slope often precedes quality loss.

**Debugging**

1. **Counterfactual replay** – feed the same set of inputs through both models and rank by disagreement.  Inspect top‑ranked examples to see if new preprocessing altered semantics (e.g., tokenization changes).  
2. **Gradient‑based saliency comparison** – compute Integrated Gradients for both outputs; divergence in attribution maps points to feature mis‑weighting.  
3. **Probabilistic calibration audit** – fit a Platt scaler on live predictions; if the new model’s temperature parameter drifts, it signals over/under‑confidence.

**Non‑obvious insight**

Most teams monitor *accuracy* or *loss*, but those aggregate over all examples and can hide systematic shifts that only affect a minority of cases (e.g., rare entities). Tracking *distributional distance* between live and shadow predictions captures even tiny, consistent biases—providing the first line of defense against silent regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
