---
qid: vq_201ed78038__star__local
question: Talk about the different tombstone markers used for deletion purpose in
  Hbase?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 368
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:50:49-05:00'
sources: []
---

**Situation:**  
During a migration of our customer analytics pipeline from Cassandra to HBase, we noticed that the “soft delete” flag on user profiles was not being respected. The team needed to purge old records while keeping an audit trail for compliance.

**Task:**  
Implement and test the correct tombstone marker strategy in HBase so that deletions were logical, recoverable, and did not bloat storage or slow down scans.

**Action:**  
I reviewed HBase’s delete semantics: a single-column Delete creates a *tombstone* with a special “delete” marker; a DeleteFamily marks an entire column family, and DeleteRow marks the whole row. I designed a three-tier approach:
1. **Column-level tombstones** for fine-grained soft deletes (e.g., `profile_status = 'deleted'`) using `Delete` on that qualifier.
2. **Family-level tombstones** to flag all sensitive fields when a user opts out, implemented via `DeleteFamily`.
3. **Row-level tombstones** for full account removal, executed with `DeleteRow`.

I added a retention policy that triggers compaction every 24 hrs and used HBase’s `tombstone` TTL settings to automatically purge after 30 days. I also updated our monitoring dashboards to alert when the tombstone count exceeded 5% of total cells.

**Result:**  
Post‑migration, query latency dropped by 35%, storage overhead from deleted rows fell below 2%, and audit logs still retained a 90‑day history. The project delivered on schedule, and I documented the strategy in our engineering playbook for future teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
