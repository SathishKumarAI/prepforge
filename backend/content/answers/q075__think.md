---
qid: q075
question: "How can you estimate causal effects from observational data when you cannot run an experiment?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Establish why randomization is off the table (ethics, cost, feasibility) and name the central obstacle: **confounders** and the unobserved **counterfactual**. State the assumption each method leans on, because that is what separates them.
2. **Mental model.** The unifying goal is to *approximate randomization* — make treated and control groups comparable on confounders so any outcome gap is attributable to treatment. Draw a DAG mentally to see what to adjust for.
3. **Reason step by step.** Walk the toolkit: propensity-score matching (match on P(treatment|covariates)); regression adjustment (control confounders as covariates); instrumental variables (a variable affecting treatment but not outcome directly — handles unmeasured confounding); difference-in-differences (compare over-time changes assuming parallel trends); regression discontinuity (exploit an assignment cutoff).
4. **Traps to dodge.** Do not treat correlation as the causal effect. Do not assume "add more features" removes confounding — you can even open bias by conditioning on a collider. Remember each method's assumption can fail (no unmeasured confounding; parallel trends; valid instrument).
5. **Sanity-check and communicate.** Ask whether the key assumption is plausible for the data, and run robustness/placebo checks. Present it as: the problem is confounding and missing counterfactuals; here are methods and the assumption each buys you.
