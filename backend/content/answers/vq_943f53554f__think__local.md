---
qid: vq_943f53554f__think__local
question: what is static and dynamic partition in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 465
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:03:01-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
- Confirm that “static” vs “dynamic” refers to Hive table partitioning (not Hadoop partitions).  
- Assume the reader knows basic Hive concepts: tables, columns, `PARTITIONED BY`.  
- Note that static means all partition values are supplied in the INSERT statement; dynamic means they’re inferred from data.

**2️⃣ Pick a mental model / framework**  
Think of an *INSERT* operation as a two‑step pipeline:  
1. **Partition selection** – decide which “folder” (partition) each row goes into.  
2. **Data writing** – write the row into that folder.  
Static partitioning fixes step 1 at compile time; dynamic lets Hive compute it per row.

**3️⃣ Step‑by‑step reasoning toward the answer**  
- Start with a `CREATE TABLE … PARTITIONED BY (year INT, month INT)` example.  
- Show how a static insert (`INSERT INTO tbl PARTITION(year=2024,month=12) SELECT …`) forces all rows to that partition.  
- Contrast with dynamic (`INSERT INTO tbl PARTITION(year, month) SELECT year, month, …`), where Hive scans the source and writes each row into its own `year=*/month=*` folder.

**4️⃣ Common traps to avoid**  
- Mixing static & dynamic in the same INSERT (only one partition spec is allowed).  
- Forgetting that dynamic partitions require the table’s *dynamic partition mode* to be enabled (`hive.exec.dynamic.partition.mode`).  
- Assuming dynamic partitions can be used for *all* columns; only partitioned columns can be dynamic.

**5️⃣ Sanity‑check & verbalize**  
Run a quick mental test: if you insert 3 rows with years 2024, 2025, 2026 and months 1–12, does the output match expectations?  
Explain that static is “hard‑coded” while dynamic is “calculated from data,” then give a concise, concrete example to reinforce the concept.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
