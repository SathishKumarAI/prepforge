---
qid: vq_0c0a5c624e__aws__local
question: How do I resolve a Communications Link Failure when connecting to MySQL?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 512
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:38:26-05:00'
sources: []
---

**Situation / Task**

In my last role at a SaaS startup we migrated our on‑prem MySQL cluster to **Amazon RDS for MySQL** to reduce maintenance overhead. During the cutover one of the read replicas fell offline and every application instance started throwing *“Communications link failure”* errors, cutting 12 % of our traffic. I had to restore connectivity while keeping SLA ≥ 99.9%.

**Action**

1. **Own the problem (Ownership)** – Immediately opened a support ticket with AWS and pinged all replicas.
2. **Dive deep into logs** – Checked `rds` CloudWatch metrics, found CPU spikes + increased read latency on the replica that had been promoted to master after an automated fail‑over.
3. **Implement a quick fix (Bias for Action)** – Temporarily switched application endpoints to the healthy standby using DNS TTL of 60 s and added a retry‑with‑exponential‑backoff logic in the JDBC driver.
4. **Long‑term solution (Invent & Simplify)** –  
   * Added an **Elastic Load Balancer** with health checks that automatically routes traffic to the healthiest instance.  
   * Enabled **Multi-AZ** for the primary and read replicas, so fail‑over is instantaneous.  
   * Configured **Aurora MySQL** (serverless) as a fallback; it scales on demand and costs ~30 % less during low load.

5. **Post‑mortem & learning** – Documented the root cause (CPU throttling due to unbalanced write traffic), added an alert on `rds_cpu_utilization > 80%`, and scheduled quarterly capacity reviews.

**Result**

- Restored full service in < 15 min, reducing downtime from ~2 h to < 1 h.  
- Achieved a 99.95 % uptime for the month following the fix.  
- Cut operational cost by 25 % with Aurora serverless while maintaining performance.

**What a bar‑raiser hears**

- Clear ownership and rapid triage.  
- Data‑driven decisions (CPU %, latency).  
- Scalable, highly available design using RDS Multi‑AZ + ELB + Aurora.  
- Quantified impact on uptime & cost.  
- Continuous learning loop via post‑mortem and preventive monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
