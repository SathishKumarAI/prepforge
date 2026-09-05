---
qid: vq_95451e341b__star__local
question: To which timing will this trigger be assigned?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 401
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:10:25-05:00'
sources: []
---

**Situation**  
At my last company we had an e‑commerce platform where the order total column in the `Orders` table sometimes drifted from the sum of its line items because developers occasionally updated totals manually for promotional batches.

**Task**  
I was asked to design a database solution that would automatically correct any discrepancy before the transaction committed, ensuring data integrity without slowing down the checkout flow.

**Action**  
I created an **AFTER INSERT OR UPDATE FOR EACH ROW** trigger on `Orders`. Inside the trigger I queried the `OrderItems` table for the new order’s line‑item totals and compared them to the `total_amount` field. If a mismatch was detected, I issued a `RAISE_APPLICATION_ERROR` to abort the transaction and logged the event in an audit table. To keep performance high, I used bulk collect on the items and calculated the sum using SQL rather than PL/SQL loops. The trigger fired **after** data modification but **before** the commit, so any invalid totals were caught instantly.

**Result**  
After deployment, our post‑deployment QA tests showed a 99.9% reduction in total mismatches, and the average checkout latency increased by less than 2 ms—well within SLA limits. I learned how critical it is to choose the right trigger timing (AFTER for integrity checks that must not allow bad data to persist) and to balance strictness with performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
