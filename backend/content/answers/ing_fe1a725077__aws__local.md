---
qid: ing_fe1a725077__aws__local
question: 'Explain: Measuring Scalability — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 455
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:52:34-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that needed to expose an ML inference endpoint for 10 M requests/day while keeping latency <50 ms and cost <$0.02 per request.

**Action**  
* **Architecture** – I designed a *serverless microservice* on Amazon SageMaker Endpoint + Lambda edge, behind an Application Load Balancer (ALB) with WAF rules.  
* **Scalability** – Leveraged SageMaker’s *Auto Scaling* for model replicas and Lambda’s *Provisioned Concurrency* to avoid cold starts. I added a DynamoDB cache (TTL 5 min) for repeated feature vectors, reducing inference calls by ~35 %.  
* **Availability** – Deployed the endpoint in two AZs with Route 53 latency‑based routing; health checks triggered automatic failover.  
* **Cost** – Implemented *Spot Instances* for SageMaker training and used *Savings Plans* for Lambda, cutting infrastructure spend 42 % vs on‑demand.  

**Result**  
The system handled peak traffic of 150 k req/s with 99.97 % uptime, latency averaged 38 ms, and total cost dropped from $12K/month to $7.2K/month—a 40 % savings—while maintaining 98 % prediction accuracy.

---

### Leadership Principles  
- **Customer Obsession** – Built a low‑latency, highly available inference service that directly improved user experience.  
- **Ownership & Dive Deep** – Took full responsibility for design choices, dug into metrics (cold start %, cache hit rate) and iterated until SLA met.

### Bar‑raiser takeaways  
*Clear ownership*, *quantified impact* (40 % cost reduction, 99.97 % uptime), *deep technical dive* (auto‑scaling, caching strategy), and learning from early latency spikes led to a robust, production‑grade ML serving platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
