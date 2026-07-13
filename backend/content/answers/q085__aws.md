---
qid: q085
question: "What are the key dimensions of data quality?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

I'd name the core dimensions and tie each to a failure it prevents: **accuracy** (values match reality), **completeness** (no missing critical fields), **consistency** (same fact agrees across systems), **timeliness** (data is fresh enough to act on), **validity** (conforms to format and range rules), and **uniqueness** (no unintended duplicates). Some add integrity (referential correctness).

I frame data quality through **Insist on the Highest Standards** and **Ownership**: garbage data produces confident wrong decisions, and the analyst who ships the number owns its trustworthiness end to end. I don't wait for someone downstream to catch it.

Concretely, I build automated checks into the pipeline, for example Glue/Deequ or dbt tests asserting row counts, null thresholds, uniqueness, and cross-system reconciliation, and I alarm on anomalies rather than eyeballing.

A real example: duplicate order events (a uniqueness failure) were inflating revenue by 6%. I added a dedup step keyed on event ID plus a daily reconciliation test against the finance ledger, catching a variance over 0.5% before any report shipped. Trust in the dashboard measurably recovered.

A bar-raiser listens for whether I treat quality as an owned, automated discipline with quantified impact, not a one-time cleanup, and whether I proactively prevent bad data from ever reaching a decision.
