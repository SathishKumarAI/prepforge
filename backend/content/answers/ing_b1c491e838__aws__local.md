---
qid: ing_b1c491e838__aws__local
question: 'Explain: The Durable-Execution Model — Durable Execution'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 517
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:06:43-05:00'
sources: []
---

**Durable‑Execution Model – How I built a fault‑tolerant AI inference pipeline**

*Leadership Principles:* **Ownership** + **Customer Obsession**  

---

### Situation
Our ML service served on‑demand image classification for a global retailer. A spike during Black Friday pushed the inference queue to 1 M requests per hour, causing 12 % latency spikes and 4 % error rate.

### Task
I had to guarantee that every request was processed exactly once, recover from transient failures, and keep cost < $5k/month while keeping SLA > 99.9%.

### Action
I redesigned the pipeline as a **Durable‑Execution Model** using:

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Queueing & retry | Amazon SQS FIFO + DLQ | Guarantees order, idempotence, built‑in retries |
| Orchestration | Step Functions (state machine) | Manages long‑running inference steps and error handling |
| Compute | Lambda + ECS Fargate (GPU) | Serverless scaling + containerized GPU workloads |
| Persistence | DynamoDB (deduplication table) | Idempotent execution, fast lookup |
| Monitoring | CloudWatch Alarms & X-Ray | Real‑time latency/throughput metrics |

**Key design choices**

1. **Idempotent Lambda handlers** check the deduplication table before processing.
2. Step Functions “Wait” states throttle GPU usage to 80 % capacity, preventing overcommit.
3. DLQ pushes failed messages to an SNS topic that triggers a batch retry job in Fargate.

### Result
- Latency dropped from 350 ms → **120 ms** (average) during peak.
- Error rate fell from 4 % → **0.02 %** (99.98 % success).
- Cost stayed at $4,200/month vs the projected $7,000 without durable handling.

### Learnings
I discovered that *“durability”* is not just about retries; it’s an architectural mindset—tracking state, ensuring idempotence, and exposing observability. This approach now underpins all our AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
