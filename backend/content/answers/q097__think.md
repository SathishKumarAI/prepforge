---
qid: q097
question: "Conceptually, how would you compute monthly user retention with SQL?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Pin the definition: retention relative to what anchor (signup month / first activity) and what counts as "retained" (any activity in month N)? Confirm the grain is monthly and whether it's classic (return in exactly month N) or rolling. State the assumption.
2. **Mental model.** It's a cohort join: define each user's cohort (their first-activity month), then join their later activity back to that cohort and count survivors per period offset.
3. **Reason step by step.** Step one: derive each user's cohort month, e.g., `MIN(activity_month)` per user. Step two: build an activity table of user × active-month. Step three: join activity to the cohort table, compute `period_number = months_between(active_month, cohort_month)`. Step four: `COUNT(DISTINCT user_id)` grouped by cohort_month and period_number. Step five: retention rate = that count divided by the cohort's month-0 size. Lay results out as a cohort triangle.
4. **Traps to avoid.** Counting rows instead of `DISTINCT users` (double-counts active users); mismatched date truncation; dividing by the wrong denominator (must be the cohort's original size); and treating incomplete recent cohorts as if fully mature.
5. **Sanity-check and deliver.** Check month-0 retention is 100% and rates generally decay. Communicate the pipeline as cohort → activity join → period offset → distinct-user ratio, and show the triangle.
