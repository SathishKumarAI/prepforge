---
qid: q052
question: "What is the difference between mean, median, and mode, and when is each useful?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd anchor this to **Dive Deep** and **Are Right A Lot**: choosing the right central-tendency measure is a decision I've owned that changed conclusions. Mean is the arithmetic average, best for roughly symmetric data because it uses every value. Median is the middle value, robust to outliers and skew, which is why it's the honest summary for income, latency, or revenue-per-user. Mode is the most frequent value, the only one meaningful for categorical data like most-common device or plan.

The interview move is to show I know *when each lies*. I'd give a concrete example: reporting p50 and p90 latency instead of mean latency for an API, because a handful of 5-second calls dragged the mean to 800ms while the median stayed at 120ms; the mean was hiding a real tail problem that the median plus percentiles exposed. On AWS I'd compute these in Athena or QuickSight and always pair a mean with the median and spread so stakeholders aren't misled. A bar-raiser listens for statistical depth, specifically that you reach for the median under skew and never report a single number without checking the distribution behind it.
