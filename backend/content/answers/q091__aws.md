---
qid: q091
question: "What is database normalization and what problem does it solve?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

Normalization organizes a schema into tables so each fact is stored exactly once, progressing through normal forms (1NF removes repeating groups, 2NF/3NF remove partial and transitive dependencies on the key). The problem it solves is redundancy and the update anomalies that follow: if a customer's address lives in a thousand order rows, one change means a thousand updates and guaranteed inconsistency.

I frame it through **Insist on the Highest Standards** and **Dive Deep**: normalized OLTP schemas keep the source of truth clean and consistent. But I balance it against analytics needs, that's the judgment call. Warehouses deliberately **denormalize** for read speed, so I normalize on the write side and denormalize into star schemas on the read side.

A real example: a transactional table repeated product metadata inline, and a price correction updated some rows but not others, producing a revenue report that didn't reconcile. I normalized product info into its own table with a foreign key, so price lived in one place. The reconciliation gap closed and the class of bug disappeared.

A bar-raiser listens for whether I understand normalization prevents anomalies **and** when to deliberately break it for analytical performance, rather than treating "more normalized" as universally better. Knowing when to denormalize is the real signal.
