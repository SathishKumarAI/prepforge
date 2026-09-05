---
qid: ing_be7a809901__star__local
question: 'Explain: Asynchronism and microservices — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 319
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:51:59-05:00'
sources: []
---

**Situation:**  
At my last company we built an internal Pastebin clone that needed to handle millions of user uploads per day. The monolithic architecture was choking on file processing and the UI became sluggish during peak traffic.

**Task:**  
I had to redesign the system so uploads were processed asynchronously, scale horizontally, and isolate concerns into independent services while keeping latency low for end users.

**Action:**  
I split the stack into three microservices: an HTTP gateway, a “paste‑producer” that accepted file blobs and pushed metadata onto a RabbitMQ queue, and a “processor” worker pool that consumed messages, ran OCR on images, stored results in DynamoDB, and emitted events to an SNS topic. The gateway returned immediately with a paste ID; the UI polled a lightweight status service for processing completion. I used Docker Compose for local dev and ECS Fargate for production, leveraging auto‑scaling based on queue depth.

**Result:**  
Upload throughput increased from 500/s to over 5,000/s, and average user wait time dropped from 4 s to <300 ms for metadata retrieval. The system now scales cost‑effectively, each service can be updated independently, and we gained clear observability via CloudWatch metrics. I learned that decoupling with message queues turns synchronous bottlenecks into resilient pipelines without sacrificing user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
