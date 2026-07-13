---
qid: q088
question: "What is cohort analysis and why is it useful?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

Cohort analysis groups users by a shared starting characteristic, usually signup month, then tracks each group's behavior over time. Instead of one blended average that hides everything, I see how the January cohort retains versus March, which isolates whether the product is actually improving or just growing.

I frame it through **Dive Deep** and **Customer Obsession**: a flat overall retention number can look stable while newer cohorts are quietly getting worse, masked by a large loyal base. Cohorts expose that. In SQL I bucket users by signup period, then compute the fraction active in each subsequent period; in Redshift/Athena that's a self-join or window function feeding a QuickSight heatmap.

A real example: our blended retention looked healthy at ~40%, so leadership was calm. Cutting it into monthly cohorts, I found post-March signups retained 15 points worse, traced to a broken onboarding email. We fixed onboarding and the affected cohorts' month-2 retention recovered from 25% to 38%.

A bar-raiser listens for whether I use cohorts to isolate a real cause and drive a fix with quantified impact, and whether I distrust blended averages enough to segment, rather than just defining the technique. That instinct to disaggregate is what surfaces the truth.
