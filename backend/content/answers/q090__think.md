---
qid: q090
question: "What is the difference between OLTP and OLAP systems?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** No real ambiguity, but frame it: these are two workload categories, not competing products. State the assumption: I'll contrast them across purpose, access pattern, and design.
2. **Mental model.** OLTP = **transaction** processing (the app writing/reading single records); OLAP = **analytical** processing (the analyst aggregating across huge datasets). Ask "who's the user and what's the query shape?"
3. **Reason step by step.** Walk the axes: OLTP handles many short read/write transactions on current data, is highly normalized, row-oriented, optimized for insert/update latency (e.g., a checkout writing an order). OLAP handles fewer, complex, read-heavy aggregations over historical data, is denormalized (star schema), often columnar, optimized for scan throughput (e.g., quarterly revenue by region). Mention data typically flows OLTP → ETL → OLAP.
4. **Traps to avoid.** Saying one is "faster" without qualifying the workload; claiming OLAP can't handle writes (it batch-loads); forgetting that running heavy analytics on the OLTP store is exactly the anti-pattern that motivates separating them.
5. **Sanity-check and deliver.** Test with two queries: "update this user's password" (OLTP) vs "average order value by month over 3 years" (OLAP). Lead with the transaction-vs-analysis contrast, then the normalization/storage/optimization differences, and close with the ETL bridge between them.
