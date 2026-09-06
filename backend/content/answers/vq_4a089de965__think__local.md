---
qid: vq_4a089de965__think__local
question: What are the differences between Temporary Table and Table Variable?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 467
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:32:06-05:00'
sources: []
---

**Metacognitive Blueprint for Answering “Differences between Temporary Tables and Table Variables”**

1. **Clarify Scope & Assumptions**
   - Identify the RDBMS (SQL Server, MySQL, PostgreSQL) because semantics differ.
   - Assume we’re comparing SQL Server’s `#temp` tables vs `@tableVar`.
   - State that both are session‑scoped but differ in persistence, metadata, and usage patterns.

2. **Choose a Framework**
   - Use a *feature comparison matrix*: persistence, scope, transaction behavior, indexing, statistics, recompilation, memory vs disk.
   - Map each feature to the two constructs; note where one is superior or identical.

3. **Step‑by‑Step Reasoning**
   - Start with lifecycle: temp tables exist until session ends or dropped; table variables exist until the batch completes.
   - Move to scope/visibility: temp tables can be referenced across nested procedures, table vars cannot.
   - Examine metadata: temp tables get statistics and can have indexes; table vars only have a single clustered index if declared.
   - Consider transaction support: temp tables honor `ROLLBACK`; table vars are not affected by rollback of the surrounding transaction.
   - Address performance: discuss how optimizer treats each, hinting that temp tables allow query plan recompilation whereas table vars do not.

4. **Avoid Common Pitfalls**
   - Don’t conflate *temporary* with *global* (`##temp`); keep focus on session‑scoped objects.
   - Avoid assuming table variables always perform better—highlight the “small data” caveat.
   - Remember that indexes can be added to temp tables but only a limited set to table vars.

5. **Sanity Check & Communicate**
   - Verify each point against official docs or recent blog posts; ensure no contradictory statements.
   - Present the comparison as bullet points with clear pros/cons, then summarize the decision‑making criteria (size of data, need for indexes, transaction semantics).
   - End by advising to choose based on data volume and query complexity, not just “temporary vs variable” terminology.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
