---
qid: q059
question: "What are outliers and how can you detect them?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd anchor this to **Dive Deep** and **Ownership**: an outlier is a data point far from the rest, and my job is to decide whether it's an error, a rare-but-real event, or the very thing we care about. Detection methods I use: the IQR rule (below Q1-1.5*IQR or above Q3+1.5*IQR), z-scores beyond about 3 for roughly normal data, visual tools like box and scatter plots, and model-based approaches like Isolation Forest for high dimensions.

The critical point I stress is that detection is easy; the *decision* is the hard part and I own it. I'd give a concrete example: in payments data, the extreme-value transactions were flagged as outliers, but they were the fraud we were hired to catch, so removing them would have deleted the signal. Conversely a sensor reading of -999 was clearly a bad-data sentinel to drop. So I investigate root cause before acting and never blanket-delete. At scale I'd flag them in an EMR or Glue job. A bar-raiser listens for whether you distinguish data errors from meaningful extremes and justify keep-cap-or-drop with the business context, rather than reflexively trimming tails.
