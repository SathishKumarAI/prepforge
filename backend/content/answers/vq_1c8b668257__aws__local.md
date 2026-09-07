---
qid: vq_1c8b668257__aws__local
question: Which of the following is not correct about Cursor ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 376
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:41:19-05:00'
sources: []
---

**Situation & Task**  
I was interviewing a candidate for a senior data‑engineering role where they were asked, “Which of the following is not correct about a cursor?” The interviewer wanted to see if the candidate could *own* the problem, dive deep into database internals, and quantify impact.

**Action**  
I first clarified the scope: we’re talking about relational‑database cursors (e.g., in PL/SQL or T‑SQL). I then listed three common misconceptions:

1. **Cursors are always slow because they fetch row by row.**  
2. **A cursor can be used for bulk inserts without locking the table.**  
3. **The `FOR UPDATE` clause automatically locks all rows returned by the cursor.**

I explained that #1 is *incorrect*: modern DBMSs buffer rows, and cursors can be “fast‑forward” or “keyset” to reduce overhead. The other two are technically true but incomplete without context.

**Result**  
The candidate quickly identified #1 as wrong, citing benchmarks where a fast‑forward cursor processed 50 k rows in <2 s versus a row‑by‑row fetch that took >30 s. They quantified the performance difference (≈15× speedup) and discussed how proper cursor tuning can reduce lock contention by 40 % in OLTP workloads.

**Reflection**  
This demonstrates **Ownership**—the candidate assumed responsibility for understanding DB internals—and **Dive Deep**—they unpacked subtle differences between cursor types. They also showed a bias for action by suggesting a switch to set‑based processing when appropriate, and they quantified the impact, aligning with Amazon’s data‑driven culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
