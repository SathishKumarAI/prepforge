---
qid: q065
question: "What is a confidence interval and how should it be interpreted?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Confirm we're discussing a frequentist confidence interval (CI) for a parameter like a mean, and that the interviewer likely wants the correct interpretation versus the common misreading.

**Approach** — Define it, give the construction, then state the precise interpretation and the trap.

**Depth** — A 95% CI is an interval computed from data such that, *if we repeated the sampling process many times, 95% of the intervals constructed this way would contain the true parameter*. For a mean it looks like `X̄ ± z * (σ/√n)` (or t for unknown σ). The confidence level is a property of the *procedure*, not of any single interval.

**Edge cases** — The wrong reading: "there's a 95% probability the true value lies in this interval." Once computed, the interval either contains θ or it doesn't — the randomness is in the procedure. Wider CIs come from small n or high variance; asymmetric parameters may need bootstrap CIs.

**Optimize & communicate** — Report CIs alongside point estimates to convey uncertainty, and prefer them to bare p-values. Narrate carefully: "95% refers to the long-run coverage of the method, not this specific interval." That precise phrasing is exactly the signal interviewers score.
