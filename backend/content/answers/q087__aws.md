---
qid: q087
question: "What is the difference between a star schema and a snowflake schema?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

Both model a warehouse as facts (measures like sales) surrounded by dimensions (customer, product, date). In a **star schema** each dimension is a single denormalized table joined directly to the fact, so queries are simple and fast but dimensions carry some redundancy. A **snowflake schema** normalizes those dimensions into sub-tables (product to category to department), saving storage and easing updates at the cost of more joins and complexity.

I'd frame the choice through **Deliver Results** and **Frugality**: I default to star for analytics because query speed and analyst simplicity usually beat the storage savings, especially on columnar engines like Redshift where denormalization is cheap and joins are the expensive part. I snowflake only when a dimension is huge or genuinely shared and volatile.

A real example: an inherited snowflaked product dimension required five joins for a basic sales-by-category report, and analysts kept getting it wrong. I flattened it into a star; the report went from five joins to one, runtime dropped roughly 60%, and self-service errors fell because the model matched how people think.

A bar-raiser listens for whether I reason about the trade-off (query performance vs storage and maintenance) and pick based on the actual workload, rather than reciting which has more tables.
