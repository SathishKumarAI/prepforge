---
qid: vq_ece6ed7d1c__star__local
question: What are ‘inserted’ and ‘deleted’ tables (aka. magic tables)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 357
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:25:54-05:00'
sources: []
---

**Situation:**  
In a recent migration of our sales data warehouse from on‑prem SQL Server to Azure Synapse, we had to implement incremental loads for the `SalesOrders` fact table that were driven by change data capture (CDC). The CDC engine produced huge raw logs and our ETL process struggled with performance and correctness.

**Task:**  
I needed a reliable way to separate new rows from deleted rows in each CDC batch so that the downstream dimensional tables could be refreshed without reprocessing the entire history, while keeping the pipeline within the 4‑hour SLA.

**Action:**  
I leveraged SQL Server’s `INSERTED` and `DELETED` virtual tables inside a custom trigger on the staging table. The trigger captured every insert as a row in an `InsertedLog` table and every delete into a `DeletedLog`. By indexing these magic tables on business keys, I could run lightweight set‑based queries to upsert or tombstone records in Synapse. I also added a timestamp column and partitioning logic so that each batch processed only the relevant 12‑hour window. The trigger ran in under 2 seconds per transaction, keeping overall latency low.

**Result:**  
The incremental pipeline now processes approximately 1.8 M orders daily with <30 minutes of total lag, a 70% reduction in load time versus the previous full refresh approach. I learned that proper use of `INSERTED`/`DELETED` tables can turn an otherwise heavyweight CDC process into a lean, maintainable solution when paired with smart indexing and partitioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
