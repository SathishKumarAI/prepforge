---
qid: ing_9c4cbe8777__aws__local
question: 'Explain: Session Service — Design WhatsApp | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 557
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:18:16-05:00'
sources: []
---

**Situation & Task (S)**  
I was asked to design a *Session Service* that would power real‑time chat for a global WhatsApp clone – each user could start/continue an active conversation with up to 50 million concurrent participants.

**Action (A)**  
1. **Requirements:**  
   - 99.9 % availability, sub‑200 ms latency, support push notifications and offline buffering.  
   - Persist chat state for audit & compliance.  

2. **Design Choices:**  
   | Layer | Service | Why |
   |-------|---------|-----|
   | API Gateway + Lambda | *Amazon API Gateway* + *AWS Lambda* | Serverless scaling, pay‑as‑you‑go, instant cold‑start mitigated by provisioned concurrency. |
   | Session Store | *DynamoDB (Global Tables)* | Multi‑region replication for low‑latency reads/writes; TTL for stale sessions. |
   | Real‑time Messaging | *Amazon MQ (RabbitMQ)* + *AWS IoT Core* | MQTT protocol gives sub‑50 ms delivery; message broker guarantees at‑least‑once semantics. |
   | Offline Buffering | *S3 + Glacier* | Cost‑effective long‑term storage for message history. |
   | Monitoring | *CloudWatch, X-Ray* | Distributed tracing to surface bottlenecks. |

3. **Scalability & Cost:**  
   - Lambda autoscaling handles 1 M QPS → ~\$0.20/hr per region.  
   - DynamoDB throughput auto‑scales; estimated $30k/month for 50 M active users.  
   - MQ cluster (2 nodes) keeps latency < 150 ms at peak.

**Result (R)**  
After a 3‑month pilot, the service sustained **120 M messages/day** with **99.95 % availability** and average **140 ms end‑to‑end latency**, beating the target by 10%. Cost was 25 % below projected budget due to efficient serverless usage.

**Leadership Lens**  
- *Customer Obsession:* Designed for instant, reliable delivery.  
- *Ownership & Dive Deep:* I led cross‑functional ops to troubleshoot a rare “message duplication” bug, reducing incidents by 40 %.  

Bar‑raisers look for **ownership**, quantified impact, and learning from failure—exactly what this project delivered.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
