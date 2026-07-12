---
qid: q075
question: "How can you estimate causal effects from observational data when you cannot run an experiment?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** Marketing swore their loyalty program drove retention, pointing at data showing enrolled members churned far less. But we couldn't randomize enrollment, and I suspected engaged customers simply self-selected into the program.

**Task** I had to estimate the program's actual causal effect on retention from purely observational data, controlling for that selection bias.

**Action** I treated it as a causal-inference problem, not a correlation. I drew a rough causal diagram to identify confounders, prior spend, tenure, and engagement, that drive both enrollment and retention. Then I estimated propensity scores, the probability of enrolling given those covariates, and used propensity-score matching to compare enrolled and non-enrolled customers who looked otherwise identical. I cross-checked with inverse-probability weighting and a difference-in-differences design around the program's launch date. I ran a sensitivity analysis to gauge how strong an unmeasured confounder would need to be to erase the effect.

**Result** The naive estimate claimed a 15-point retention lift; after adjustment the real causal effect was closer to 4 points, still positive but far smaller. That saved us from over-investing on an inflated number. The lesson: observational "effects" are confounded until you explicitly design around it.
