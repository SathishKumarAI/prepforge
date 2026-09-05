---
qid: ing_a7ce1376fc__star__local
question: What is Context? — What is Context Engineering
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 386
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:08:28-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we built a credit‑risk model that was deployed to production. After the first month of real traffic, the error rate spiked from 2% to 9%, and our compliance team flagged that the predictions were biased against certain demographic groups.

**Task** – I had to investigate why the model behaved differently in production, identify what contextual factors were missing from training, and redesign the pipeline so that the system adapted to real‑world shifts without manual retraining each week.

**Action** – First, I logged raw feature values for every inference and compared them to the training distribution using Kolmogorov–Smirnov tests. I discovered that the “account age” feature in production was systematically higher because new users were being funneled through a different onboarding flow that the model never saw. To address this, I built a lightweight context‑detection layer: an API that tags each request with environment metadata (region, device type, user‑segment). The model then selects from a small ensemble of sub‑models trained on stratified subsets of data. I also set up a monitoring dashboard in Grafana to trigger alerts when any feature drift exceeded 0.3 SD, and automated nightly re‑weighting of the training dataset using the latest production statistics.

**Result** – After deploying the context‑aware system, the overall error rate dropped back to 1.8% within two weeks, and bias metrics improved by 70%. The real‑time drift alerts reduced manual investigation time from hours per week to minutes. I learned that “context engineering” is not just about adding metadata; it’s a systematic process of detecting distribution shifts, building adaptive model pathways, and automating the feedback loop so the system stays aligned with the live environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
