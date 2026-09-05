---
qid: vq_461b069e32__fp__local
question: How to implement incremental load in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 508
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:33:01-05:00'
sources: []
---

### Why incremental loading matters  
When a data lake grows by terabytes daily, re‑ingesting the whole source is an *inefficient* use of compute and storage. Incremental load solves the **information‑theoretic redundancy** problem: only new or changed rows carry fresh entropy. If we can detect those rows cheaply, we avoid unnecessary I/O.

### The fundamental principle  
At its core, incremental loading is a **change‑data capture (CDC) problem**. We need a *bijection* between the source state at time _t_ and the destination state at time _t+1_. This bijection can be realized by:

| Source | Destination |
|--------|-------------|
| Primary key + last‑modified timestamp | Merge‑condition in sink |

The merge operation is a **set difference**:  
`new_rows = source \ previous_source`.  
If the source provides a monotonically increasing `timestamp`, this set difference can be evaluated by a simple predicate, avoiding full scans.

### Implementation pattern in Azure Data Factory (ADF)

1. **Capture metadata**  
   - Use an *Azure Function* or *Logic App* to read the latest timestamp stored in a control table.
2. **Filter source data**  
   - In the Copy activity, set the `source query` to something like:  
     ```sql
     SELECT * FROM Sales
     WHERE LastModified > @latestTimestamp
     ```
3. **Merge into sink**  
   - Use the *Sink* “Upsert” mode (or a Stored Procedure) that merges on primary key.  
   - If using Azure Synapse, `MERGE INTO` with `WHEN MATCHED THEN UPDATE`.
4. **Persist new timestamp**  
   - After successful copy, write the maximum `LastModified` back to the control table.

### Non‑obvious insight  
Many overlook that *timestamp drift* can break idempotence: if two rows share identical timestamps and one is updated after the other, both may be missed or duplicated. The fix is to **combine timestamp with a surrogate key** in the filter (`WHERE LastModified > @latestTimestamp OR (LastModified = @latestTimestamp AND Id > @lastId)`), ensuring strict total ordering.

By grounding incremental load in set theory and information redundancy, ADF can scale without re‑processing stale data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
