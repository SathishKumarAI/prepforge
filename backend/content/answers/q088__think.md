---
qid: q088
question: "What is cohort analysis and why is it useful?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Ask what cohort dimension matters (signup month is typical) and what behavior we're tracking (retention, revenue). State the assumption: I'll use time-based acquisition cohorts.
2. **Mental model.** Group users by a shared starting event, then track each group's behavior over subsequent periods. It converts a blurry aggregate into "how does the January class behave in month 1, 2, 3…" so you compare like with like.
3. **Reason step by step.** Define the cohort (users who signed up in a given month), define the metric per period (share still active, revenue), and lay it out as a triangular table — rows are cohorts, columns are periods-since-start. Reading down a column shows whether newer cohorts are improving; reading across a row shows a cohort's decay curve.
4. **Traps to avoid.** Comparing cohorts of different maturities head-to-head (a 12-month cohort naturally shows more churn); ignoring survivorship; mixing calendar time with relative time (the whole point is relative "months since signup"); and drawing conclusions from tiny cohorts.
5. **Sanity-check and deliver.** Test: does an aggregate retention number hide that recent cohorts retain better? Cohorts reveal that. Communicate why it matters — it isolates whether product changes actually improve retention over time — then show the triangle layout.
