---
qid: ing_2adb0ced9e__aws__local
question: 'Explain: the relevant points are going to be — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 371
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:02:11-05:00'
sources: []
---

**Situation / Task**  
At DoorDash I was tasked to redesign the real‑time driver‑cuisine matching engine so that riders could see nearby restaurants and driver locations with < 200 ms latency while scaling to 10M concurrent users.

**Action**  
I owned the solution, diving deep into geo‑hashing and WebSocket patterns.  

1. **Geo‑Hashing** – I chose a Hilbert curve hash (precision = 0.01°) stored in Amazon DynamoDB with a global secondary index on hash key. This gave sub‑kilometer bucket resolution and eliminated full table scans, cutting query cost by 70%.  
2. **WebSockets** – I deployed an AWS API Gateway WebSocket API behind an Elastic Load Balancer that forwards to a fleet of AWS Lambda containers (via ECS Fargate). Each container maintains a short‑lived connection per rider, pushing delta updates only when the driver’s hash changes.  
3. **Scalability & Availability** – Using DynamoDB Auto Scaling and API Gateway’s regional endpoints ensured 99.999% availability; serverless functions auto‑scale to zero, keeping cost < $0.04/10k messages.  

**Result**  
Latency dropped from 600 ms to 180 ms (3× faster), driver‑to‑restaurant matches increased by 28%, and churn fell 12%. The design also cut infra spend by $120K/month. I learned that coupling domain knowledge (geography) with AWS serverless patterns yields a robust, cost‑effective system—exactly what the **Customer Obsession** and **Ownership** principles demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
