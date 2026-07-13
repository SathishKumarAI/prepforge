---
qid: q083
question: "What is the difference between a primary key and a foreign key?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

A primary key uniquely identifies each row in a table and can't be NULL or duplicated. A foreign key is a column in one table that references the primary key of another, enforcing referential integrity, that is, you can't reference a customer that doesn't exist. Together they wire the relational model: the PK defines identity, the FK defines relationships.

I'd frame this through **Insist on the Highest Standards** and **Dive Deep**: keys are the guardrails that keep data trustworthy. A missing FK constraint is how you end up with orphaned orders pointing at deleted customers and reports that silently don't reconcile.

A real example: I owned a pipeline where an events table had no FK to users, and a bad backfill inserted events for user IDs that never existed. Our active-user count was inflated by roughly 4%. I added the FK constraint (and a validation check in the load job), which rejected the bad rows at ingest and forced us to fix the upstream bug.

I'd also note the trade-off in warehouses: Redshift declares keys but doesn't enforce them, so I add explicit data-quality tests instead. A bar-raiser listens for whether I connect keys to real data-integrity failures and owned preventing them, not just recite textbook definitions.
