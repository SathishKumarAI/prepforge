---
qid: ing_3041dc6a9e__aws__local
question: 'Explain: 5.1 Handling Failures and Retries — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 517
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:14:16-05:00'
sources: []
---

**Situation (S)**  
I led a cross‑functional team that built an enterprise notification engine for a SaaS platform used by 1 M daily active users. The system had to guarantee *at least once* delivery of push, email, and SMS messages while handling transient failures at scale.

**Task (T)**  
Design a robust failure‑handling & retry mechanism that minimizes latency, avoids duplicate notifications, and keeps operational costs predictable.

**Action (A)**  

1. **Event Queueing** – I chose Amazon SQS FIFO for ordering guarantees and visibility timeouts to prevent duplicate processing.  
2. **Retry Logic** – Implemented an *exponential back‑off* policy with a capped maximum of 5 attempts, stored in the message body as a retry counter.  
3. **Dead‑Letter Queue (DLQ)** – Unretriable failures routed to SQS DLQ and forwarded to Amazon SNS for alerting ops.  
4. **Idempotency** – Added a unique `notification_id` and DynamoDB table with TTL to dedupe messages that might be re‑queued due to network glitches.  
5. **Observability** – CloudWatch metrics (retry count, DLQ depth) trigger Lambda alarms; all events are logged in Amazon Kinesis Data Firehose for audit.

6. **Cost Control** – Leveraged SQS long polling and Lambda provisioned concurrency to keep invocation cost < $0.0002 per message while sustaining 10k TPS.

**Result (R)**  
After deployment, *duplicate delivery rate dropped from 4.3% to 0.1%*, and SLA compliance rose from 92 % to 99.8%. Operational costs were 15 % lower than the legacy polling system, and we reduced mean time to recovery by 60 %.

---

### Leadership Principles  
- **Ownership** – I drove end‑to‑end design, from queueing to observability, ensuring reliability without hand‑offs.  
- **Dive Deep** – Built a retry strategy that balances latency, cost, and idempotency; used metrics to iterate on back‑off parameters.  

### Bar‑raiser cues  
- Clear ownership of failure paths.  
- Quantified impact (duplicate rate, SLA).  
- Learning loop: observed DLQ spikes → tweaked max retries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
