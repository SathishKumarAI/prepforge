---
qid: ing_36fd3431b9__aws__local
question: 'Explain: Push Notification Service — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 519
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:29:01-05:00'
sources: []
---

**Situation (S)**  
At my last role I led a cross‑functional team that had to build a push‑notification service for a messaging app similar to WhatsApp, with the goal of delivering millions of messages per day while keeping latency under 200 ms.

**Task (T)**  
I owned the architecture: high availability, fault tolerance, and cost efficiency across AWS regions.  

**Action (A)**  
1. **Design** – I decomposed the system into three layers:  
   * **Ingestion**: API Gateway + Lambda for client‑side requests, throttling via DynamoDB rate limits.  
   * **Processing**: Kinesis Data Streams → Lambda → SNS topics per device type; this gives linear scaling and guarantees at‑least‑once delivery.  
   * **Delivery**: Amazon Pinpoint (push) + AWS IoT Core for low‑latency WebSocket push, backed by Elasticache Redis for session state.  

2. **Scalability & Availability** – All services run in a VPC with dual AZs; Kinesis shards auto‑scale based on throughput; Lambda concurrency is capped per region to avoid cold starts.  
3. **Cost & Trade‑offs** – Using serverless (Lambda, API Gateway) cuts idle costs by 70 % versus EC2. We accepted a slight increase in complexity for Pinpoint’s per‑device cost because it guarantees delivery even on backgrounded apps.  

4. **Metrics & Results** – After launch we achieved:  
   * 95 % of messages delivered < 200 ms, 99.9 % overall success rate.  
   * Reduced operational costs by 45 % compared to the legacy EC2‑based system.  

**Result (R)**  
The service scaled from 10 M to 120 M daily pushes within six months without a single outage, proving the design’s robustness and cost efficiency.

---

### Leadership Principles Highlighted
* **Ownership** – I drove end‑to‑end delivery, from requirements to monitoring.  
* **Dive Deep & Deliver Results** – Detailed trade‑off analysis, measurable KPIs, and continuous improvement loop (post‑mortems on any failures).  

Bar‑raisers expect this blend of customer focus, technical depth, quantified impact, and a clear learning path from early iterations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
