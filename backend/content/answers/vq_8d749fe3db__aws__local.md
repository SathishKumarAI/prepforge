---
qid: vq_8d749fe3db__aws__local
question: WHAT IS A UNIQUE INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 345
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:03:02-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Ownership* – I own the data integrity; *Dive Deep* – I understand how indexes affect performance and cost.

**Situation & Task**  
In my last role, our e‑commerce catalog suffered duplicate SKU entries that broke inventory sync. I was tasked to enforce uniqueness on the `sku` column in a MySQL RDS instance without halting service.

**Action**  
I created a **unique index** (`UNIQUE KEY sku_idx (sku)`) which guarantees at the storage engine level that every `sku` value is distinct. To keep the system highly available, I used **RDS read replicas** for heavy reads and performed the index creation on the replica first, then promoted it to primary after validation. I also added a trigger to log any attempted duplicates into CloudWatch Logs for audit.

**Result**  
Post‑deployment, duplicate inserts dropped from 12% of all SKU writes to <0.01%, eliminating inventory mismatches. The read‑replica strategy kept latency under 5 ms and avoided a 2‑hour maintenance window. Cost impact was negligible (<$1/month) because the unique index only added ~10 KB to storage.

**Key Takeaway**  
A unique index is not just a constraint; it’s a data‑driven guardrail that protects business logic, scales with replicas, and keeps costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
