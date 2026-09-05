---
qid: ing_cb14a924ed__star__local
question: 'Explain: Cardinality in Database Example — What Is Cardinality in a Database?
  - SolarWinds Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 367
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:15:09-05:00'
sources: []
---

**Situation**  
While working on a customer‑support ticketing system at my previous company, the analytics team noticed that our monthly churn report was running three times slower than expected. The query joined the `Tickets` table (≈ 3 M rows) with `Users` (≈ 200 K rows) and then aggregated by user. Performance profiling revealed a huge number of duplicate joins on the `UserID` field.

**Task**  
I had to identify why the join was so expensive, reduce runtime below five seconds, and ensure future queries stayed fast as data grew.

**Action**  
First I examined the cardinality of `Tickets.UserID`. Using EXPLAIN plans and a histogram, I discovered that 90 % of tickets shared only 10 % of users—extremely high cardinality skew. I redesigned the schema: added a surrogate key for `UserID`, created a composite index `(UserID, TicketDate)`, and partitioned `Tickets` by month. I also rewrote the query to use a semi‑join that pulled distinct user IDs first, then joined back to tickets. Finally, I updated statistics regularly with `ANALYZE`.

**Result**  
The churn report now completes in 1.8 seconds—an 80 % reduction—and the database engine uses fewer buffer pages. The new indexing strategy also cut subsequent query costs by ~70 %. This experience taught me that understanding cardinality and its impact on join plans is critical for scalable database performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
