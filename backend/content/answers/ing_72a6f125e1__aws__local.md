---
qid: ing_72a6f125e1__aws__local
question: 'Explain: Fleet usage load shedder — Scaling your API with rate limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 427
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:44:42-05:00'
sources: []
---

**Situation & Task (Ownership)**  
I led the “Fleet Usage Load Shedder” project for a global ride‑sharing platform that was hitting API throttling during peak city events. The goal was to keep latency < 120 ms while preventing over‑subscription of our compute layer, aiming for 99.9 % uptime.

**Action (Dive Deep & Bias for Action)**  
1. **Rate limiting policy**: Implemented per‑user sliding‑window counters in Amazon DynamoDB with TTL for sub‑second granularity.  
2. **API Gateway + Lambda**: Deployed a throttling tier that redirects excess requests to an “overflow” queue (Amazon SQS).  
3. **Back‑pressure feedback**: Used CloudWatch Alarms on queue depth to trigger auto‑scaling of the downstream microservice fleet in ECS/Fargate.  
4. **Observability**: Added X‑Request‑ID correlation and custom metrics to capture “shed” rate, exposing them via Grafana dashboards.

**Result (Deliver Results)**  
- Reduced API errors from 8 % during peak hours to < 0.2 %.  
- Cut downstream compute costs by 35 % by preventing over‑provisioning.  
- Maintained a 99.97 % SLA for end users, surpassing the target.

**Learning (Customer Obsession)**  
The first iteration under‑estimated burst size; we added an adaptive multiplier based on real‑time traffic patterns. This “fail‑fast, learn” loop is now part of our CI pipeline.

> **Bar‑raiser cues:** Demonstrated ownership of end‑to‑end performance, deep dive into DynamoDB TTL mechanics, quantified impact on cost & SLA, and a concrete learning loop that improved the solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
