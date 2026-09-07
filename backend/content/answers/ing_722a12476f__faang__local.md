---
qid: ing_722a12476f__faang__local
question: What is the difference between backup and disaster recovery?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 560
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:09:05-05:00'
sources: []
---

**Clarify**  
The interviewer wants to gauge your grasp of data‑protection concepts in ML pipelines. *Backup* refers to routine, scheduled snapshots of data/models; *disaster recovery (DR)* is the strategy for restoring service after a catastrophic event. I’ll assume they’re talking about ML assets (datasets, model checkpoints, training logs) and infrastructure.

**Approach**  
1. Define each term.  
2. Contrast scope, frequency, target, and recovery objectives.  
3. Highlight typical tools/techniques used in ML contexts.  
4. Mention how they fit into a broader data‑engineering stack (e.g., CI/CD for models).

**Depth**  

| Aspect | Backup | Disaster Recovery |
|--------|--------|-------------------|
| **Purpose** | Preserve recent state for point‑in‑time restores or rollbacks. | Re‑establish business continuity after loss of primary site or catastrophic failure. |
| **Frequency** | Daily/weekly snapshots, incremental or differential. | Triggered by incidents; may involve offline replicas or cloud regions. |
| **Target** | Specific files, DB tables, model checkpoints, config. | Full stack: data lake, feature store, compute clusters, networking. |
| **Recovery Time Objective (RTO)** | Minutes to hours—restore a specific version. | Hours to days—bring the entire pipeline back online. |
| **Recovery Point Objective (RPO)** | Seconds to minutes—latest snapshot. | Larger gaps acceptable; focus on minimal data loss. |
| **Common Tools** | `rsync`, cloud object storage lifecycle, Delta Lake snapshots. | Multi‑region replication, Kubernetes StatefulSets with persistent volumes, AWS DR sites or Azure Site Recovery. |

In ML, a backup might be a new checkpoint every 30 min to enable model rollback; DR would involve spinning up an identical training cluster in another region if the primary data center goes offline.

**Edge Cases**  
- *Data drift*: backups may freeze a stale distribution—need periodic validation.  
- *Immutable storage*: once backed up, cannot be altered; ensure versioning.  
- *Compliance*: certain regulations mandate DR plans with specific RTO/RPO windows.

**Optimize & Communicate**  
I’d emphasize that backup is a **preventive** layer while DR is an **emergency response** layer. Both should be automated and tested (e.g., DR drills). Highlight trade‑offs: frequent backups increase storage costs but reduce RPO; aggressive DR strategies raise complexity. This structured answer demonstrates clear reasoning, technical depth, and awareness of operational constraints—key for FAANG scoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
