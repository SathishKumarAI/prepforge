---
qid: vq_7951eb659f__eli5__local
question: Query to find duplicate value in SQL?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 278
total_tokens: 434
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:16:53-05:00'
sources: []
---

Imagine you’re sorting a deck of cards and want to spot any card that appears more than once. In SQL the “deck” is your table, each row is a card, and the “value” we care about is a column—say, an email address.

**What’s a duplicate?**  
A duplicate is simply a value that shows up in two or more rows where you expect it only once.

**How to find them:**  
Use a `GROUP BY` clause to gather all rows that share the same value, then keep only those groups whose count is greater than one.  

```sql
SELECT email                -- the column we’re checking
     , COUNT(*) AS times    -- how many times it appears
FROM   users
GROUP  BY email
HAVING COUNT(*) > 1;         -- keep only duplicates
```

- **`GROUP BY`** collects rows with identical values.  
- **`COUNT(*)`** tallies how many rows are in each group.  
- **`HAVING`** filters the groups, keeping only those where the count exceeds one.

Run this query and you’ll see every email that appears more than once—exactly like spotting repeated cards in your deck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
