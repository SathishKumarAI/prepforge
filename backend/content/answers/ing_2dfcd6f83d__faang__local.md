---
qid: ing_2dfcd6f83d__faang__local
question: 'Explain: Merge Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 430
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:30:25-05:00'
sources: []
---

**Merge Replication – A Quick FAANG‑style Overview**

| Step | What I’d say |
|------|--------------|
| **Clarify** | “You want a two‑way sync of data across multiple DB servers, right? We’ll assume each node is an SQL Server instance and that conflicts can happen when the same row changes on different sites.” |
| **Approach** | 1. **Capture changes** with change tables (row‑level logs). <br>2. **Distribute** these changes via a *publisher* to all *subscribers*. <br>3. On each subscriber, apply incoming changes and record local edits in its own log. <br>4. When a node reconnects, run a *merge* that reconciles both logs, resolves conflicts (last‑writer‑wins or custom logic), and updates the base tables. |
| **Depth** | • Change data is stored in hidden “merge” tables; each row gets an operation type (INSERT/UPDATE/DELETE) and a unique ID. <br>• The merge engine runs as a scheduled job, scanning logs for pending changes. <br>• Conflict resolution can be user‑defined via *conflict detection functions* or built‑in policies. <br>• Complexity: O(n) per replication cycle (n = number of changed rows). |
| **Edge Cases** | • Network partitions → duplicate change IDs prevent re‑application.<br>• Simultaneous deletes/updates on same key → conflict triggers user logic.<br>• Large data sets → partitioned logs or incremental sync to avoid timeouts. |
| **Optimize & Communicate** | “We can shard the merge logs, use CDC (Change Data Capture) for lighter footprints, and push conflict detection to the application layer for business‑specific rules.” I’d wrap up by highlighting that merge replication gives strong consistency with eventual sync, perfect for distributed applications like a global e‑commerce catalog.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
