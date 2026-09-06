---
qid: vq_8cdd79e941__faang__local
question: How does one use SQL* Loader?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 527
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:21:54-05:00'
sources: []
---

**Clarify**  
> *“How does one use SQL\*Loader?”*  
We’re asked for a concise walkthrough of the tool that bulk‑loads flat files into Oracle tables. I’ll assume we have an existing table, a delimited text file, and access to the database’s OS shell.

**Approach**  
1. **Create a control file (`*.ctl`)** – maps columns to fields, specifies delimiters, data types, and optional actions (e.g., `WHEN` clauses).  
2. **Prepare the data file** – ensure proper quoting/escaping per the control file’s `FIELDS TERMINATED BY`.  
3. **Run SQL\*Loader** from the OS: `sqlldr userid=usr/pwd@db control=myfile.ctl log=load.log bad=bad.log`.  
4. **Verify** – check the log for errors, then query the table.

**Depth**  
- **Control file syntax**:  
  ```sql
  LOAD DATA
  INFILE 'data.txt'
  INTO TABLE employees
  FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
  (emp_id   INTEGER EXTERNAL,
   name     CHAR(50),
   hire_date DATE "YYYY-MM-DD")
  ```
- **Data types**: `INTEGER`, `CHAR`, `DATE` with format masks.  
- **Error handling**: `BADFILE` for rows that fail validation, `DISCARDFILE` for rows that exceed table constraints.  
- **Performance**: use `DIRECT=TRUE` (bypass SQL*Loader’s buffer) for large loads; ensure the table has a primary key or unique index.

**Edge Cases**  
- Empty lines → skip with `SKIP=1`.  
- Mismatched column counts → rows go to bad file.  
- Large files → split into smaller chunks or use parallel loaders (`PARALLEL=TRUE`).  
- Character set mismatches → specify `CHARACTERSET`.

**Optimize & Communicate**  
Explain trade‑offs: `DIRECT=TRUE` is faster but requires a direct path and may lock the table; batch mode is safer for small loads. Mention that modern Oracle recommends *External Tables* or *Data Pump* for more complex ETL, but SQL\*Loader remains the go‑to for legacy bulk imports. Conclude by highlighting logging and error recovery as key to maintain data integrity during production loads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
