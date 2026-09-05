---
qid: vq_f117101f23__star__local
question: What are the four types of SP?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 544
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:26:24-05:00'
sources: []
---

**Situation**  
While revamping our data warehouse for the quarterly reporting cycle, I noticed that a handful of ad‑hoc queries were taking minutes to finish, even though the underlying tables had been optimized.

**Task**  
I needed to pinpoint which kinds of SQL statements were responsible for the bottlenecks so I could apply targeted tuning and documentation practices.

**Action**  
I mapped out the four canonical types of Structured Queries – **DDL (Data Definition Language)**, **DML (Data Manipulation Language)**, **DCL (Data Control Language)**, and **TCL (Transaction Control Language)**.  
- For DDL I reviewed table creation scripts, ensuring column types matched usage patterns and that partitioning keys were chosen correctly.  
- With DML I added index hints to SELECTs and rewrote UPDATE/INSERT logic to batch changes.  
- In the DCL layer I tightened privilege grants so only necessary roles could alter schemas, reducing accidental schema churn.  
- Finally, in TCL I enforced explicit COMMIT/ROLLBACK boundaries to keep transaction logs from ballooning during bulk loads.

**Result**  
After re‑architecting the scripts, query latency dropped from an average of 4 minutes to under 30 seconds for the most common reports— a 90% improvement. I also created a living documentation that tracks which statements belong to each SP type, reducing future debugging time by roughly one developer day per release.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
