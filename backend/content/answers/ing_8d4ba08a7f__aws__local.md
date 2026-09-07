---
qid: ing_8d4ba08a7f__aws__local
question: 'Explain: Let’s take a quick look at each — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 407
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:45:20-05:00'
sources: []
---

**Situation / Task**  
At my previous company I was asked to design a location‑based recommendation engine similar to Yelp/Google Places that could serve millions of daily active users while keeping latency under 200 ms.

**Action**  
1. **Requirements & trade‑offs** – We needed real‑time proximity queries, personalized ranking, and fault tolerance.  
2. **Architecture** –  
   * **Data ingestion:** Kinesis Data Streams → Lambda → DynamoDB (geo‑index via Geo‑Hash).  
   * **Search layer:** Elastic Search for fast geo‑bounding queries; backed by an Aurora PostgreSQL cluster for transactional data.  
   * **Recommendation engine:** SageMaker endpoints that ingest user context and return top‑10 POIs, deployed with Auto Scaling to handle traffic spikes.  
3. **Scalability & availability** – Multi‑AZ deployments, DynamoDB global tables, Elastic Search replicas; used CloudWatch alarms + Lambda remediation for hot spot recovery.  
4. **Cost control** – Spot instances for training, reserved instances for steady state, and S3 for model artifacts; overall 30 % cheaper than on‑prem.

**Result**  
After launch, we saw a 42 % lift in session duration and a 17 % increase in user retention. Latency stayed <180 ms for 99.8 % of requests, and the system handled a 10× traffic spike during a holiday promotion without degradation.

**Learning**  
I realized that *ownership* means iterating on feedback loops—monitoring, retraining models, and adjusting geo‑hash granularity—to keep performance in line with business goals.  

---

> **Bar‑raiser focus:** Ownership of end‑to‑end flow, deep dive into data partitioning & query patterns, quantified uplift, and proactive cost optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
