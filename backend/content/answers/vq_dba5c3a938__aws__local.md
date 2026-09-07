---
qid: vq_dba5c3a938__aws__local
question: WHAT HAPPENS WHEN A TRANSACTION IS ROLLED BACK?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 457
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:18:08-05:00'
sources: []
---

**What happens when a transaction is rolled back?**

During my stint at **AWS DynamoDB** I was tasked with designing an “undo” feature for our global‑write service that handled millions of writes per second. The requirement was to guarantee *exactly‑once* semantics even if the application crashed mid‑transaction.

> **Situation** – A client’s batch update failed after partially persisting data across two shards.
> **Task** – Ensure the system could revert to a consistent state without manual intervention.
> **Action** – I leveraged DynamoDB’s transactional APIs (BEGIN TRANSACTION, COMMIT/ROLLBACK) and added an *audit table* that logged every write intent. If a transaction failed, the rollback engine automatically deleted all rows written in that transaction and restored any pre‑existing items from the audit log.
> **Result** – Post‑deployment, we saw a **99.999% consistency rate** for client writes and reduced manual recovery effort by **70 hours/month**. The feature also cut storage costs by 12 % because we avoided duplicate “stale” records.

From a **system perspective**, a rollback in a distributed DB means:

1. All *committed* changes are atomically undone across all nodes.
2. Locks released and transaction metadata purged.
3. If the system uses *write‑ahead logs*, the log entries for that transaction are marked as aborted, so recovery can skip them.

I chose **DynamoDB Transactions** because they provide *ACID guarantees* at scale, minimal latency (sub‑millisecond), and native integration with other AWS services (Lambda, SQS). The trade‑off is a higher write cost (~$0.25 per 1 M writes) but the business value of data integrity outweighed it.

**Leadership Principles Reflected:**  
- **Ownership** – I owned the entire feature from design to deployment.  
- **Dive Deep** – Investigated low‑level transaction logs and failure modes.  
- **Deliver Results** – Quantified impact on consistency, cost, and operational effort.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
