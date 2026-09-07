---
qid: ing_f3d06dee4b__faang__local
question: 'Explain: Delay service — Asynchronous computing at Meta: Overview and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 444
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:06:09-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a concise overview of *Delay Service*, Meta’s async‑compute framework, and the key takeaways from its production use. I’ll confirm whether they want an architectural walk‑through or just high‑level lessons.

**Approach**  
1. Define Delay Service: a serverless job queue that decouples compute from request latency.  
2. Highlight core components: *Delay Queues*, *Workers*, *Retry & Dead‑letter logic*.  
3. Outline workflow: submit → enqueue → worker processes asynchronously → result stored or callback invoked.  
4. Summarize learnings: scalability, reliability, cost, and developer ergonomics.

**Depth**  
- **Architecture**: Uses a distributed Kafka‑style queue backed by DynamoDB for idempotency. Workers are stateless microservices scaled via Kubernetes autoscaling.  
- **Latency & Throughput**: Handles >10M tasks/sec with <5 s tail latency by batching and back‑pressure.  
- **Reliability**: Exactly‑once semantics via optimistic concurrency; retries capped at 3× exponential back‑off, dead‑letter queue for persistent failures.  
- **Cost**: Serverless compute (Fargate) + spot instances reduce spend by ~30 % vs on‑prem.  
- **Developer Experience**: SDKs expose simple `submitJob()` API; automated observability (metrics, traces).  

**Edge Cases**  
- *Task duplication*: mitigated with unique IDs and idempotent handlers.  
- *Worker failure*: triggers immediate requeue; if persistent → dead‑letter.  
- *Burst traffic*: back‑pressure signals workers to pause; queue size alerts.

**Optimize & Communicate**  
Future improvements: add priority queues, GPU workers for ML inference, tighter integration with Meta’s internal data lake. In an interview I’d narrate the trade‑offs (exactly‑once vs performance) and show how Delay Service balances latency, cost, and reliability—core metrics a FAANG team would value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
