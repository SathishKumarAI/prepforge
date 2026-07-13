---
qid: q065
question: "What is a confidence interval and how should it be interpreted?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd anchor this to **Are Right A Lot**: confidence intervals are routinely misinterpreted, so precise language signals rigor. A 95% CI is a range estimate for a parameter such that, *over many repeated samples*, 95% of the intervals so constructed would contain the true value. It quantifies the uncertainty around a point estimate; a wider interval means less precision, driven by higher variance or smaller n.

The subtle correction I make: it does **not** mean there's a 95% probability the true value lies in *this specific* interval, the parameter is fixed; the randomness is in the interval. I'd give a concrete example where reporting the interval changed a decision: two model variants had accuracies of 91% and 92%, but their CIs overlapped heavily, so I told stakeholders the difference wasn't real and we shouldn't switch, avoiding a pointless migration. I stress that I always report CIs alongside point estimates so people see the uncertainty, and I compute them via the standard error or, for messy distributions, bootstrapping in a SageMaker notebook. A bar-raiser listens for the correct frequentist interpretation and for whether you use interval overlap to avoid over-claiming tiny differences, not just parroting the 95 percent chance line.
