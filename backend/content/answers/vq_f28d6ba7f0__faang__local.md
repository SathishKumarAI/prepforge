---
qid: vq_f28d6ba7f0__faang__local
question: Mention what are the different modes of Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 454
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:42:11-05:00'
sources: []
---

**Clarify**  
The question asks about *Hive execution modes*.  I’ll assume it refers to how Hive runs queries on Hadoop, not the storage formats or UI modes.

**Approach**  
1. List each mode (MapReduce, Tez, Spark).  
2. Briefly explain what they are and when they’re used.  
3. Note any configuration knobs that enable/disable them.

**Depth**  

| Mode | Core Idea | Typical Use‑Case | Trade‑offs |
|------|-----------|------------------|------------|
| **MapReduce (MR)** | Classic Hadoop job – map, shuffle, reduce phases. | Legacy workloads, very large data sets, when compatibility matters. | High latency, more I/O, slower for iterative jobs. |
| **Apache Tez** | Directed‑acyclic‑graph (DAG) execution engine built on YARN; tasks run as “tasks” instead of MR jobs. | OLAP queries, joins, subqueries. | Faster than MR, lower shuffle cost, but requires Hive 0.13+ and Tez jars. |
| **Apache Spark** | In‑memory DAG executor with Catalyst optimizer. | Interactive analytics, ML pipelines, streaming. | Requires Spark cluster; memory overhead; best for iterative workloads. |

*Enabling/Disabling*:  
- `hive.execution.engine` (`mr`, `tez`, `spark`) sets the default.  
- For specific queries: `SET hive.execution.engine=tez;`

**Edge Cases**  
- Some UDFs or legacy Hive features only work with MR.  
- Tez may not support all Hive extensions (e.g., some complex UDTFs).  
- Spark mode needs a compatible Spark cluster; otherwise fallback to MR.

**Optimize & Communicate**  
When answering, I’d start by confirming the context (e.g., “Are we talking about query execution or UI modes?”), then present the table for quick comparison. Mention that choosing a mode depends on data size, latency requirements, and existing infrastructure, which is often the interviewer's angle to probe trade‑off thinking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
