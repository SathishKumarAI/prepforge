---
qid: ing_668333803c__star__local
question: 'Explain: Get spans within a time range — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 318
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:53:00-05:00'
sources: []
---

**Situation**  
When I was integrating Langwatch into our AI evaluation pipeline, the QA team needed to verify that every user request was captured as a span in the correct time window for compliance reporting.

**Task**  
I had to retrieve all spans from Langfuse that fell within a specific 30‑minute interval, ensuring no overlap or missed events, and feed them into our analytics dashboard.

**Action**  
First, I queried Langfuse’s REST API using the `spans?start=...&end=...` endpoint, passing ISO timestamps for the desired window. To handle pagination, I looped until the `next_cursor` field was null, aggregating results in a list. Then, I used Python’s Pandas to filter out any spans whose `timestamp` fell outside the range due to clock drift. Finally, I pushed the cleaned list into Langwatch via its webhook, tagging each span with a “compliance‑check” label and storing them in our PostgreSQL table for downstream reporting.

**Result**  
The process cut manual review time by 70 %, reduced false positives from clock skew by 95 %, and gave us an auditable trail of all interactions. I learned the importance of combining API pagination logic with local timestamp validation to guarantee data integrity in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
