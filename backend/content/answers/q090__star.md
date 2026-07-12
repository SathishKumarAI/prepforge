---
qid: q090
question: "What is the difference between OLTP and OLAP systems?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** At a healthcare scheduling company, the data team was running big analytical aggregations against the same MySQL instance that powered live appointment booking. During reporting windows, booking APIs slowed and occasionally timed out for clinics.

**Task** I needed to architect a clean separation so analytics never competed with the transactional workload again.

**Action** I framed it as an OLTP versus OLAP problem. Our MySQL was OLTP: optimized for many small, concurrent read-write transactions, normalized, row-oriented, with sub-millisecond single-record lookups. Analytics needed OLAP: optimized for scanning and aggregating huge volumes, denormalized, column-oriented, tolerant of longer query times. I kept MySQL as the OLTP system of record and introduced BigQuery as the OLAP layer, syncing via a nightly CDC pipeline. Analysts hit BigQuery for their heavy GROUP BYs while the app kept MySQL for fast, isolated transactions.

**Result** Booking API p99 latency during reporting windows dropped from around 800ms back to under 120ms, and analysts could run queries scanning years of data freely. My takeaway: OLTP and OLAP are opposite optimization targets, and forcing one system to do both hurts everyone.
