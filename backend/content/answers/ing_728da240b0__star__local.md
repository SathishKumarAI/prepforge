---
qid: ing_728da240b0__star__local
question: An agent task takes 2-10 minutes. How do you design the API for clients
  kicking off and tracking these jobs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 334
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:16:33-05:00'
sources: []
---

**Situation** – In my last role I built a service that ran AI inference pipelines on user‑supplied data. Each job could take anywhere from 2 minutes for a small image classification to 10 minutes for a full video analysis. Clients needed to submit work, poll status, and retrieve results without blocking.

**Task** – Design an API that balances responsiveness with reliability: let clients kick off jobs instantly, track progress in real time, and get results once finished, while keeping the backend scalable and cost‑efficient.

**Action** – I adopted a stateless REST/HTTP interface coupled with a message queue (RabbitMQ) for job dispatch. The POST `/jobs` endpoint returned a UUID and an initial “queued” status; clients could then GET `/jobs/{id}` to poll state. Internally, workers pulled jobs from the queue, updated a Redis cache with progress percentages, and persisted final outputs in S3. I added WebSocket notifications for long‑running jobs so clients could subscribe to real‑time updates instead of polling. To prevent runaway costs, I enforced per‑user quotas via an API gateway that throttled requests and flagged jobs exceeding 10 minutes for manual review.

**Result** – Adoption dropped average client wait times from 5 min (polling only) to under 30 seconds for job submission. The real‑time progress updates reduced support tickets by 40 %. I learned that combining lightweight REST endpoints with a push mechanism and external storage yields both scalability and a pleasant developer experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
