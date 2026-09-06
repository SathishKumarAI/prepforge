---
qid: vq_49cfcfc81e__faang__local
question: What happens when Clustered Index is created?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 520
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:08:59-05:00'
sources: []
---

**Clarify**  
*Problem*: Explain the internal changes that occur in a database table when a clustered index is created.  
*Assumptions to confirm*: The DBMS is a typical R‑DBMS (SQL Server/MySQL InnoDB), the table is non‑empty, and we’re creating a single‑column or composite clustered key.

**Approach**  
1. Capture current data layout.  
2. Create B+Tree structure for the index keys.  
3. Re‑order rows on disk to match the tree order (physical sorting).  
4. Update metadata and page pointers.

**Depth**  

| Step | What happens | Technical detail |
|------|--------------|------------------|
| 1. Data snapshot | Table remains unchanged until rebuild starts. | Transaction log records the operation. |
| 2. B+Tree build | For each row, key value is extracted; leaf nodes hold the key + row pointer (row ID). Internal nodes contain separator keys and child pointers. | Node size = page size; fan‑out ≈ pageSize / avgKeySize. |
| 3. Physical sort | Rows are moved to new pages that follow the B+Tree order, making the data physically clustered with the key. | In SQL Server: `CREATE CLUSTERED INDEX` triggers a *rebuild* – a full table scan and write of reordered rows. |
| 4. Metadata update | System catalog records the index type (clustered), its columns, fill‑factor, etc., and marks the original heap as “non‑heap.” | Page allocation tables are updated; page chain reflects new order. |

**Edge Cases**  
- **Large tables**: rebuild may require temp space > table size.  
- **Concurrent writes**: index creation locks the table (or uses online mode) – potential deadlocks if not handled.  
- **Data types with variable length**: leaf node occupancy may vary, affecting fan‑out.

**Optimize & Communicate**  
- Use *online* rebuild options to keep the table available.  
- Pre‑allocate buffer pool or use `WITH (ONLINE = ON)` in SQL Server to reduce contention.  
- Explain that a clustered index improves range queries and join performance but can slow inserts/updates due to page splits.  

By walking through each phase, I demonstrate clear reasoning, awareness of trade‑offs, and the technical depth expected from FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
