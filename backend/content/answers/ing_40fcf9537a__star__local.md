---
qid: ing_40fcf9537a__star__local
question: 'Explain: Health and wellness — Careers \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 314
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:38:28-05:00'
sources: []
---

**Situation:**  
At my previous company I was part of a cross‑functional team tasked with launching a mobile app that tracks mental wellness for corporate clients. The initial beta showed high churn after the first week—only 18% of users stayed active beyond day 7.

**Task:**  
I needed to build a personalized recommendation engine that would keep users engaged by suggesting coping exercises, mindfulness videos, and peer‑support groups tailored to their daily mood data.

**Action:**  
First, I collected anonymized usage logs (step count, heart rate, self‑reported mood) and labeled them with engagement outcomes. Using PyTorch Lightning I trained a lightweight Transformer‑based model that ingested the last 24 hours of sensor data and predicted which content type would maximize next‑day retention. To keep inference fast on-device, I distilled the model to a 3 MB TensorFlow Lite version and integrated it into the app’s background service via Android’s WorkManager. I also set up an A/B test framework in Firebase Remote Config to roll out new recommendation rules incrementally.

**Result:**  
Within three weeks of deployment, active‑user retention rose from 18% to 47%, a 160% increase. The model also reduced server cost by 30% thanks to on‑device inference. I learned how to balance predictive performance with edge constraints and the importance of continuous experimentation in health tech.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
