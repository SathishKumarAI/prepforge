---
qid: ing_03a25e59d3__aws__local
question: 'Explain: Okay. Um, and we have actually managed — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 535
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:32:54-05:00'
sources: []
---

**Context (S)**  
While leading a cross‑functional team on an internal messaging platform, I was asked to benchmark how Google Wave handled real‑time collaboration at scale. The goal was to determine if we could adopt a similar architecture for our own “smart inbox” service.

**Task (T)**  
Design a low‑latency, highly available data pipeline that supports concurrent edits from thousands of users per minute, while preserving consistency and auditability.

**Action (A)**  

1. **Requirements & Constraints** –  
   * Latency < 200 ms for edit propagation.  
   * Durable state with eventual consistency across global regions.  
   * Cost‑effective storage for large document histories.

2. **Design** –  
   * **Front‑end**: WebSocket gateway on Amazon API Gateway + Lambda, routing edits to an autoscaling `kinesis-data-stream`.  
   * **Processing**: Kinesis shards feed a fleet of `ecs` containers running an OT (Operational Transformation) engine (Python). Each container writes op logs to DynamoDB Streams.  
   * **Storage**: Use S3 for immutable audit trails, and DynamoDB Global Tables for real‑time document state.  
   * **Scalability**: Kinesis shard count scales with traffic; ECS task placement uses Spot Instances to keep costs <$0.10 per 1 k ops/min.  
   * **Availability**: Multi‑AZ deployments of API Gateway + Kinesis + DynamoDB guarantee <0.5 % outage probability, meeting our SLA.

3. **Result (R)** –  
   After a week‑long PoC with 50,000 concurrent users, we achieved 92 % ops delivered within 180 ms, and the total monthly cost was $1.2k versus an estimated $4.5k for a monolithic solution—**a 73 % savings**.

**Leadership Principles Highlighted**  
- **Ownership** – I drove end‑to‑end design, testing, and cost optimization.  
- **Dive Deep** – Detailed analysis of latency budgets, shard sizing, and DynamoDB capacity planning.  

*What a bar‑raiser hears:* concrete metrics, clear trade‑offs (latency vs cost), evidence of ownership, and a learning loop from the PoC failures (e.g., adjusting shard count after spike).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
