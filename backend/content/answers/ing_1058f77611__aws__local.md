---
qid: ing_1058f77611__aws__local
question: 'Explain: Hardware Failures — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 424
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:02:11-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the design of a real‑time recommendation engine that served 2 M daily users. The system had to stay online even when any single rack failed—availability > 99.999%.  

**Action**  
I built an *active‑active* architecture across two AZs using **Amazon EC2 Auto Scaling**, **Elastic Load Balancing (ALB)**, and **Amazon RDS Aurora Serverless v2** for the transactional layer. To protect against rack‑level hardware failure I added **EC2 Spot Fleet** with diversified instance types and a *failover* script that automatically spun up replacement instances in the standby AZ within 30 s. For stateful data we used **EFS** with multi‑AZ mount targets so file metadata stayed consistent.

I also introduced a **Health Check & Self‑Healing** loop: CloudWatch alarms on EC2 CPU/Memory + RDS replication lag triggered Lambda functions that removed unhealthy nodes from the pool and provisioned fresh ones. This reduced mean time to recovery (MTTR) from 15 min (pre‑design) to < 3 min.

**Result**  
After launch, we logged zero single‑point failures during a six‑month period of heavy traffic spikes (peak 10 M concurrent requests). The system’s **uptime hit 99.9997%**, exceeding the target by 0.0004%. Cost savings from Spot Fleet were 27% vs on‑demand, while latency dropped 12 ms due to local EFS caching.

**Reflection**  
I learned that *ownership* means anticipating failure modes and building automated self‑healing, not just reactive patching. By diving deep into AWS service limits (e.g., EFS throughput per AZ) I could balance cost vs availability—an example of **Bias for Action** coupled with measured risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
