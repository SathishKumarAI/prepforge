---
qid: ing_d3c25568c3__aws__local
question: 'Explain: EventDriven vs Request-Response Communication Pattern'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 483
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:19:26-05:00'
sources: []
---

**Event‑Driven vs Request‑Response (Amazon Style)**  

During a redesign of our recommendation engine (S), I noticed latency spikes when the user‑profile service hit the ML inference API synchronously (R). To solve this, I proposed an event‑driven architecture that decouples data ingestion from model scoring.  

**Situation & Task:**  
Our real‑time pipeline processed ~2 M profile updates/day, but the synchronous API caused a 35 % increase in page load time during peak hours. The goal was to reduce end‑to‑end latency by 50 % while keeping cost under $200k/month.

**Action:**  
I built an **Event‑Driven** flow:  
1. **Kinesis Data Streams** capture profile changes → **Lambda** transforms records into inference requests.  
2. **SQS FIFO** queues the payloads, guaranteeing order and exactly‑once delivery.  
3. A fleet of **EC2 Spot Instances** (Auto Scaling) host a lightweight TensorFlow Serving container that processes batches from SQS.  

For comparison, the legacy **Request‑Response** pattern used an API Gateway + Lambda → SageMaker endpoint, incurring 300 ms cold starts per request and $0.06/1000 invocations.

**Result:**  
- Latency dropped from 320 ms to 120 ms (62 % reduction).  
- Cost fell from $310k to $185k/month (40 % savings).  
- Throughput increased by 1.8×, supporting a projected 5‑fold user growth.

**Reflection:**  
I owned the migration end‑to‑end, diving deep into CloudWatch metrics and iterating on batch size until convergence. The bar‑raiser will notice my ownership of both performance and cost, my data‑driven impact, and how I learned from the initial cold‑start failure to choose Kinesis over API Gateway.  

**Leadership Principles:** *Customer Obsession* (improved user experience), *Ownership* (full delivery), *Dive Deep* (metrics‑based tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
