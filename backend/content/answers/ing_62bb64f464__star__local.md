---
qid: ing_62bb64f464__star__local
question: 'Explain: Design a serverless inference platform serving 100+ open models
  on a shared GPU fleet.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 297
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:45:26-05:00'
sources: []
---

**Situation:** In my last role I was tasked with launching an inference service for a fintech startup that wanted to expose over 120 pre‑trained NLP and vision models to its partners, all on a shared GPU fleet in the cloud.

**Task:** Build a serverless platform that could spin up GPU instances on demand, queue jobs efficiently, enforce model isolation, keep latency under 200 ms for most requests, and stay within a $15k/month budget.

**Action:** I chose AWS Lambda with step functions to orchestrate cold‑start logic, combined with Amazon ECS Fargate Spot instances that auto‑scale GPUs based on CloudWatch metrics. For model serving I wrapped each model in a lightweight TorchServe container, exposing them through an API gateway that routes requests by a “model_id” header. To enforce isolation I used Kubernetes namespaces and network policies, while a custom scheduler (written in Go) allocated GPUs based on current queue depth and model size. I added a Redis cache for the most popular models to avoid GPU loading overhead.

**Result:** The platform handled 10k inference requests per minute with an average latency of 145 ms, reduced GPU idle time by 35%, and cut infrastructure costs from $25k to $13k/month. I learned how to balance serverless elasticity with GPU‑heavy workloads and the importance of a lightweight scheduler for shared resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
