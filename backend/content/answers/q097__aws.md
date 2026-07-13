---
qid: q097
question: "Conceptually, how would you compute monthly user retention with SQL?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

I'd start by clarifying the definition, because "retention" is ambiguous: are we measuring **cohort** retention (of users who signed up in month M, what fraction return in month M+1, M+2, and so on) and what counts as "active"? Nailing that is **Dive Deep**, since a fuzzy definition produces a confidently wrong number.

Conceptually, the pattern is two derived sets joined on user. First, build a **cohort table**: each user's signup month (their cohort). Second, build an **activity table**: the distinct months each user was active. Then join cohort to activity on user_id and compute the month offset (activity_month minus signup_month). Retention for cohort M at offset N is: distinct active users at offset N divided by the cohort's original size. I'd aggregate that into a cohort-by-offset grid, typically with DATE_TRUNC to bucket months and COUNT(DISTINCT user_id), and visualize it as a retention heatmap in QuickSight.

On AWS I'd run this in Redshift or Athena over event data landed in S3. I'd flag the edge cases: dedup activity to distinct user-months, and be explicit about whether retention means "returned in exactly month N" versus "still active by month N."

A bar-raiser listens for whether I define the metric precisely, structure the SQL as cohort-plus-activity, and think about edge cases rather than hand-waving.
