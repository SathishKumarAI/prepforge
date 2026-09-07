---
qid: ing_73aa545b0d__aws__local
question: 'Explain: Failure: Pools behaving badly — GitHub - brettwooldridge/HikariCP:
  \u5149 HikariCP\u30fbA solid, high-performance, JDBC connection pool at last. \u00b7
  GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 342
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:47:22-05:00'
sources: []
---

**Situation & Task**  
While migrating a micro‑service that serves ML inference requests from an on‑prem RDS cluster to Aurora Serverless, I noticed the JDBC pool (HikariCP) spiking connection failures and latency jitter—“pools behaving badly.” My goal was to stabilize throughput (> 10k QPS) without increasing cost.

**Action**  
1. **Dive Deep** – profiled Hikari metrics (connection timeout, idle connections).  
2. **Ownership & Bias for Action** – adjusted `maximumPoolSize` from 50 to 200 and added `idleTimeout=60000`.  
3. **AWS Services** – enabled Aurora Serverless auto‑scaling (`minCapacity=2`, `maxCapacity=32`) and moved the service to an EC2 Auto Scaling group with spot instances (cost ≈ 40% lower).  
4. **Automated Alerting** – used CloudWatch alarms on `HikariPool-ConnectionTimeout` and triggered Lambda remediation that refreshed the pool.

**Result**  
Latency dropped from 350 ms to < 80 ms, error rate fell below 0.02 %, and CPU utilization stayed under 30 %. Cost savings were 38 % per month, and we achieved a 15 % higher request capacity while maintaining SLA.

---

*Bar‑raiser focus*: clear ownership of the failure, deep metric analysis, quantifiable impact (latency, cost), and iterative learning from each remedial step.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
