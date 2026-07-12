---
qid: q084
question: "What makes an effective analytics dashboard?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** Our customer success team had a Tableau dashboard with 30 widgets that nobody actually used. When I surveyed them, most managers still exported to Excel because they couldn't find the churn number that mattered to them.

**Task** I was asked to redesign it into something the team would open every morning and act on.

**Action** I started with interviews to nail down the two or three decisions each role needed to make, then designed backwards from those. I applied an inverted-pyramid layout: four headline KPIs at the top, like net churn and at-risk accounts, then supporting trend charts below, then detail tables you could drill into. I cut vanity metrics ruthlessly, added clear time-period context and comparison to target on every tile, and made filters persistent per user. I also added a "last refreshed" timestamp so people trusted the data, and kept the color palette minimal so red genuinely meant "act now."

**Result** Daily active users on the dashboard went from around 4 to 27 within a month, and the CS team caught two large at-risk accounts early enough to save them. The lesson: an effective dashboard answers specific decisions fast, it doesn't just display data.
