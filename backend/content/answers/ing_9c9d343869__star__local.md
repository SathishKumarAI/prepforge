---
qid: ing_9c9d343869__star__local
question: 'Explain: Multiple Tables and Window Logic: All Three Correct, One Much
  Slower'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 305
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:45:07-05:00'
sources: []
---

**Situation:**  
At a fintech startup I was tasked with generating daily risk‑score reports for 120,000 active users. The report required aggregating data from three tables—transactions, user profiles, and real‑time market feeds—then applying a window function to rank each user by recent activity.

**Task:**  
Deliver the report within the nightly batch window (≤ 10 min) while ensuring all three join paths returned accurate results.

**Action:**  
I first benchmarked each join: the transactions table was heavily indexed, but the market feed had millions of rows with no composite key. I rewrote the market‑feed join as a semi‑join using a materialized view that pre‑aggregated daily volumes, then applied the window function only on this compact dataset. For the user profiles, I switched from an inner join to a lateral join to pull the latest profile snapshot per user, reducing duplicate scans. Finally, I parallelized the three queries across separate compute nodes and added incremental refresh logic.

**Result:**  
The report generation time dropped from 28 min to 7 min—well under the deadline—while all three tables produced identical risk scores. The exercise taught me that thoughtful join strategy and pre‑aggregation can turn a seemingly equivalent query into a production‑ready solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
