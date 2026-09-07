---
qid: ing_1fb64f7ea1__aws__local
question: 'Explain: Reliability Through Retry — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 469
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:38:58-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
When our e‑commerce platform launched a new recommendation engine, downstream services were receiving ~1 M messages per hour from the user‑activity stream. A single point of failure in the message consumer caused backlogs that degraded recommendation latency by 35 %. I was tasked to design a reliable retry mechanism that kept SLA (≤200 ms) while avoiding duplicate processing.

**Approach & Design (Dive Deep + Invent & Simplify)**  
1. **Decouple with SQS FIFO** – Guarantees order and at‑least‑once delivery.  
2. **Visibility Timeout = 60 s** – Consumer deletes after successful process; otherwise the message becomes visible again automatically.  
3. **Exponential Backoff via Lambda Destinations** – On failure, a Lambda retries immediately, then on second failure routes to an *DLQ* and triggers a Step‑Functions state machine that waits `2^n` seconds before re‑enqueueing.  
4. **Dead‑Letter Queue + CloudWatch Metrics** – Capture unprocessable messages; auto‑scale SNS notifications for ops.  
5. **Cost Control** – Use SQS long polling (20 s) to reduce empty receives, and provisioned concurrency on Lambda to keep invocations predictable.

**Result (Deliver Results)**  
- Latency dropped from 200 ms → 48 ms under peak load.  
- Duplicate processing reduced by 92 % (from 4.3k/HR to 260/HR).  
- Operational cost increased <5 %, mainly due to added DLQ storage.

**Reflection (Bias for Action + Ownership)**  
The first week, a mis‑calculated visibility timeout caused a temporary spike; I logged the failure in CloudWatch and updated the deployment pipeline with automated unit tests for timeout settings. This prevented future regressions and reinforced our “fail fast, learn faster” culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
