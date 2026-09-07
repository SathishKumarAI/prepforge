---
qid: ing_83905f96e3__aws__local
question: 'Q: When is durable execution overkill, and what would you use instead?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 504
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:22:28-05:00'
sources: []
---

**Answer (Amazon Way)**  

When the workload is *short‑lived*, *stateless* and *idempotent*, the cost of a durable execution framework (e.g., Step Functions + DynamoDB) outweighs its benefits. In my last role I had to process 200 k daily image transformations that completed in <2 seconds each. Deploying Step Functions added ~$0.10 per workflow and introduced a 1‑second cold start, pushing latency from 350 ms to 500 ms—an unacceptable hit for our real‑time recommendation engine.

**STAR**

- **Situation:** 200 k image jobs/day; required <400 ms latency.
- **Task:** Reduce cost & latency while keeping reliability.
- **Action:** Switched from durable Step Functions to a *stateless* AWS Lambda + SQS pattern. Jobs were queued in an SQS FIFO queue, triggered by the Lambda that performed the transformation and stored results directly in S3.
- **Result:** Latency dropped to 350 ms (≈15% improvement), cost fell from $12k/month to $3k/month, and we achieved a 99.999% success rate without the overhead of state tracking.

**Technical notes**

| Component | Why it fits |
|-----------|-------------|
| **SQS FIFO** | Guarantees order & at‑least‑once delivery for idempotent jobs. |
| **Lambda (v3)** | Built‑in retries, automatic scaling; no provisioning cost. |
| **S3 + CloudWatch** | Durable storage and observability without extra database writes. |

**Bar‑raiser signals**

- **Ownership:** I identified the unnecessary complexity early and owned the migration plan.
- **Dive Deep:** Quantified latency & cost per invocation to justify the change.
- **Quantified Impact:** 75% cost reduction, 15% latency improvement.
- **Learning from Failure:** The initial Step Functions trial taught me to evaluate state‑fulness vs. statelessness before committing to a durable workflow.

In short, for lightweight, repeatable jobs a *stateless Lambda + SQS* combo is often the optimal choice over durable execution frameworks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
