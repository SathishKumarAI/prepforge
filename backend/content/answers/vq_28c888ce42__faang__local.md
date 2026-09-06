---
qid: vq_28c888ce42__faang__local
question: How do you manage data lifecycle policies in ADLS?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 485
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:03:13-05:00'
sources: []
---

**Clarify**  
We’re asked how to enforce and monitor *data‑lifecycle* (ingest → archive → delete) in Azure Data Lake Storage Gen2 (ADLS).  
Assumptions:  
1. We own a single ADLS account with multiple containers.  
2. Policies must be audit‑ready, cost‑aware, and support both hot and cool tiers.  
3. Compliance requires retention rules that cannot be overridden.

**Approach**  
1. **Catalog metadata** – use Azure Purview or Data Catalog to map file ages.  
2. **Lifecycle policies** – configure tiering/expiry rules per container via the REST API or PowerShell.  
3. **Automation & monitoring** – deploy Azure Functions that trigger on Storage Events, validate policy compliance, and log violations.  
4. **Governance** – use Access Control (RBAC) + Data‑Lake Gen2 hierarchical namespace to lock files after a retention period.

**Depth**  
- *Tiering*: `tier: Cool` for 30–90 days, then `Archive`. Cost drops from ~$0.02/GB/mo to ~$0.0015/GB/mo.  
- *Expiry*: set `expireAfterDays = 365`; files older than a year are deleted automatically.  
- *Event‑driven cleanup*: an Azure Function reads the event payload, checks file timestamps, and deletes or moves items. Complexity: O(1) per event; overall linear to the number of events.  
- *Audit*: all actions written to Log Analytics; alerts on policy violations.

**Edge Cases**  
- Files with no last‑modified metadata → treat as “cold” and delete after a shorter window.  
- Concurrent writes during tiering → lock via `Lease` API to avoid race conditions.  
- Cross‑region replication delays could postpone deletion; handle with compensating logic.

**Optimize & Communicate**  
- Batch deletions in Azure Data Factory pipelines for large volumes, reducing Function invocations.  
- Expose a single policy YAML file per container for versioning and rollback.  
- Present the design as a *policy‑as‑code* stack: Terraform → ADLS lifecycle → Function → Log Analytics, ensuring reproducibility and auditability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
