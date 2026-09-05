---
qid: ing_a932a6f2b3__star__local
question: 'Explain: Additional talking points — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 321
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:11:18-05:00'
sources: []
---

**Situation** – While working on a hackathon project, my team needed a lightweight, high‑throughput backend for an internal paste‑sharing tool similar to Pastebin. Our existing stack (Node + MongoDB) couldn’t guarantee the 10 ms latency required for real‑time code snippets.

**Task** – Design a system that could handle 5 k writes per second, support unlimited snippet size up to 1 MB, and provide a public URL with automatic expiration after 24 h, all while staying cost‑effective on AWS.

**Action** – I sketched the architecture: an API Gateway fronting a Lambda layer for request validation; DynamoDB with a global secondary index keyed by expiration timestamp for efficient TTL cleanup. For storage, I used S3 objects with server‑side encryption and signed URLs to avoid extra database lookups. I added CloudWatch alarms for write latency >20 ms and set up an auto‑scaling Lambda concurrency policy. I also implemented an optional Redis cache (Elasticache) for hot snippets accessed 80% of the time, reducing DynamoDB reads.

**Result** – The prototype handled 6.2 k writes/sec with <15 ms average latency during load tests, and cost per write dropped from $0.04 to $0.01. I learned how to balance serverless scalability with persistent storage while keeping operational overhead minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
