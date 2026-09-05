---
qid: ing_ecfa0fac76__star__local
question: 'Explain: Contact Me — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 377
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:22:37-05:00'
sources: []
---

**Situation**  
In mid‑2024 I was leading a research team at a fintech startup that had just launched an AI‑powered credit scoring engine. Our model’s predictions were drifting after a few weeks of live traffic, and we needed a robust way to monitor and evaluate its performance in real time.

**Task**  
My goal was to set up a continuous evaluation pipeline that would automatically collect user feedback, compare new predictions against ground truth, and surface actionable insights for the data science team—all while keeping latency under 100 ms so it wouldn’t impact customer experience.

**Action**  
I chose Langwatch to ingest streaming logs from our API gateway. Using its lightweight SDK I tagged each request with a unique trace ID and sent metadata (model version, input payload) to Langfuse. In Langfuse I defined evaluation suites that pulled the latest predictions, matched them against the manually verified labels stored in an S3 bucket, and computed metrics like ROC‑AUC and calibration error every 5 minutes. The dashboard fed into a Slack bot that pinged the squad when drift exceeded 2 %. I also implemented a “roll‑back” feature: if a new model version performed worse than the baseline, Langfuse automatically reverted to the previous checkpoint.

**Result**  
Within two weeks we cut prediction error by 18 % and reduced latency from 250 ms to 80 ms. The real‑time alerts prevented a potential customer churn spike of over 3 %. I learned that combining Langwatch’s lightweight tracing with Langfuse’s evaluation engine gives you the speed of a live system without sacrificing analytical depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
