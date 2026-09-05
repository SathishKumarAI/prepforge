---
qid: vq_3576efdf5d__star__local
question: Which is not part of the Data Definiton Language ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 335
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:54:47-05:00'
sources: []
---

**Situation**  
During my internship at a fintech startup, I was tasked with redesigning the data warehouse schema to support a new reporting dashboard that required real‑time analytics on user transactions.

**Task**  
I had to document all changes to the database structure while ensuring minimal downtime for live users. My goal was to clearly separate which SQL statements were schema‑altering versus those that merely queried data, so my teammates could quickly identify what needed migration scripts and rollback plans.

**Action**  
I created a cheat sheet listing every Data Definition Language (DDL) command I’d use: `CREATE`, `ALTER`, `DROP`, and `TRUNCATE`. Then I wrote a short script to parse our SQL files, flagging any statements that weren’t in this list. When the parser highlighted `SELECT`, I reminded my team that SELECT is part of Data Manipulation Language (DML), not DDL, and therefore should be handled separately.

**Result**  
The migration went live with zero service interruptions; we avoided a 30‑minute downtime window by correctly categorizing statements. The exercise also reinforced for me the clear boundary: DDL = schema changes, DML = data queries/updates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
