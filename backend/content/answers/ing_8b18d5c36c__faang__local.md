---
qid: ing_8b18d5c36c__faang__local
question: 'Explain: Warm Standby Solution: — Cloud Disaster Recovery Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 498
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:07:37-05:00'
sources: []
---

**Warm‑Standby in Cloud Disaster Recovery**

| Step | What to do |
|------|------------|
| **Clarify** | A warm‑standby DR plan keeps a duplicate environment (compute, storage, networking) running at lower capacity and cost than production. The goal is rapid recovery with minimal data loss while keeping costs manageable. Assume we’re on a public cloud (AWS/GCP/Azure), need sub‑hour RTO, and 1‑day RPO. |
| **Approach** | 1️⃣ Deploy an identical infrastructure stack in another region or AZ. 2️⃣ Use shared storage (EFS/Cloud Storage) with cross‑region replication to keep data current. 3️⃣ Run services at reduced scale (e.g., fewer instances, lower instance types). 4️⃣ Automate failover via DNS or load balancer health checks. 5️⃣ Periodically test switchover and rollback scripts. |
| **Depth** | *Infrastructure*: Terraform/CloudFormation to create VPCs, subnets, SGs, and auto‑scaling groups. *Data sync*: Use managed replication (RDS read replicas, S3 cross‑region). *Failover*: Route53 latency‑based routing or Azure Traffic Manager with health probes. *Cost*: Pay for idle compute (~20–30 % of prod) plus storage/replication; still cheaper than a hot standby. Complexity: O(1) to spin up, O(log N) for scaling, but requires careful state sync and monitoring. |
| **Edge Cases** | • Network partitions between regions → use split‑brain detection. <br>• Data consistency gaps if replication lags beyond RPO. <br>• Application state (e.g., in‑memory caches) lost on failover; mitigate with external cache (Redis, Cloud Memorystore). |
| **Optimize & Communicate** | • Use serverless functions for health checks to reduce overhead. <br>• Implement automated rollback pipelines. <br>Explain trade‑offs: warm‑standby reduces cost vs. hot‑standby but increases RTO/RPO; fits budgets where 1‑hour downtime is acceptable. Highlight that the solution scales with traffic spikes by auto‑scaling during failover, ensuring performance once production resumes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
