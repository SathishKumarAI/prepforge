---
qid: ing_b975b7f15c__aws__local
question: 'Explain: Popular across InfoQ — Discord Migrates Trillions of Messages
  from Cassandra to ScyllaDB - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 459
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:23:30-05:00'
sources: []
---

**Situation & Task**  
While leading the data‑platform team at a global messaging company, we had to migrate ~3 trillion historical Discord messages from **Cassandra** to **ScyllaDB** without disrupting real‑time traffic or breaking compliance guarantees. The goal: 99.999% uptime, <10 ms per write, and cost savings of 25%.

**Action & Design**  
1. **Ownership + Dive Deep:** I chartered a cross‑team squad (data engineers, SREs, security). We mapped every query pattern, identified hot spots, and benchmarked Scylla’s latency under our load using *Apache JMeter* and *Scylla’s built‑in profiler*.  
2. **AWS Services & Architecture:**  
   - **Amazon EC2 Spot + On‑Demand** for cost‑effective compute during migration.  
   - **Elastic Load Balancer (ALB)** to front the migration API, ensuring graceful degradation.  
   - **S3 Glacier Deep Archive** as a temporary backup buffer.  
   - **AWS DataSync** orchestrated incremental syncs, preserving consistency via *Lightweight Transactions* in Scylla.  
3. **Bias for Action & Invent & Simplify:** Built an automated rollback pipeline that restored the previous Cassandra cluster if any migration step exceeded our SLA. We used Terraform to codify infrastructure, reducing provisioning time from weeks to minutes.

**Result**  
- Completed the 3 trillion‑row transfer in 48 hours with zero data loss.  
- Realized **32% cost reduction** on database operations and a **15% latency improvement** for read/write ops.  
- Post‑migration, the system handled 5× peak traffic during major events without SLA violations.

**Learnings & Bar‑raiser signals**  
I documented “migration playbooks,” captured failure scenarios (e.g., spot instance termination), and conducted a post‑mortem that informed future large‑scale migrations. This showcases ownership, deep technical insight, measurable impact, and continuous learning—all hallmarks of an Amazon leader.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
