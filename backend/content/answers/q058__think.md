---
qid: q058
question: "What is the normal distribution and why is it important?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** The 'why is it important' half is the real target, so plan to spend more time there. State the assumption that they want the CLT connection, not just the bell-curve shape.

2. **Mental model.** Two parameters define it, mean (center) and standard deviation (spread), and its importance flows almost entirely from the Central Limit Theorem making sample means normal.

3. **Reason step by step.** Describe it: continuous, symmetric, bell-shaped, mean equals median equals mode, with the empirical 68-95-99.7 rule. Then build the importance case: many phenomena and measurement errors are approximately normal; the CLT makes sampling distributions of means normal, underpinning confidence intervals and hypothesis tests; many methods assume normality (regression residuals, z-tests); and it enables z-score standardization.

4. **Traps to avoid.** Do not call it skewed or claim about 50% lie within one SD (it is about 68%). Do not say it applies to categorical data. Do not assume real data is always normal.

5. **Sanity-check and communicate.** Confirm the empirical-rule numbers and the CLT link. End with the practitioner caveat: always check normality (histograms, Q-Q plots) before relying on it, which shows you would not blindly assume the assumption holds.
