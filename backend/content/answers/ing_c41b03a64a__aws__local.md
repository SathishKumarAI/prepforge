---
qid: ing_c41b03a64a__aws__local
question: 'Explain: Connection Pooling: — Top 5 Common Ways to Improve API Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 462
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:46:30-05:00'
sources: []
---

**Answer – Amazon Interview Style**

During my time as a Solutions Architect at AWS, I led the redesign of a high‑traffic recommendation API that was bottlenecked by database latency.  
*Situation:* The service served 1 M requests/day; each hit triggered a new DB connection, yielding 30 % CPU saturation on the RDS instance and a 250 ms average response time.  
*Task:* Reduce latency by 70 % while keeping cost under $10k/month.  
*Action:* I applied **Customer Obsession** and **Ownership** to engineer a multi‑layer connection pool strategy:

| Technique | AWS Service | Why it helps |
|-----------|-------------|--------------|
| 1️⃣ **RDS Proxy + Connection Pooling** | Amazon RDS Proxy | Reuses up to 1000 idle connections, cuts CPU by ~45 % and improves failover resilience. |
| 2️⃣ **Elastic Cache for Redis** | Amazon ElastiCache | Caches query results; reduces DB hits by 80 %. |
| 3️⃣ **Connection Timeouts & Retry Backoff** | Lambda + API Gateway | Prevents “thundering herd” spikes, improving stability. |
| 4️⃣ **Auto‑Scaling Aurora Serverless** | Amazon Aurora Serverless v2 | Dynamically scales CPU to match traffic, cutting idle costs by 30 %. |
| 5️⃣ **Connection Pool Monitoring & Alerting** | CloudWatch + SNS | Enables proactive throttling; logs reveal bottlenecks early. |

*Result:* Response time dropped from 250 ms to **65 ms** (75 % improvement). Cost fell from $15k/month to **$9.2k**, and we achieved >99.99 % availability during a traffic surge test.

**Bar‑raiser focus:** Ownership of the entire stack, deep dive into connection metrics, quantified performance gains, and lessons learned—e.g., why naive pooling caused “connection starvation” before RDS Proxy was introduced.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
