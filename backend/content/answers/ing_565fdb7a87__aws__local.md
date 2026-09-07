---
qid: ing_565fdb7a87__aws__local
question: 'Explain: Schema Design Rules — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 405
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:41:18-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* In Q3 2024 I led a cross‑functional team that built “AgentBuilder,” an internal tool letting data scientists prototype AI agents (chatbots, recommendation engines) without writing boilerplate code.

*Task:* Design a schema to store agent definitions, training data, runtime metrics, and deployment state while keeping the system scalable for >5 k concurrent users.

*Action:*  
1. **Domain‑Driven Design** – Created four root aggregates: `Agent`, `Dataset`, `ModelVersion`, `Deployment`. Each aggregate uses a single primary key (`PK`) with a sort key (`SK`) to enable efficient range queries (e.g., all versions of an agent).  
2. **Partitioning & Global Secondary Indexes (GSIs)** – Added GSIs for querying by owner, status, and last‑updated timestamp; this keeps read throughput below 1 k RCU per partition.  
3. **Event Sourcing** – Every state change emits a JSON event stored in an SQS queue that triggers Lambda to update CloudWatch metrics and S3 logs.  
4. **AWS Services:** DynamoDB (primary store), SQS + Lambda (event pipeline), CloudWatch, S3 (model artifacts).  

*Result:*  
- Reduced agent‑deployment latency from 12 s to <1 s (90 % improvement).  
- Scaled to 10 k concurrent users with <0.2 ms average read latency, keeping monthly costs under $4K vs projected $9K without indexing.  

**Bar‑raiser Takeaway:** I own the end‑to‑end flow, dive deep into DynamoDB tuning, quantify impact in real metrics, and learned that early GSIs save 70 % of future refactoring time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
