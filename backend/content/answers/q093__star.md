---
qid: q093
question: "Why can averages be misleading, and what should you report alongside them?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** Our platform team celebrated an average API response time of 200ms and declared performance "great." But support tickets about slowness kept climbing, which made no sense if the average was that healthy.

**Task** I had to figure out why the reassuring average clashed with real user pain and fix how we reported latency.

**Action** I dug into the distribution and immediately saw the problem: averages hide skew and outliers. A handful of very fast cached responses were dragging the mean down while a long tail of 3-second requests sat hidden. I stopped reporting the mean alone and started reporting the median, the p95 and p99 percentiles, and the spread. The p95 was actually 1.8 seconds, ten times the story the average told. I also added a histogram to the dashboard so people could see the bimodal shape rather than trust a single number.

**Result** Once leadership saw p95, they prioritized the slow endpoints, and within a quarter p95 dropped to 600ms and tickets fell by half. My lesson: an average is only trustworthy alongside a measure of spread and the tail percentiles, because the mean alone can mask exactly the experience your users complain about.
