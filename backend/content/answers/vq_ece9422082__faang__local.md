---
qid: vq_ece9422082__faang__local
question: A CONTROL BLOCK can sometimes refer to a BASETABLE ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 465
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:41:26-05:00'
sources: []
---

**Clarify**  
The question asks whether a *Control Block* (CB) can reference a *Base Table* in the context of database internals—specifically within IBM DB2 or similar RDBMSs where CBs manage table metadata and runtime state. Confirm assumptions:  
- We’re talking about physical storage structures, not logical schemas.  
- “Refer” means holding an ID/pointer that resolves to a base table’s descriptor.

**Approach**  
1. Review the architecture of CBs (e.g., `SYSIBM.SYSINDEXES`, `SYSIBM.SYSCOLUMNS`).  
2. Identify fields that store catalog references (`TABID`, `TABLEOID`).  
3. Verify if those fields can point to a base table’s descriptor or only to derived objects like indexes/segments.

**Depth**  
In DB2, each CB contains a *Table ID* (`TABID`) and sometimes a *Base Table ID* (`BTABID`). When a view or indexed view is created, the CB’s `BTABID` points to the base table’s descriptor. This linkage allows the optimizer to traverse from the derived object back to its source for statistics and plan generation. Thus, **yes**, a CB can reference a base table via dedicated fields; it’s not merely an indirect link but an explicit pointer stored in the control block.

**Edge Cases**  
- *Dropped* or *renamed* base tables: the `BTABID` remains until cleanup runs, potentially leading to stale references.  
- *Partitioned* tables: each partition has its own CB; the parent table’s CB holds a list of child IDs.  
- *Materialized views*: they maintain a separate CB but still reference the underlying base via `BASETABID`.

**Optimize & Communicate**  
Highlight that this design enables efficient metadata resolution without costly lookups, but requires periodic housekeeping to purge orphaned references. In an interview, I’d emphasize the trade‑off between quick access (direct pointer) and maintenance overhead, aligning with FAANG’s focus on scalable system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
