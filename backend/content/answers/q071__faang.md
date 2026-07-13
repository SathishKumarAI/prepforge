---
qid: q071
question: "Explain Bayes' theorem and give an intuitive example."
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Confirm they want the formula, the intuition (updating beliefs with evidence), and a worked example — the medical-test case is the classic.

**Approach** — State the theorem, name each term, then walk a concrete calculation to expose the base-rate effect.

**Depth** — Bayes' theorem: `P(A|B) = P(B|A) * P(A) / P(B)`. Here P(A) is the prior, P(B|A) the likelihood, P(B) the evidence (marginal), and P(A|B) the posterior. It formalizes updating a belief after seeing data. Example: a disease affects 1% of people (prior). A test is 99% sensitive and 99% specific. If you test positive, `P(disease|+) = (0.99·0.01) / (0.99·0.01 + 0.01·0.99) = 0.0099/0.0198 = 50%`. Despite a "99% accurate" test, there's only a 50% chance you're sick — because the low base rate produces as many false positives as true positives.

**Edge cases** — Ignoring the prior (base-rate neglect) is the classic error. A rare condition plus imperfect specificity floods results with false positives. Priors must be honest, not convenient.

**Optimize & communicate** — Compute the denominator via the law of total probability to avoid mistakes. Narrate: "The counterintuitive part is that base rates dominate — that's why screening rare conditions needs confirmatory tests." Landing that insight is the signal.
