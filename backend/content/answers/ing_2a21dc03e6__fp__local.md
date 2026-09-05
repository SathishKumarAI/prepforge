---
qid: ing_2a21dc03e6__fp__local
question: What's the difference between replication & backup?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 355
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:34:27-05:00'
sources: []
---

**Replication vs. Backup – a principled distinction**

At its core, both techniques aim to preserve data, but they address *different failure modes* and impose distinct *temporal constraints*.  
1. **Failure model** – Replication treats the system as a *distributed queue*: any node can fail at any time; other nodes must immediately assume responsibility. Backup assumes an *offline or long‑duration outage*: data is frozen, then copied elsewhere for later restoration.  
2. **Consistency & latency** – Replication enforces *strong consistency* (or eventual consistency) by propagating every write to all replicas in real time, incurring network traffic and latency. Backups can batch writes; they tolerate higher latency because the goal is durability, not immediacy.  
3. **Recovery semantics** – With replication you recover “as if nothing happened”: a failed node simply stops receiving updates; its data is still available on other nodes. A backup restores to a *point‑in‑time* snapshot; any changes after that point are lost unless incremental logs are also kept.

**Non‑obvious insight:**  
Replication’s cost grows *linearly with the number of replicas*, but it eliminates *write amplification* during recovery—there is no need to replay logs. Backups, while cheaper in normal operation, incur a *write‑back* penalty when restoring: every log entry must be re‑applied, which can dominate recovery time for large datasets. Thus, choosing between them often hinges on whether you value instantaneous availability (replication) or economical storage and lower daily overhead (backup).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
