---
qid: ing_ffff29eb3b__star__local
question: 'Explain: Your safety matters to us — Careers \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 350
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:00:35-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a real‑time fraud detection model for an online marketplace. Within the first month, the system started flagging legitimate transactions at a 12% false‑positive rate, causing customer churn and revenue loss.

**Task:**  
I had to reduce the false positives by at least 30% while keeping latency under 50 ms per transaction, all without access to proprietary data from the finance team.

**Action:**  
First, I performed an error audit using a Bayesian calibration layer on top of our gradient‑boosted tree. By estimating posterior probabilities for each prediction, we could adjust thresholds dynamically based on risk profiles. Next, I implemented a lightweight ensemble of rule‑based checks (e.g., velocity limits, geo‑location mismatch) that ran in parallel with the model to flag obvious anomalies before they hit the ML layer. To ensure safety, I set up an A/B test where 20% of traffic went through the new pipeline and logged detailed confidence scores. We also created a “shadow” mode that allowed us to observe predictions without affecting real decisions.

**Result:**  
After two weeks of deployment, false positives dropped from 12% to 7%, meeting our 30% reduction target while maintaining sub‑50 ms latency. Customer complaints fell by 40% and we regained $1.2M in monthly revenue. I learned that safety in ML isn’t just about the model; it’s a holistic system of calibration, monitoring, and human‑in‑the‑loop checks that can be built with open‑source tools like Scikit‑Learn and Prometheus.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
