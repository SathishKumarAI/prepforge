---
qid: q093
question: "Why can averages be misleading, and what should you report alongside them?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

Averages mislead because a single mean hides the shape of the data: it's pulled by outliers, masks skew, and erases variance. "Average revenue per user" can look healthy while the median user spends almost nothing and a handful of whales carry the number, so a decision based on the mean serves customers who don't exist.

I frame this through **Dive Deep** and **Are Right A Lot**: I distrust a lone average and always report it alongside context, the **median** (robust to skew), a **spread** measure (standard deviation or IQR), and **percentiles** (p50/p90/p99), plus the sample size. For latency and cost especially, I lead with percentiles, not the mean, because the tail is where customers hurt.

A real example: a team celebrated an average API latency of 200ms, but p99 was 3 seconds, so our most active customers were suffering while the mean looked fine. Reporting p90/p99 reframed the whole conversation; we targeted the tail and cut p99 to 600ms, which moved retention where the average never would have.

A bar-raiser listens for whether I instinctively decompose an average into distribution and tails, and whether I tie that statistical rigor to a real customer-impacting decision, rather than reporting a comfortable single number.
