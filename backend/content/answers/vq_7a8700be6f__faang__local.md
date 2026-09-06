---
qid: vq_7a8700be6f__faang__local
question: Can a Tablespace hold objects from different schemas?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 423
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:18:25-05:00'
sources: []
---

**Clarify**  
We’re asked whether a *tablespace* can contain database objects that belong to multiple user schemas.  
Assumptions:  
1. Oracle‑style tablespaces (single‑owner or multi‑tenant).  
2. “Objects” means tables, indexes, materialized views, etc.  

**Approach**  
Explain the definition of a tablespace, ownership rules, and then address the two scenarios (stand‑alone vs. multitenant).  

**Depth**  
A tablespace is a physical storage unit – a file or set of files. In a *single‑owner* database each tablespace can only be owned by one user; all objects stored in that tablespace must belong to that owner. Oracle enforces this at creation time: `CREATE TABLESPACE ...` with an `OWNED BY` clause.  

In a *multitenant* (CDB/PDB) environment, the CDB owns the tablespaces and any PDB can create objects in them. Thus a single tablespace can hold objects from many schemas inside the same PDB, or even across different PDBs if the tablespace is shared (e.g., `SHARED TABLESPACE`).  

**Edge Cases**  
- Attempting to create an object in a tablespace owned by another user throws ORA‑01741.  
- In CDB mode, cross‑PDB sharing requires `ALTER DATABASE` to mark the tablespace as *shared*.  
- Privileges: users must have `CREATE TABLE` on that tablespace; otherwise they can’t use it even if it’s shared.  

**Optimize & Communicate**  
Summarize succinctly: “In a single‑owner DB, no—tablespaces are per schema. In a multitenant or shared‑tablespace setup, yes, multiple schemas can share the same tablespace.” This shows clear understanding, structured reasoning, and awareness of edge conditions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
