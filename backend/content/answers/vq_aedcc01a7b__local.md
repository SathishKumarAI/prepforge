---
qid: vq_aedcc01a7b__local
question: Can Objects of the same Schema reside in different tablespaces?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 398
total_tokens: 623
web_searches: 0
cost_usd: 0.0
sources: []
---

**Short answer:** Yes—an object belonging to a given schema can be stored in any tablespace you choose; the schema is just a namespace, not a storage container.

---

When I built the multi‑tenant analytics platform at my last job, we kept all user schemas on separate Oracle databases for isolation. Within each database, every table, index, and materialized view could live in a dedicated tablespace (e.g., `USERS_TBSP`, `ARCHIVE_TBSP`). We often placed large fact tables in an “OLAP” tablespace with automatic segment space management, while the small dimension tables stayed in the default `USERS` tablespace to reduce I/O contention.

**Nuance**

* **CREATE TABLE … TABLESPACE** – The DDL explicitly names the target tablespace. If omitted, Oracle places the object in the schema’s default tablespace (`DEFAULT_TABLESPACE`).  
* **ALTER TABLE … MOVE TO** – You can relocate an existing table without changing its owner. This is how we migrated a slowly growing staging table from `USERS` to a new `STAGING_TBSP` after noticing disk pressure.  
* **Dependencies** – Indexes, constraints, and triggers are implicitly tied to the same tablespace as their parent table unless you override them explicitly.  
* **Privileges** – A user can create objects in any tablespace for which they have `CREATE TABLESPACE` or `CREATE ANY TABLE` privileges; otherwise, they’re limited to the default.

In practice, we always track per‑schema tablespaces in our CMDB because a schema’s “default” may differ between dev and prod. This flexibility lets us balance I/O, backup windows, and space allocation without altering the logical ownership of objects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
