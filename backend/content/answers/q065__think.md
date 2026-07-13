---
qid: q065
question: "What is a confidence interval and how should it be interpreted?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Establish that we are estimating a fixed but unknown population parameter (say a mean) from a sample, at a stated confidence level like 95%. Flag that you will give the *frequentist* interpretation.
2. **Mental model.** Think "estimate ± margin," where margin = critical value × standard error, e.g. x̄ ± 1.96·(s/√n). The interval is a random object; the parameter is a fixed target.
3. **Reason step by step.** Explain the procedure produces intervals that, over many repeated samples, capture the true value ~95% of the time. So confidence is a property of the *method*, not of the one interval in front of you. Wider interval ⇒ more uncertainty; narrows with larger n and lower variability.
4. **Traps to dodge.** Do not say "95% probability the true value is in *this* interval" — in frequentist terms that is wrong. Do not confuse it with a range covering 95% of individual data points. Remember it narrows, not widens, as n grows.
5. **Sanity-check and communicate.** Verify direction: more data → tighter interval, matches intuition. Communicate the repeated-sampling meaning crisply and note a CI conveys more than a bare p-value because it shows magnitude and precision.
