---
qid: ing_b08ccc37f1__star__local
question: 'Explain: RDS Proxy — AWS-Services/1_Databases/AmazonRDS/RDSProxy.md at
  main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 316
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:24:57-05:00'
sources: []
---

**Situation**  
When we launched our micro‑service stack for the e‑commerce platform, the PostgreSQL database behind Amazon RDS was hit with a 70% spike in read/write traffic during flash sales. Connection pooling on the client side was inefficient; each container spun up its own pool and quickly exhausted the DB’s connection limit of 100, causing timeouts.

**Task**  
I needed to reduce connection churn, keep the database within its limits, and maintain low latency for our API calls without rewriting the application logic.

**Action**  
I introduced Amazon RDS Proxy. First, I created a proxy endpoint pointing to the existing Aurora PostgreSQL cluster, enabling IAM authentication so credentials were never stored in code. Then I configured a pool size of 200 with a max lifetime of 30 minutes and enabled automatic failover. In the service code, I swapped the direct RDS JDBC URL for the proxy’s DNS name; the SDK handled connection pooling transparently. Finally, I added CloudWatch alarms to monitor proxy connections versus DB usage.

**Result**  
Connection count dropped from ~150 to under 60 during peak events, eliminating timeouts and reducing CPU on the database nodes by 25%. Latency stayed below 80 ms for 99% of requests, and we avoided a costly RDS scaling plan. I learned how proxying can be a zero‑code change that dramatically improves resilience and cost efficiency in cloud databases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
