---
qid: vq_2124d2f59e__faang__local
question: What is SYSTEM Tablespace and when is it created?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 381
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:01:15-05:00'
sources: []
---

**Clarify**  
The question asks about the *SYSTEM tablespace* in an Oracle database: what it represents and under what circumstances it is created. I’ll assume we’re dealing with a standard Oracle RDBMS installation, not a custom or cloud‑managed variant.

**Approach**  
1. Define “tablespace” in Oracle terms.  
2. Explain the special role of SYSTEM.  
3. Describe when/why Oracle creates it during database initialization.

**Depth**  

| Concept | Detail |
|---------|--------|
| **Tablespace** | A logical storage unit that groups data files; used to organize objects (tables, indexes). |
| **SYSTEM tablespace** | The default tablespace for all *data dictionary* objects (metadata about users, privileges, object definitions, etc.). It also holds some temporary system data. |
| **Creation** | Oracle creates SYSTEM automatically when `CREATE DATABASE` is executed. The database initialization file (`init.ora`) or SPFILE specifies the physical data files that belong to SYSTEM. During this step, the Data Dictionary and all core system objects are built inside it. |

**Edge Cases**  
- If a database is cloned or restored from backup, SYSTEM exists already; no recreation occurs unless you rebuild the dictionary (rare).  
- In container databases (CDB/PDB), each PDB has its own SYSTEM tablespace; the root CDB also has one.  

**Optimize & Communicate**  
I’d emphasize that SYSTEM is *not* a place for user data—doing so can degrade performance and complicate backup/recovery. Instead, users should create dedicated tablespaces for their objects. This answer balances technical accuracy with concise communication, aligning with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
