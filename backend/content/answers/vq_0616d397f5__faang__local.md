---
qid: vq_0616d397f5__faang__local
question: Describe the process of setting up disaster recovery for ADLS ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 588
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:55:50-05:00'
sources: []
---

**Clarify**  
You’re asking how to design a *disaster‑recovery (DR)* strategy for Azure Data Lake Storage Gen2 (ADLS Gen2). Key assumptions: we have multiple workloads, require **RPO ≤ 4 h** and **RTO < 1 h**, data is tiered into hot/ cool/ archive, and the primary region is `eastus`. We also need to respect compliance (e.g., GDPR) and cost constraints.

**Approach**  
1. **Identify critical assets & SLAs** – catalog datasets, retention periods, and required recovery times.  
2. **Choose DR model** – *active‑passive* with geo‑replication or *active‑active* multi‑region setup.  
3. **Implement replication** – configure Azure Storage’s built‑in cross‑region replication (CRR) for hot tier; use Azure Data Factory (ADF) pipelines to copy cool/archive tiers on a schedule.  
4. **Versioning & snapshots** – enable soft delete and immutable blob retention for auditability.  
5. **Failover automation** – create an ARM template or Terraform module that swaps DNS/ADLS endpoints, updates ADF linked services, and re‑activates pipelines.  
6. **Testing & monitoring** – run quarterly DR drills; set up alerts on replication lag via Azure Monitor.

**Depth**  
- *CRR* copies every write to the secondary region in near real‑time (≤ 1 min). It’s free for hot tier and incurs read costs at the replica.  
- ADF copy activities for cool/archive can be scheduled nightly; use `Copy Activity` with incremental load via `snapshot time`.  
- Immutable retention protects against ransomware, but requires a separate policy per container.  
- Failover script updates the ADLS account’s endpoint in downstream services and verifies connectivity before resuming traffic.

**Edge Cases**  
- Network partitions: CRR may queue writes; monitor queue depth.  
- Schema changes: ensure ADF pipelines re‑discover schema via `Schema Drift`.  
- GDPR “right to be forgotten”: enforce deletion across replicas immediately.

**Optimize & Communicate**  
- **Cost**: Use tiered replication only for hot data; archive copies on a 24 h schedule reduce egress.  
- **Performance**: Parallelize ADF copy tasks with `maxConcurrentCopies`.  
- **Narration**: Present the DR plan as a *policy‑driven workflow*—“If primary region fails, automatically redirect traffic to the secondary, run integrity checks, and resume pipelines.” This shows you’ve mapped business impact to technical controls, satisfying FAANG interviewers’ focus on structured problem solving, clear communication, and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
