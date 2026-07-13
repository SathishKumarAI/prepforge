---
qid: q097
question: "Conceptually, how would you compute monthly user retention with SQL?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll define retention as: of users active in a given month, what fraction return in a later month? I'll confirm we want cohort-based (grouped by first-active month) retention and how "active" is defined.

**Approach** — Establish each user's cohort, build their monthly activity, self-join cohort to later activity, then aggregate to percentages.

**Depth** — Step one: derive each user's cohort month as their first activity month (`MIN(DATE_TRUNC('month', event_time))` grouped by user). Step two: build a distinct list of (user, active_month) from the events. Step three: join the cohort table to the activity table on user, and compute the month offset (`activity_month - cohort_month`), typically as an integer number of months. Step four: for each (cohort_month, offset), count distinct returning users and divide by the cohort's month-0 size:

```
retention = distinct_users_active_at_offset / cohort_size
```

The result is the classic triangular cohort-retention table. Using COUNT(DISTINCT user) prevents double-counting multiple events per user.

**Edge cases** — Users active in non-consecutive months, timezone boundaries on month truncation, the newest cohorts having incomplete offsets, and deciding rolling vs. calendar months. Define "active" precisely (login vs. meaningful action).

**Optimize & communicate** — I'd pre-aggregate activity into a monthly table to avoid re-scanning raw events. Narrating the four conceptual steps before writing SQL — cohort, activity, join on offset, aggregate — shows the structured decomposition interviewers score.
