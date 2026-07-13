---
qid: q094
question: "What are Slowly Changing Dimensions (SCDs) and what are the common types?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm we're in dimensional modeling, where SCDs govern how dimension attributes that change over time (a customer's address, tier) are handled in the warehouse.

**Approach** — Define the problem, then walk the common SCD types by how they treat history.

**Depth** — Dimensions change slowly and unpredictably; the question is whether to preserve history. **Type 0**: retain original, never change (e.g., original signup date). **Type 1**: overwrite the old value — no history kept; simplest, but past facts now reflect the new attribute. **Type 2**: add a new row for the changed record with effective-date/expiry columns and a current-flag, preserving full history so facts join to the attribute value that was true *at that time* — the most common for auditability. **Type 3**: add a column (e.g., previous_value) to keep limited prior history. Hybrids (Type 6 = 1+2+3) combine these.

**Edge cases** — Type 2 can explode row counts and needs a surrogate key plus correct effective-dating; late-arriving dimension changes; retroactive corrections; and choosing Type 1 loses the ability to report history accurately.

**Optimize & communicate** — The decision rule: pick the type by whether the business needs point-in-time history. I'd default to Type 2 for attributes analysts trend over time. Tying the choice to reporting requirements, not defaulting blindly, is the modeling judgment interviewers reward.
