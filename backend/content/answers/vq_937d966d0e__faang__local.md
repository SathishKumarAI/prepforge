---
qid: vq_937d966d0e__faang__local
question: What is Row Chaining, Row Migration?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 462
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:23:00-05:00'
sources: []
---

**Clarify**

The interviewer asks for *Row Chaining* and *Row Migration*, concepts from relational‑database internals (e.g., Oracle).  
Assumptions:  
- We’re discussing how databases store large rows that exceed the page size.  
- The audience knows basic page/segment layout but not the specific techniques.

**Approach**

1. Explain each term separately, linking to physical storage.  
2. Contrast their trade‑offs (space, I/O, fragmentation).  
3. Give a concise example of when each is used.  

**Depth**

| Technique | What it does | How it works |
|-----------|--------------|--------------|
| **Row Chaining** | Splits one logical row across multiple pages. | The first page contains the initial row fragment plus pointers (row IDs) to subsequent pages that hold the rest of the columns. All fragments stay in the same segment but may be scattered. |
| **Row Migration** | Moves an entire logical row to a new location when it grows beyond its original block. | When a row overflows, DBMS allocates a new block (often in a different segment), copies all data there, updates the index, and frees the old block. No pointers are left behind; the row is “migrated.” |

**Edge Cases**

- *Row chaining* can lead to many pointer hops → higher read latency and increased fragmentation.  
- *Row migration* may trigger a full page rebuild if many rows migrate in bulk, causing write amplification.  
- Both break when the database’s buffer pool is too small; pages stay in disk longer.

**Optimize & Communicate**

- Use **row chaining** for rarely‑updated long text columns where minimal movement is acceptable.  
- Prefer **row migration** for hot tables that undergo frequent updates to avoid pointer churn.  
- Explain to interviewers: “Choosing between them balances read performance vs. write overhead; modern engines lean toward migration because it keeps rows contiguous, simplifying recovery and caching.”  

This structured answer shows clarity, technical depth, and awareness of trade‑offs—key for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
