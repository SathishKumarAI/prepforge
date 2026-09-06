---
qid: vq_ae5ed62cfc__faang__local
question: How many types of tables have in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 495
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:28:10-05:00'
sources: []
---

**Clarify**  
You’re asking about *Hive’s table abstractions*. I’ll assume the question refers to the major kinds of tables Hive can create (managed, external, transactional, partitioned, bucketed, etc.) rather than every possible option.

**Approach**  
1. List the core categories.  
2. For each, give a concise definition and key characteristics.  
3. Note any optional features that alter behavior (e.g., ACID support).  

**Depth**  

| Table type | Definition | Storage location | Key traits |
|------------|-------------|------------------|------------|
| **Managed (internal)** | Hive owns the data; dropping the table deletes files. | `warehouse/` (or custom) | Default, simplest lifecycle. |
| **External** | Data lives outside Hive; only metadata is stored. | Any HDFS path specified by `LOCATION`. | Dropping table removes only metadata. |
| **Transactional (ACID)** | Requires `ORC`, `INSERT/UPDATE/DELETE` support. | Must be in a transactional warehouse. | Supports ACID semantics, compaction. |
| **Partitioned** | Data split into sub‑directories by column values. | Subfolders under table location. | Improves query pruning; can be managed or external. |
| **Bucketed** | Rows distributed into buckets via hash of bucket columns. | Bucket files inside partition dirs. | Enables map-side joins, efficient sampling. |
| **External Transactional (ACID + External)** | Combines ACID with external storage. | Any path; still requires ORC & table properties. | Useful when data is shared outside Hive. |

**Edge cases**  
- A *partitioned* or *bucketed* table can be either managed or external.  
- Transactional tables require `hive.support.concurrency=true` and a transactional warehouse.  
- Bucket columns must be defined before inserting data; changing them requires rewrite.

**Optimize & communicate**  
Highlight that the “types” aren’t mutually exclusive—most tables are combinations (e.g., an external, partitioned, bucketed table). Emphasize that understanding lifecycle ownership (managed vs external) and ACID support is critical for design decisions. This structured view shows clear problem‑solving, depth, and awareness of practical trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
