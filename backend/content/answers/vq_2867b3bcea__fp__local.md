---
qid: vq_2867b3bcea__fp__local
question: How can get SQL* Loader to commit only at the end of the load file?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 439
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:27:43-05:00'
sources: []
---

When you use **SQL\*Loader** each row is treated as a separate *transaction* by default.  
The loader keeps an internal “batch” buffer; when it reaches the batch‑size limit (or
the file ends) it issues a `COMMIT`.  This guarantees that if the load stops early,
any rows already written are preserved, and it also keeps memory usage bounded.

If you want *one* commit for the entire file you must disable this implicit
committing.  
The only way to do that is to tell the loader that **every row belongs to the same
transaction**:

```sql
OPTIONS (SKIP=0, DIRECT=TRUE) -- DIRECT reduces overhead but is optional
LOAD DATA
INFILE 'data.csv'
BADFILE  'data.bad'
DISCARDFILE 'data.dsc'
APPEND INTO TABLE mytable
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
TRAILING NULLCOLS
(
   col1,
   col2,
   ...
)
```

Add the clause:

```sql
SET AUTOCOMMIT OFF;
```

or, more explicitly, use a *control file* with

```sql
INSERT /*+ APPEND */ INTO mytable VALUES (:col1, :col2, ...);
```

and run SQL\*Loader **without** the `COMMIT` keyword in the control file.  
In this mode the loader opens one transaction at the start of the load and
commits only when it reaches EOF (or you issue a manual `COMMIT`).  

The deeper principle is *transaction granularity*: by shifting from row‑level to
file‑level transactions, you trade immediate durability for lower I/O overhead
and atomicity across the whole dataset.  A non‑obvious insight: enabling **direct
mode** (`DIRECT=TRUE`) automatically keeps a single transaction open, so
combining direct mode with `SET AUTOCOMMIT OFF` guarantees one final commit,
even for very large files.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
