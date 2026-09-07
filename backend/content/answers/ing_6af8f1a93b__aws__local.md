---
qid: ing_6af8f1a93b__aws__local
question: 'Explain: Improve the Database — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 462
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:25:59-05:00'
sources: []
---

**Situation & Task (S)**  
At a fintech startup I was asked to overhaul our 3‑year‑old client‑server stack that supported ~200k active users and processed ~10 M daily transactions. The monolithic database had become a bottleneck: latency spiked to 250 ms under peak load, and we couldn’t guarantee the SLA of <100 ms for critical payment flows.

**Action (A)**  
I took full ownership (**Ownership**) and led a cross‑functional squad.  
1. **Dive Deep** into metrics: I instrumented the DB layer with CloudWatch & X-Ray to identify hot queries and contention points.  
2. Decomposed the schema into *user*, *transaction* and *audit* micro‑services, each backed by Amazon Aurora Serverless v2 for automatic scaling.  
3. Introduced read replicas (Aurora Global Databases) in us-east-1 and eu-west-1 to serve regional traffic with <20 ms latency.  
4. Leveraged DynamoDB for the audit trail (event sourcing) – 10× cheaper per request and fully serverless.  
5. Implemented **AWS RDS Proxy** to pool connections, reducing connection overhead by 40%.  
6. Added an API Gateway + Lambda layer that validated requests before hitting the DB, enforcing rate limits and preventing DDoS.

**Result (R)**  
- Latency dropped from 250 ms to <80 ms for 95th‑percentile payment queries.  
- Throughput increased by 3×, handling 30 M daily transactions without any outages.  
- Cost per transaction fell 25% due to Aurora Serverless scaling and DynamoDB’s pay‑per‑request model.  

**Reflection & Learning**  
The biggest lesson was that “big data” problems often stem from a single monolith; breaking it into bounded contexts unlocks elasticity. I documented the design, published an internal playbook, and mentored 4 junior engineers—showing bias for action and a commitment to **Deliver Results** while fostering ownership across teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
