---
qid: q090
question: "What is the difference between OLTP and OLAP systems?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

OLTP (Online Transaction Processing) systems run the business: many small, concurrent inserts and updates with strict consistency, normalized schemas, row storage, for example Aurora or DynamoDB behind an app. OLAP (Online Analytical Processing) systems analyze the business: large aggregate scans over historical, denormalized data, usually columnar, for example Redshift or Athena over S3. OLTP optimizes for write throughput and point lookups; OLAP for read-heavy aggregation.

I frame the distinction through **Customer Obsession** and **Invent and Simplify**: mixing them hurts everyone, heavy analytics on the OLTP store steals capacity from live customer traffic, and transactional workloads crawl on a columnar warehouse. So I separate concerns and move data between them via CDC or batch ETL/ELT.

A real example: analysts were running big aggregations directly against our production OLTP Postgres, spiking customer-facing latency. I moved analytics onto a Redshift OLAP layer fed by a nightly Glue job. Customer p99 latency stabilized and analytical queries got faster on columnar storage, so both workloads won.

A bar-raiser listens for whether I understand why the two are architected oppositely (row vs columnar, normalized vs denormalized, consistency vs scan throughput) and whether I owned protecting the customer experience by keeping analytics off the transactional path, with a real outcome.
