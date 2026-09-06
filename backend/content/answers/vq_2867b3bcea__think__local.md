---
qid: vq_2867b3bcea__think__local
question: How can get SQL* Loader to commit only at the end of the load file?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 576
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:20:19-05:00'
sources: []
---

**1. Clarify the goal and assumptions**  
- *Goal*: Ensure that a single commit occurs after all rows in an external data file have been processed, rather than committing after each row or batch.  
- *Assumptions*:  
  - Using Oracle SQL*Loader (v10+).  
  - The loader is invoked from the command line or via a control file.  
  - No external triggers or PL/SQL blocks are interfering with commit behavior.

**2. Mental model / framework**  
- SQL*Loader supports three transaction modes: `REPLACE`, `INSERT`, and `APPEND`.  
- Commit frequency can be controlled by the `commit` keyword in the control file (`commit on rows n`).  
- Alternatively, the command‐line option `-s` (silent) or `-i` (ignore errors) influences error handling but not commit strategy.  
- The default is to commit after every 1,000 rows; we need to override this.

**3. Step‑by‑step reasoning**  
a. Open the control file (`*.ctl`).  
b. Add or modify the `OPTIONS` clause: `options (commit on rows 1000000)` – set a very large row count so that the loader effectively waits until the end.  
c. Alternatively, use `commit on rows 1` and then specify `-s`? No—this would commit after each row; not desired.  
d. Ensure no `SET DEFINE OFF` or `TRUNCATE TABLE` statements are present that could implicitly start a new transaction.  
e. Run the loader with `sqlldr userid=… control=… log=… bad=…`. The loader will open one transaction, load all rows, then commit once at the end.

**4. Common traps to avoid**  
- Forgetting that `commit on rows` applies *per* table; if multiple tables are loaded, each gets its own commit rule.  
- Using `sqlldr ... commit` command‑line switch (does not exist).  
- Relying on `set sqlblanklines off`; unrelated but can cause syntax errors in the control file.  
- Not checking the log for “COMMIT” entries; if they appear before end, a smaller row count was used.

**5. Sanity‑check & communication**  
- Inspect the log: look for a single `COMMIT` after all rows are processed.  
- Verify transaction isolation by querying `v$transaction` before and after load to confirm only one entry appears.  
- Communicate clearly that setting `commit on rows <very large number>` in the control file is the standard way to commit only at the end of the load file.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
