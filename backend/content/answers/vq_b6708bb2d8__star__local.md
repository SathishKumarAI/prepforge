---
qid: vq_b6708bb2d8__star__local
question: 60% chance of having the flu after having a positive test?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 357
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:16:03-05:00'
sources: []
---

**Situation** – At a health‑tech startup we were building an AI diagnostic assistant for primary care clinics. A pilot client wanted the system to tell doctors how likely it was that a patient actually had influenza after a rapid antigen test returned positive, so they could decide on antivirals or isolation.

**Task** – I needed to turn the lab’s reported sensitivity (90%) and specificity (95%) together with local prevalence (20% flu season) into an actionable probability for each positive result, then embed that in the UI as a clear risk score.

**Action** – I applied Bayes’ theorem: Posterior = (sensitivity × prior) / [(sensitivity × prior) + ((1‑specificity) × (1‑prior))]. Plugging in 0.90, 0.95, and 0.20 gave 0.60. I coded this calculation in Python, added a confidence interval using bootstrapping on test data, and visualized the result with Bokeh so clinicians saw “60 % chance of true flu” alongside the raw test outcome.

**Result** – The feature reduced unnecessary antiviral prescriptions by ~15 % over two months while maintaining 98 % clinical accuracy. I learned that conveying probabilistic reasoning in plain terms—rather than raw numbers—greatly improves trust and decision‑making in medical AI tools.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
