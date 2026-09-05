---
qid: ing_e95ee5ef4c__star__local
question: 'Explain: Design a ChatGPT System — Grokking System Design Interview: Patterns
  & Mock Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 338
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:14:45-05:00'
sources: []
---

**Situation:**  
At my previous company we were tasked with launching an internal chatbot that could handle product‑support queries across three languages and integrate with our legacy ticketing API. The team had a tight six‑week deadline, but the existing stack was monolithic and couldn’t scale under high concurrency.

**Task:**  
I needed to architect a scalable, low‑latency system that would route user intents to the right language model, log interactions for compliance, and fall back gracefully when the LLM failed. The design had to support 10k concurrent users with sub‑200 ms response time.

**Action:**  
I broke the system into three microservices: a request router (using Envoy), an inference service (containerized GPT‑3.5 Turbo on Kubernetes with autoscaling), and a fallback rule engine (Python Flask). I introduced a message queue (Kafka) to decouple front‑end from inference, enabling backpressure handling. For language routing I used a lightweight intent classifier (FastText) that sent the request to the appropriate model instance. I also built an observability layer with Prometheus/Grafana and added a compliance logger that stored encrypted conversation snippets in S3 for audit.

**Result:**  
The prototype launched on schedule, handled 12k concurrent users with 180 ms average latency, and reduced ticket volume by 35% within the first month. I learned that decoupling via messaging queues and using intent‑based routing dramatically improves resilience and observability in LLM‑powered chat systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
