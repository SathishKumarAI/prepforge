---
qid: vq_2867b3bcea__faang__local
question: How can get SQL* Loader to commit only at the end of the load file?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 533
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:03:06-05:00'
sources: []
---

**Clarify**

You want *SQL\*Loader* to buffer all rows from a data file and issue a single `COMMIT` after the entire file has been processed, rather than committing after each row or batch.

Assumptions:  
- You’re loading into an Oracle table.  
- The load is run in **direct mode** (faster).  
- No error handling beyond a simple rollback on failure.

---

**Approach**

1. Use the `OPTIONS` clause to set `SKIP=0`.  
2. Specify `commit` behavior via the `control file`:  
   - `COMMITCOUNT 0` forces one commit at end of load.  
3. Ensure you’re in **direct mode** (`DIRECT=TRUE`) so Oracle buffers until completion.

---

**Depth**

```sql
OPTIONS (SKIP=0, DIRECT=TRUE)
LOAD DATA 
INFILE 'data.txt'
BADFILE 'data.bad' LOGFILE 'data.log'
INSERT INTO target_table
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
(
   col1,
   col2,
   ...
) 
COMMITCOUNT 0;
```

- `COMMITCOUNT 0` tells SQL*Loader to commit only once after the whole file.  
- In *direct mode*, Oracle holds all rows in memory until finished; if you hit a constraint violation, the entire load rolls back.

**Complexity & Trade‑offs**

| Mode | Commit Behavior | Performance |
|------|-----------------|-------------|
| Direct + `COMMITCOUNT 0` | One commit at end | Highest speed but large memory usage |
| Conventional + `COMMITCOUNT 1` | Commit per row | Lower memory, slower |
| `COMMITCOUNT N` | Commit every N rows | Balances memory and speed |

---

**Edge Cases**

- **Large files** may exhaust memory; monitor `SQL*Loader`’s buffer size (`DIRECT=TRUE`).  
- **Constraint violations** cause full rollback—ensure data is pre‑validated.  
- **Bad file handling**: with a single commit, any error aborts all rows.

---

**Optimize & Communicate**

If memory becomes an issue, switch to *conventional mode* and set `COMMITCOUNT` to a reasonable batch size (e.g., 10 000). Explain this trade‑off to stakeholders: “We can achieve one commit for atomicity but must be prepared for higher RAM usage; otherwise we’ll batch commits to keep memory bounded.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
