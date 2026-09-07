---
qid: ing_3bdf38559a__aws__local
question: 'Explain: 2.7 System Design: Design a 1-on-1 Chat System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 568
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:41:43-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a real‑time 1‑on‑1 chat service for an internal collaboration tool that would support ~200 k concurrent users while guaranteeing sub‑200 ms latency and 99.9 % availability.

**Action – Design**  

| Component | AWS Service | Why |
|-----------|-------------|-----|
| **API Layer** | Amazon API Gateway + Lambda (or ALB + ECS Fargate) | Low‑latency, auto‑scales with traffic; cost‑effective for bursty workloads. |
| **Realtime Messaging** | Amazon SNS topics per user pair + Amazon SQS FIFO queues | Guarantees ordered delivery and deduplication; decouples producers/consumers. |
| **State & Presence** | DynamoDB (Global Tables) | Single‑write capacity with eventual consistency, global replication for multi‑region failover. |
| **WebSocket Push** | API Gateway WebSocket + Lambda | Enables push to clients; scales elastically, no server maintenance. |
| **Storage** | Amazon S3 + Glacier for long‑term audit logs | Durable, cost‑effective archival. |
| **Monitoring** | CloudWatch Alarms + X-Ray | Detect latency spikes and trace request paths. |

*Scalability:* Each component is serverless or managed; auto‑scales to thousands of messages per second.  
*Availability:* Global Tables provide cross‑region redundancy; API Gateway offers 99.95 % SLA.  
*Cost:* Rough estimate $0.0001/message + $0.02/GB for S3, < $2k/month at peak.

**Result (STAR)**  
- **S**: Delivered the prototype within 6 weeks.  
- **T**: Achieved <180 ms average latency under a simulated load of 50 k concurrent users.  
- **A**: Deployed with blue/green Lambda updates and automated rollback on SQS failure rate >5%.  
- **R**: Reduced support tickets by 35 % compared to the legacy polling system; user satisfaction score rose from 3.2 to 4.6 out of 5.

**Learning & Ownership**  
I took ownership of the end‑to‑end flow, diving deep into DynamoDB throttling patterns and SQS visibility timeouts. A failed first iteration (using a monolithic WebSocket server) taught me the value of decoupling messaging from persistence—leading to the current serverless design.

> **Bar‑raiser cues:** clear ownership, depth in trade‑off analysis, quantified impact, and lessons learned from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
