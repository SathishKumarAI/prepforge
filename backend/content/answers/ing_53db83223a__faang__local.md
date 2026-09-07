---
qid: ing_53db83223a__faang__local
question: 'Explain: F9: Tenant cross-contamination via shared eval infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 464
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:59:07-05:00'
sources: []
---

**Clarify**  
The issue is that when multiple tenants (customers or teams) share the same evaluation platform—e.g., a cloud‑based model‑testing service—their data, metrics, or model artifacts can leak into each other’s runs. I’d confirm whether the infrastructure stores logs, checkpoints, or intermediate tensors in shared storage and if isolation boundaries are enforced at process or container level.

**Approach**  
1. Identify shared resources (filesystems, databases, message queues).  
2. Verify access controls and namespace separation.  
3. Examine how evaluation jobs are scheduled—do they run in isolated containers/VMs?  
4. Audit logs for cross‑tenant data references.

**Depth**  
- **File system isolation:** Use per‑tenant directories with ACLs; employ encrypted volumes so that even if a process reads outside its dir, decryption fails.  
- **Container isolation:** Run each job in a dedicated container (Docker/K8s) with user namespaces and read‑only mounts for shared libs.  
- **Metadata separation:** Store metrics in tenant‑specific tables or key prefixes; enforce strict IAM policies on query endpoints.  
- **Audit trail:** Log tenant ID, job ID, and resource paths; monitor for anomalous access patterns.  
Complexity: O(1) per job for isolation checks; overall overhead scales with the number of tenants but is amortized by container orchestration.

**Edge Cases**  
- A malicious tenant could try to guess another’s file path—prevent via randomized bucket names or UUIDs.  
- Shared caches (e.g., GPU memory) could inadvertently expose tensor values—disable cross‑tenant cache sharing.  
- Backup/restore processes might mix data—ensure tenant tagging in snapshots.

**Optimize & Communicate**  
Start with a lightweight per‑tenant namespace; once proven, add encryption-at-rest for sensitive artifacts. Explain to stakeholders that the trade‑off is minimal latency overhead versus preventing costly data breaches and regulatory violations. Highlight that this design scales linearly with tenants and aligns with multi‑tenant SaaS best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
