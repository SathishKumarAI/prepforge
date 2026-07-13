---
qid: q094
question: "What are Slowly Changing Dimensions (SCDs) and what are the common types?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

Slowly Changing Dimensions handle how a warehouse tracks attributes that change over time, like a customer moving cities or a product changing category. The types define the trade-off between history and simplicity. **Type 1** overwrites the old value (no history, simplest). **Type 2** adds a new row with effective-date and current-flag columns, preserving full history, the most common analytical choice. **Type 3** keeps a "previous value" column (limited history). There are hybrids (Type 4/6), but 1, 2, and 3 are the core.

I frame the choice through **Dive Deep** and **Are Right A Lot**: picking the wrong type silently corrupts historical reporting. If sales must be attributed to the region a customer lived in **at purchase time**, Type 1's overwrite retroactively rewrites history and misstates every past report.

A real example: our customer dimension was Type 1, so when customers relocated, historical revenue-by-region reports shifted retroactively and finance couldn't reconcile prior quarters. I re-modeled it as Type 2 with effective-dated rows in Redshift; joins used the as-of date, and historical reports became stable and auditable.

A bar-raiser listens for whether I choose the SCD type from the actual reporting requirement (point-in-time accuracy) rather than defaulting, and whether I connect it to a real reconciliation problem I owned.
