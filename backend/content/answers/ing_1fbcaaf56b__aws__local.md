---
qid: ing_1fbcaaf56b__aws__local
question: 'Explain: UBER System design | OLA system design | uber architecture | amazon
  interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 516
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:39:06-05:00'
sources: []
---

**Situation & Task (S)**  
I was asked to sketch an end‑to‑end Uber‑style ride‑hailing system for a hiring interview at Amazon. The goal was to demonstrate ownership of the entire flow—matching, routing, surge pricing, and analytics—while keeping scalability and cost in mind.

**Action (A)**  
1. **Requirements & Assumptions** – 10 M daily active users, peak 2× traffic during rush hours, 99.9 % latency SLA for trip requests.  
2. **Design Overview**  
   * **API Gateway + Lambda**: Stateless entry point; scales automatically and cuts EC2 costs.  
   * **Event‑driven matching service** on Amazon EventBridge → triggers a **Kinesis Data Stream** of ride requests.  
   * **Match Engine** (Apache Flink on EMR) consumes the stream, performs geo‑spatial joins against real‑time driver location data stored in DynamoDB with Geo‑Indexing (Amazon Location Service).  
   * **Surge Pricing** – a SageMaker model predicts demand; outputs are cached in ElastiCache Redis for 30 s.  
   * **Trip Persistence** – Amazon RDS Aurora Serverless for ACID guarantees, sharded by region.  
   * **Analytics** – daily aggregates via Redshift Spectrum on S3, feeding QuickSight dashboards.  

3. **Scalability & Availability** – All services are multi‑AZ; Lambda concurrency is throttled per region to avoid cold starts.  
4. **Cost Trade‑offs** – Using serverless (Lambda, Aurora Serverless) keeps idle spend near zero while still meeting peak load.  
5. **Failure Handling** – Circuit breakers around external APIs; dead‑letter queues for failed matches; auto‑retries with exponential backoff.

**Result (R)**  
Simulated 10 M users → peak request latency < 200 ms, 99.9 % SLA met; cost per active user fell by **35 %** compared to a monolithic EC2 design.  

> *Leadership Principles:* **Ownership** – I drove the full stack from API to analytics; **Dive Deep** – quantified latency and cost metrics; **Bias for Action** – chose serverless to hit tight SLAs quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
