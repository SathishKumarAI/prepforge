---
qid: vq_20505d7616__faang__local
question: Can one resize tablespaces and data files?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 454
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:01:08-05:00'
sources: []
---

**Clarify**  
The question asks whether *tablespaces* (logical storage units) and their underlying *data files* can be resized while the database is running.  
Assumptions: • Oracle‑style RDBMS with tablespaces that own one or more data files.  
• “Resize” means increasing/decreasing file size, not moving to a different device.

**Approach**  
1. Verify whether each tablespace type (ASSM vs BASIC) supports online operations.  
2. Use `ALTER TABLESPACE … RESIZE` for basic tablespaces; use `ALTER DATABASE DATAFILE … RESIZE` for ASSM‑managed ones.  
3. For shrinking, ensure the file has enough free space and that no segments occupy it.

**Depth**  
- **Expanding** a data file is always online: `ALTER DATABASE DATAFILE '/path/file.dbf' RESIZE 2000M;`. Oracle allocates additional blocks without downtime.  
- **Shrinking** requires the file to be *offline* or, for ASSM tablespaces, the `ONLINE` clause with `RESIZE`. In Basic tablespace mode you must take the datafile offline (`ALTER DATABASE DATAFILE ... OFFLINE`) before shrinking.  
- Tablespaces themselves can’t be “resized” directly; only their constituent files are altered.  
- Complexity: O(1) system‑level operation, but disk I/O may be significant during expansion.

**Edge Cases**  
- Attempting to shrink a file that still contains data will error out (`ORA-01412`).  
- Online shrinking is not supported for tablespaces using automatic segment space management in some DBMS versions.  
- Disk full or lack of free blocks causes failure.

**Optimize & Communicate**  
Explain the trade‑off: expanding online keeps service uninterrupted; shrinking may require downtime unless ASSM allows online shrink. Suggest pre‑check scripts to confirm free space and segment distribution before resizing, and advise taking backups if large changes are needed. This shows structured reasoning, technical depth, and practical communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
