---
qid: ing_a2b0590250__star__local
question: How do you put eval gates into CI/CD for prompts and model versions?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 392
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:58:09-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we released a new fraud‑detection AI every sprint. After each model update, the prompt set that fed the LLM had to stay accurate; a single drift could double false positives and trigger costly manual reviews.

**Task:**  
I needed to embed an automated “eval gate” into our CI/CD pipeline so that any change to prompts or model weights would automatically run a battery of tests—accuracy, latency, cost—and only pass if thresholds were met before deployment.

**Action:**  
1. Built a lightweight Python library (`prompt-evaluator`) that loads the current prompt set and model checkpoint from S3, runs 5k synthetic transactions through the LLM, and computes precision‑recall, average response time, and token count.  
2. Created a GitHub Actions workflow: on every PR to `main`, it triggers the evaluator, caches the dataset, and uploads results as job artifacts.  
3. Added a “fail‑fast” step that compares metrics against a baseline stored in a JSON file; if recall drops below 95% or latency exceeds 200 ms, the action fails and blocks merge.  
4. Integrated Slack alerts for failed gates and auto‑generated pull‑request comments with diff charts.

**Result:**  
Deployments slowed from an average of 2 hrs to 30 min due to early gate failures, yet we cut false‑positive incidents by 37% in the first quarter post‑implementation. I learned how to translate model‑specific metrics into CI/CD checks that are both developer‑friendly and data‑driven.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
