---
qid: ing_d890452240__star__local
question: 'Explain: Common mistakes — OpenAI System Design Interview (2026 Guide)
  - Exponent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 330
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:41:58-05:00'
sources: []
---

**Situation** – At a previous internship I was asked to sketch a scalable recommendation engine for a streaming platform during a mock OpenAI system‑design interview. The interviewer wanted to see how I’d balance latency, data freshness and cost.

**Task** – My goal was to propose an end‑to‑end architecture that could serve 10 M users with sub‑200 ms response time while keeping compute costs under $50k/month.

**Action** – First, I avoided the classic “single monolithic database” mistake by splitting data into a hot tier (Redis cache) for real‑time user activity and a cold tier (Cassandra) for long‑term logs. I then used pre‑computed top‑10 lists per genre stored in S3, refreshed every 5 minutes with an AWS Lambda worker to keep freshness without on‑demand joins. To handle burst traffic I added auto‑scaling API Gateways and a circuit breaker pattern around the recommendation microservice. Finally, I built a lightweight metrics dashboard (Grafana + Prometheus) to monitor latency vs. cost trade‑offs.

**Result** – The prototype handled 12 M concurrent users with 180 ms average latency while staying within budget. I learned that over‑engineering for flexibility (e.g., adding an extra caching layer) can hurt performance, whereas a clear separation of hot/cold data and automated refresh pipelines keeps both speed and cost in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
