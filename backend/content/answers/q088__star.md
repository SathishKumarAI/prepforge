---
qid: q088
question: "What is cohort analysis and why is it useful?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** At a subscription meal-kit startup, leadership was worried because overall retention looked flat month over month. But a flat aggregate hid whether we were actually improving, because new signups masked older users churning.

**Task** I needed to show whether recent product changes were genuinely improving how long users stuck around.

**Action** I built a cohort analysis. I grouped users by the month they signed up, then tracked what percentage of each cohort was still active in month 1, month 2, month 3 and so on. That let me compare apples to apples: the January cohort against the June cohort at the same age. I wrote the SQL using signup month as the cohort key and a self-join on activity months, then visualized it as a triangular retention heatmap in Looker so the diagonal decay was obvious at a glance.

**Result** The heatmap revealed that cohorts after our onboarding redesign retained about 12 points higher at month 3, proof the aggregate had been hiding. Leadership greenlit further onboarding investment. My big lesson: cohort analysis separates the effect of when someone joined from the noise of overall growth.
