---
qid: ing_bb3f0e7fa9__fp__local
question: 'Explain: Why we do not use a single composite quality score'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 387
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:41:51-05:00'
sources: []
---

### Why a single “quality” score never captures an AI system’s worth

The core problem is **multi‑objective optimization**: an AI model must satisfy *many* constraints—accuracy, latency, fairness, robustness, energy use, interpretability, etc.—each measured on different scales and with distinct statistical properties.  
A composite score implicitly assumes a linear combination of these objectives, i.e. that we can assign a single weight to each and simply add them up. But the *marginal value* of improving one objective depends on the current levels of all others (e.g., extra accuracy matters less when latency is already negligible). Thus any fixed weighting collapses a high‑dimensional Pareto frontier into a single point, discarding useful trade‑off information.

Moreover, evaluation metrics are **task‑dependent** and often *contextual*. A model that scores 95 % on ImageNet may fail catastrophically in a safety‑critical medical setting. Composite scores cannot encode such domain nuances without becoming unwieldy.

A non‑obvious insight: composite scores tend to mask **calibration** issues. Two models with identical overall accuracy can differ dramatically in probability calibration, affecting downstream decision thresholds. Averaging their scores hides this mismatch, leading to overconfident deployment decisions.

Hence, we resort to *task‑specific* metrics and multi‑objective reporting (e.g., precision–recall curves, latency histograms) so that stakeholders see the full landscape of trade‑offs rather than a misleading single number.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
