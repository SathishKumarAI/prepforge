---
qid: q052
question: "What is the difference between mean, median, and mode, and when is each useful?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was reporting "average" customer income to the leadership team, and my mean of $95k badly overstated a typical customer because a handful of ultra-high-net-worth accounts were dragging it up.

**Task** I needed to report a number that honestly represented a typical customer rather than being distorted by a few extremes.

**Action** I walked through the three measures. The mean sums everything and divides, so it's sensitive to outliers. The median is the middle value, robust to those extreme accounts. The mode is the most frequent value, which is what you want for categorical fields like most-common plan tier. For our skewed income distribution I led with the median, showed the mean alongside to expose the skew, and used the mode for the plan-tier breakdown.

**Result** The median came in at $58k, a far truer picture, and leadership re-sized the target market accordingly. The lesson I reinforced: on skewed data the median tells the honest story, the mean tells you about the tail, and knowing which to show is half the analyst's job.
