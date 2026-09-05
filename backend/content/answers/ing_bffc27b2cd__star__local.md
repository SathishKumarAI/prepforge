---
qid: ing_bffc27b2cd__star__local
question: 'Explain: Build Human-in-the-Loop Feedback Loops — What is an AI SRE? The
  Complete AI SRE Guide for 2026'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 382
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:54:25-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup in early 2025, our fraud‑detection model was drifting: false positives spiked to 12% during peak trading hours, hurting user experience and inflating support tickets.

**Task:**  
I had to design an AI SRE (Site Reliability Engineer for ML) process that kept the model’s precision above 95% while allowing rapid iteration on new data. The goal was a human‑in‑the‑loop feedback system that could surface misclassifications, retrain safely, and monitor drift in real time.

**Action:**  
I built an end‑to‑end pipeline using Airflow for orchestration, Prometheus for latency/accuracy metrics, and Grafana dashboards that flagged samples with confidence <0.7. A small squad of analysts reviewed those cases via a custom UI, labeled them, and pushed labels to a Kafka topic. I set up a scheduled retrain job that pulled the latest 1 M labeled examples, applied an incremental learning strategy (online fine‑tuning), and performed canary deployments with A/B testing on 2% of traffic. Alerts were routed to Slack with a “rollback” button so we could revert if precision dipped.

**Result:**  
Within three weeks, false positives dropped from 12% to 4%, and the model’s overall F1 score improved by 8 points. We reduced support tickets by 30% and cut retrain time from two days to 6 hours. I learned that treating ML models as first‑class services—monitoring, alerting, and iterating with human feedback—is essential for reliable AI in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
