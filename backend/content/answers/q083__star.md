---
qid: q083
question: "What is the difference between a primary key and a foreign key?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** I inherited a reporting schema at a logistics startup where the orders table had duplicate order IDs and some rows referenced customer IDs that no longer existed. Revenue reports were double-counting and joins were silently dropping records.

**Task** My job was to enforce integrity so the analytics numbers could actually be trusted.

**Action** I traced it back to missing key constraints. I added a primary key on orders.order_id, which guarantees each row is unique and non-null, so it uniquely identifies an order and stops the duplicates cold. Then I added a foreign key from orders.customer_id referencing customers.customer_id, which is a reference to another table's primary key and enforces that every order points to a customer that actually exists. I first cleaned the orphaned rows, then applied the constraint so the database would reject bad inserts going forward. I also documented the relationship so downstream analysts understood the one-to-many link between customers and orders.

**Result** Duplicate order counts went to zero and the orphaned-record errors in our nightly ETL dropped by around 95%. The takeaway for me: a primary key defines identity within a table, and a foreign key defines a trustworthy relationship between tables.
