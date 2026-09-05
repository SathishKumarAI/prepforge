---
qid: ing_d2d0111802__star__local
question: 'Explain: Amazon API Gateway — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 344
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:31:03-05:00'
sources: []
---

**Situation** – In early 2024 I was tasked with building a real‑time recommendation engine for a retail startup that had just hit $5 M ARR. The existing monolith was slow, and the product team demanded instant responses to user clicks without scaling infrastructure.

**Task** – I needed to expose the model inference endpoint as a fully managed API, eliminate server maintenance, and keep latency under 200 ms while handling up to 10k concurrent users during peak sales events.

**Action** – I chose Amazon API Gateway with Lambda integration. First, I defined a RESTful resource (`/recommend`) and used VTL mapping templates to validate incoming JSON and transform it into the format expected by the model. I set throttling limits (5 req/s per account) and enabled caching at 300‑second TTL to reduce cold starts. The Lambda function was written in Go, using the AWS SDK to pull a pre‑trained XGBoost model from S3, cache it in `/tmp`, and return predictions. For monitoring I wired CloudWatch Alarms on latency >250 ms and error rate >2%, triggering an SNS alert.

**Result** – The new serverless API delivered sub‑150 ms responses during the Black Friday sale, scaled automatically to 12k concurrent requests with zero downtime, and cut operational costs by ~70% compared to our previous EC2‑based solution. I learned how API Gateway’s request/response mapping and caching can dramatically improve performance in a Lambda‑centric architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
