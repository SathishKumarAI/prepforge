---
qid: vq_069baf5b3f__faang__local
question: Can one read/write files from PL/SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 482
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:55:59-05:00'
sources: []
---

**Clarify**  
The interviewer asks whether PL/SQL can perform file I/O. Assume we’re targeting Oracle’s standard distribution (not proprietary extensions) and that the goal is simple read/write of flat files on the server host.

**Approach**  
1. Confirm if external tables or UTL_FILE are available.  
2. Outline how to use UTL_FILE for reading/writing text files.  
3. Mention alternatives: DBMS_LOB, external tables, and Java stored procedures if binary data is needed.

**Depth**  
- **UTL_FILE** resides in the `SYS` schema; it reads/writes files from directories defined by *directory objects*.  
  ```sql
  CREATE OR REPLACE DIRECTORY my_dir AS '/opt/oracle/files';
  GRANT READ, WRITE ON DIRECTORY my_dir TO app_user;
  ```
  In PL/SQL:
  ```plsql
  DECLARE
    f UTL_FILE.FILE_TYPE := UTL_FILE.FOPEN('MY_DIR','data.txt','W');
  BEGIN
    UTL_FILE.PUT_LINE(f,'Hello World');
    UTL_FILE.FCLOSE(f);
  END;
  ```
- For binary blobs use `DBMS_LOB` with `UTL_FILE`.  
- External tables can read/write CSV/TSV without procedural code.  
- If OS-level access is required, Java stored procedures or Oracle’s *External Table* with the `ORACLE_DIR` feature are options.

**Edge Cases**  
- Permissions: directory object must be granted to the session user.  
- File size limits (UTL_FILE has a 32k line limit; use `UTL_FILE.FPUT` for larger chunks).  
- Path traversal attacks if file names come from untrusted input—sanitize or restrict to a known directory.

**Optimize & Communicate**  
Highlight that UTL_FILE is straightforward but limited; external tables scale better for large datasets. Mention performance trade‑offs: PL/SQL I/O is synchronous and can block, whereas external tables offload parsing to the loader engine. Conclude with best practice: use UTL_FILE for simple scripts, switch to external tables or Java when handling big binary blobs or needing asynchronous processing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
