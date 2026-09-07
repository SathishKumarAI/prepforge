---
qid: ing_43a9edb243__aws__local
question: How would you evaluate answer quality for an answer engine, continuously
  and at scale?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 409
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:59:10-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
When I joined the search‑AI team, our answer engine was delivering 70 % “relevant” results per user query, but we had no automated way to measure answer quality at scale. My goal: build a continuous, data‑driven quality loop that could run on millions of queries daily.

**Action (Dive Deep + Bias for Action)**  
1. **Collect signals** – I added structured feedback tags (“accurate”, “partial”, “incorrect”) and extracted implicit signals (click‑through rate, dwell time) from the clickstream.  
2. **Score engine** – A Lambda pipeline ingests raw logs → normalizes features → feeds a SageMaker endpoint that predicts a *quality score* per answer (0–1).  
3. **Aggregate & alert** – DynamoDB stores daily aggregates; CloudWatch dashboards trigger SNS alerts if the mean score drops below 0.85 for >5 min.  
4. **Feedback loop** – Every day, top‑scoring answers are auto‑promoted to a “gold” cache in ElastiCache; low‑scorers go into a retraining queue.

**Result (Deliver Results)**  
Within 3 months the mean quality score rose from 0.70 to 0.88 (≈25 % lift). Query latency stayed <120 ms, and cost per query dropped by 12 % thanks to efficient Lambda scaling and spot‑instance training jobs.  

**Bar‑raiser focus** – I showed ownership of the end‑to‑end pipeline, deep technical dive into feature engineering, quantified impact on user satisfaction, and learned from early false positives by adding a manual review step.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
