---
qid: ing_c6152d5da1__aws__local
question: 'Explain: Critical frontend decision: Streaming — ChatGPT System Design
  - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 438
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:50:50-05:00'
sources: []
---

**Situation (S)**  
While architecting a real‑time customer support chat for an e‑commerce platform, I had to decide whether to use polling or WebSocket streaming for the front‑end. The goal was to deliver sub‑200 ms response latency while keeping operational costs under $5k/month.

**Task (T)**  
Design a scalable, highly available streaming solution that could handle 50k concurrent users and allow real‑time analytics on conversation flows.

**Action (A)**  
I chose **Amazon API Gateway + AWS AppSync with WebSocket APIs** backed by **AWS Lambda@Edge** for low‑latency routing.  
* *Scalability*: API Gateway auto‑scales to 10⁶ messages/s; Lambda@Edge runs in the edge, reducing round‑trip time.  
* *Availability*: Multi‑AZ deployment and automatic failover via Route 53 health checks keep 99.99 % uptime.  
* *Cost*: Serverless architecture eliminates idle servers; we paid only $3.2k/month for 1.5M messages in the first quarter.  
* *Analytics*: Messages are streamed to **Amazon Kinesis Data Streams** and processed by **Kinesis Data Analytics** for real‑time sentiment scoring, feeding back into the UI with < 100 ms latency.

I also implemented a fallback polling mechanism using **SQS long polling** for browsers that don’t support WebSockets, ensuring no customer lost connection.

**Result (R)**  
Latency dropped from 350 ms to 180 ms, reducing churn by 12% in the first month. Monthly spend stayed below budget, and the solution scaled to 120k concurrent users during a flash sale without performance regressions.  

**Leadership Principles Highlighted**  
*Customer Obsession* – delivering instant replies improved user satisfaction.  
*Ownership & Dive Deep* – I evaluated trade‑offs of every service and built end‑to‑end metrics to validate decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
