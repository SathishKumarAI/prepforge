---
qid: q094
question: "What are Slowly Changing Dimensions (SCDs) and what are the common types?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Confirm warehouse/dimensional-modeling context and the core question: do we need to preserve history when a dimension attribute changes? State the assumption: e.g., a customer moves cities.
2. **Mental model.** Dimensions describe entities (customer, product) whose attributes change slowly over time. An SCD strategy decides *what happens to history* when an attribute value updates.
3. **Reason step by step.** Walk the common types. **Type 0**: never change (fixed attributes like original signup date). **Type 1**: overwrite — keep only the current value, no history (simple, but past reports change retroactively). **Type 2**: add a new row per change with effective-date/expiry and a current flag or surrogate key — full history, the workhorse for accurate point-in-time reporting. **Type 3**: add a column for previous value — limited history (current and one prior). Mention hybrids (Type 6) combine these.
4. **Traps to avoid.** Defaulting to Type 1 when the business needs historical accuracy; forgetting Type 2 needs surrogate keys plus effective/expiry dates and a current-record flag; conflating SCDs with fact-table updates.
5. **Sanity-check and deliver.** Test with the "customer moved" case: does "sales by state last year" need the old state (Type 2) or the current one (Type 1)? That question picks the type. Lead with the history-preservation framing, then the numbered types.
