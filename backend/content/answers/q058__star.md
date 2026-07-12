---
qid: q058
question: "What is the normal distribution and why is it important?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was building quality-control alerts for a manufacturing line, and the team was setting arbitrary "too high" thresholds on part measurements with no statistical basis, causing both false alarms and misses.

**Task** I needed a principled way to decide when a measurement was genuinely abnormal.

**Action** I leaned on the normal distribution. Many natural processes, including our machining tolerances, follow that symmetric bell curve defined by a mean and standard deviation, and the Central Limit Theorem means averages of samples tend toward it too, which is why it underpins so much of statistics. I used the empirical rule, that about 68, 95, and 99.7% of values fall within one, two, and three standard deviations, to set control limits at three sigma, so only genuinely rare parts would trip an alert.

**Result** False alarms dropped by roughly 60% while we still caught the real defects, and operators trusted the system again. The lesson: the normal distribution turns "that looks off" into a defensible probability, and three-sigma limits gave us a rigorous, explainable threshold.
