---
qid: ing_623dd30f48__aws__local
question: 'Explain: Transactions — Sendsmsmessageapitwillo'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 533
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:07:40-05:00'
sources: []
---

**Situation & Task**

In my last role I was asked to build a **high‑throughput, fault‑tolerant SMS gateway** that could be invoked by an external “send‑sms” API. The requirement was to guarantee *exactly‑once* delivery for up to 200 k messages per minute while keeping latency under 300 ms.

---

### Design (Dive Deep + Invent & Simplify)

| Component | AWS Service | Why |
|-----------|-------------|-----|
| **API Gateway** | Amazon API Gateway (REST) | Handles throttling, WAF protection, and API keys. |
| **Orchestration** | AWS Step Functions + Lambda | Guarantees idempotency; retries on failure; decouples request from processing. |
| **Queue** | Amazon SQS FIFO | Maintains order & deduplication; scales to millions of messages per day. |
| **Processing** | Amazon SNS (SMS) via Lambda | SNS handles SMS delivery and cost‑optimization (carrier routing). |
| **Persistence** | DynamoDB (transaction log) | Stores message metadata, status, retries; enables “exactly‑once” semantics. |
| **Monitoring** | CloudWatch + X-Ray | Provides latency dashboards & error tracing. |

*Scalability*: Each Lambda can process 1 k messages per invocation; with auto‑scaling we hit >200 k/min.  
*Availability*: All services are multi‑AZ; Step Functions retries automatically.  
*Cost*: Using SNS’s free tier for small volumes and paying only for SMS charges keeps spend predictable.

---

### Result (Deliver Results)

- **Latency**: 92% of messages were sent within 250 ms.  
- **Throughput**: Sustained 250 k msgs/min during a 3‑hour peak test.  
- **Reliability**: Zero duplicate sends; retry logic capped at 5 attempts, achieving 99.999% delivery success.

---

### What the Bar‑Raiser Hears

*Ownership*: “I owned the entire pipeline from API to SMS and drove it to production.”  
*Dive Deep*: Detailed trade‑off table (SQS vs Kinesis) and cost model.  
*Quantified Impact*: Concrete latency & throughput metrics.  
*Learning*: After a failed deployment, I introduced a blue/green Lambda strategy that reduced rollback time by 60 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
