---
qid: ing_8d79044917__aws__local
question: 'Explain: Summary — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 437
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:45:37-05:00'
sources: []
---

**Idempotency in ML Pipelines – A Customer‑Obsessed, Ownership‑Driven Design**

*Situation*: Our recommendation engine was re‑training nightly on a 10 TB clickstream dataset. A transient S3 upload failure caused the same batch to be processed twice, inflating our compute cost by **$2,500/day** and corrupting model weights.

*Task*: Build an idempotent ingestion layer that guarantees each data chunk is processed exactly once without sacrificing latency or scalability.

*Action*:  
1. **Requirement dive‑deep**: Each record must have a deterministic hash (SHA‑256) of its payload + timestamp.  
2. **Design**:  
   - Use *Amazon SQS FIFO* queues to preserve order and deduplication with message group IDs set to the bucket name.  
   - Store processed hashes in a *DynamoDB* table (`ProcessedRecords`) with TTL 30 days, enabling quick existence checks.  
   - A Lambda function reads from SQS, checks DynamoDB; if absent, it writes the hash and forwards the batch to an *Amazon SageMaker* training job via Step Functions.  
3. **Scalability & Cost**: DynamoDB auto‑scales with 1 ms latency; SQS FIFO costs $0.50 per million messages—well below our $5k/month budget.  
4. **Trade‑offs**: We trade a tiny 1–2 s lookup delay for guarantees against double‑processing, acceptable given the nightly batch window.

*Result*: Post‑deployment, duplicate processing dropped to **0%**, saving **$30k annually** and eliminating stale model artifacts. The system now reliably scales to 50 TB/day while keeping cost < $4k/month.

*Bar‑raiser takeaways*: I owned the problem end‑to‑end, dove deep into AWS primitives, quantified impact (cost savings), and learned that a simple hash+dedup table can replace costly re‑runs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
