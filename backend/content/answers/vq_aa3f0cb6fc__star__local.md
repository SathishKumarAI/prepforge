---
qid: vq_aa3f0cb6fc__star__local
question: WHAT IS A SELF JOIN?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 297
total_tokens: 529
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:14:00-05:00'
sources: []
---

**Situation** – In a recent sales analytics project for a retail chain, our data warehouse had a `customers` table that also stored each customer’s referrer ID pointing to another row in the same table. The business asked us to generate a report showing how many customers were referred by premium members.

**Task** – I needed to pull the referring customer’s status and count referrals per referrer, all from one table, while keeping query performance within our nightly ETL budget of 5 minutes.

**Action** – I wrote a self‑join on `customers` where `c.id = r.referrer_id`. The left side (`r`) represented the referred customers; the right side (`c`) was their referrers. I added an index on `(referrer_id)` and used a conditional aggregation to count only those referrers whose `membership_level = 'premium'`. To avoid duplicate rows, I filtered out NULL referrers in the join condition.

**Result** – The query ran in 38 seconds versus the previous 2.5‑minute ad‑hoc approach, producing 1,237 referrals for premium members—a 12% increase over last quarter’s baseline. I learned that a well‑indexed self‑join can dramatically improve performance when navigating hierarchical relationships within a single table.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
