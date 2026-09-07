---
qid: ing_e2bbc84c83__aws__local
question: 'Explain: Single Point of Failure (SPOF) | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 407
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:51:50-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
I was tasked to redesign a recommendation engine that served 3 M users/day. The monolithic Lambda‑based workflow had a single SQS queue as the only message broker – a classic SPOF that caused >20 % downtime during traffic spikes.

**Action (Dive Deep, Bias for Action, Invent & Simplify)**  
1. **Decouple producers/consumers**: replaced the single queue with an Amazon Kinesis Data Stream and split consumers into two Lambda shards.  
2. **Health‑check & auto‑scale**: enabled DynamoDB Streams to trigger a CloudWatch alarm that scales the shard count automatically.  
3. **Redundancy**: added a secondary “dead‑letter” stream for failed records, ensuring no loss of data.

**Result (Deliver Results)**  
- 99.95 % availability vs the previous 92 %.  
- Latency dropped from 1.2 s to 300 ms (average).  
- Cost decreased by 18 % due to efficient scaling and elimination of over‑provisioned queue resources.

**Bar‑raiser checkpoints**  
*Ownership*: I drove end‑to‑end migration, documented rollback plans, and owned post‑deployment monitoring.  
*Dive Deep*: Used CloudWatch metrics to identify the bottleneck and iterated on shard sizing until SLA met.  
*Quantified Impact*: Tracked Uptime, Latency, Cost – all measured against baseline.  
*Learning from Failure*: The initial attempt failed because we kept a single queue; after the redesign, I created an “SPOF‑audit” checklist that now precedes every new service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
