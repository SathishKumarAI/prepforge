---
qid: ing_1f64d02005__aws__local
question: 'Explain: WebSockets: — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 487
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:38:13-05:00'
sources: []
---

**What I did (Situation)**  
At my last role I led a team that had to replace the legacy polling‑based chat feature in our mobile app. The product manager asked me to evaluate WebSockets so we could deliver real‑time messaging without the latency of REST calls.

**Why WebSockets are useful (Task)**  
WebSocket is a full‑duplex, persistent TCP connection between client and server. It eliminates the overhead of repeatedly opening HTTP connections, reduces bandwidth, and gives sub‑100 ms round‑trip times—critical for instant chat, live dashboards, or IoT telemetry.

**How we designed it (Action)**  
1. **AWS API Gateway + WebSocket** – handles connection establishment, auth via JWT, and routing to a Lambda authorizer.  
2. **Amazon DynamoDB Streams + AWS Lambda** – whenever a message is written to the `Messages` table, a stream event triggers a Lambda that publishes the payload to the appropriate channel using API Gateway’s `postToConnection`.  
3. **ElasticCache‑Redis (Cluster mode)** – stores recent messages for quick replay on reconnection and keeps connection metadata.  

We added an autoscaling group of EC2 instances behind ALB for fallback when Lambda concurrency limits are hit, ensuring 99.999% availability.

**Result (Results)**  
*Latency dropped from 350 ms (REST polling) to 45 ms average.*  
*User engagement increased by **28 %** in the first month after launch, as measured by daily active sessions.*  
*Operational cost fell by 18 % because we eliminated unnecessary HTTP request overhead.*

**What a bar‑raiser looks for**  
- *Ownership*: I owned the end‑to‑end flow from auth to delivery.  
- *Dive Deep*: I dissected latency budgets, DynamoDB read/write capacity, and Lambda timeout trade‑offs.  
- *Quantified Impact*: I tied performance gains directly to user metrics.  
- *Learning*: After a brief outage caused by stale connection IDs, we added a graceful reconnect strategy—an example of turning failure into improvement.  

**Leadership Principles invoked**: **Customer Obsession**, **Ownership**, and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
