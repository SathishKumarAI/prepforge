---
qid: ing_c4b409fc97__aws__local
question: 'Explain: 4.4 Handling failure of Worker nodes in Execution Service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 478
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:47:43-05:00'
sources: []
---

**Situation (S)**  
I led the redesign of our *Execution Service* for a multi‑tenant ML platform that ran hundreds of inference jobs nightly. The old worker pool was on EC2 Auto Scaling groups; when a node failed mid‑run, the job stalled and the SLA dropped to 85 % from our target 99.9 %.  

**Task (T)**  
Restore high availability for workers while keeping cost under control and ensuring no data loss.

**Action (A)**  
1. **Stateful checkpointing** – added a lightweight DynamoDB table (`JobCheckpoint`) keyed by `job_id` + `worker_id`. Every 30 s, each worker persisted its progress and intermediate tensors to S3 (`/checkpoints/{job_id}/`).  
2. **Self‑healing orchestration** – switched from EC2 Auto Scaling to *AWS Fargate* with a custom health‑check task definition that polls the checkpoint table. If a task’s heartbeat stops, ECS immediately launches a replacement.  
3. **Retry policy & idempotency** – wrapped inference calls in an SQS FIFO queue (`InferenceTasks`). Each message carries a unique deduplication ID; the worker idempotently reads from its checkpoint before re‑executing.  
4. **Cost control** – enabled Fargate Spot with a 20 % price cap, and used *Savings Plans* for baseline capacity.  

**Result (R)**  
- SLA improved to **99.95 %** within 2 weeks.  
- Average job completion time dropped from 12 min to **9.5 min** (25 % faster).  
- Spot usage cut operational spend by **30 %** while maintaining the same performance envelope.  

---

### Amazon Leadership Principles Highlighted
- **Customer Obsession** – ensured uninterrupted inference for ML customers.  
- **Ownership & Dive Deep** – identified root cause, engineered stateful recovery, and quantified impact.

*Bar‑raiser focus*: depth of fault‑tolerance design, clear metrics before/after, cost trade‑offs, and evidence that we learned from past failures (e.g., why checkpointing solved the stall issue).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
