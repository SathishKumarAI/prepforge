---
qid: q054
question: "Why does correlation not imply causation?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** A marketing manager showed me a chart where ice-cream-style seasonal spend correlated strongly with signups and wanted to double the budget, convinced the spend was driving the growth.

**Task** I had to check whether the relationship was actually causal before we committed real money to it.

**Action** I explained why correlation doesn't imply causation. Two variables can move together because of a lurking confounder, in our case seasonality drove both ad spend and organic signups, or because of reverse causation or pure coincidence. To test causality rather than assume it, I proposed a randomized holdout: split regions and vary spend, so any confounder is balanced out. I also ran a quick analysis controlling for the seasonal variable, which shrank the apparent effect dramatically.

**Result** The controlled test showed the true lift was about a third of what the raw correlation implied, so we scaled the budget sensibly instead of overspending. The lesson that resonated: a correlation is a hypothesis, and only a controlled experiment or careful confounder adjustment turns it into causation.
