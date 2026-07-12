---
qid: q057
question: "What do variance and standard deviation measure?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** Two suppliers quoted the same average delivery time of 5 days, and procurement was ready to treat them as interchangeable, but I suspected the averages were hiding very different reliability.

**Task** I had to quantify how consistent each supplier was, not just their central tendency.

**Action** I brought in variance and standard deviation. Variance measures the average squared distance of each value from the mean, so it captures spread, and standard deviation is its square root, which conveniently is back in the original units, days. I computed both per supplier: supplier A had a standard deviation of about 1 day, supplier B nearly 4 days. Same mean, wildly different consistency. I visualized it with overlaid distributions so procurement could see the tail risk on supplier B.

**Result** They chose supplier A for time-sensitive orders, and late-delivery incidents dropped noticeably the next quarter. The lesson I hammered home: the mean tells you the center, but variance and standard deviation tell you the risk, and ignoring spread hides exactly the thing that hurts you.
