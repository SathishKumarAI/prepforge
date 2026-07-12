---
qid: q063
question: "How would you design an A/B test?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** Growth wanted to test a redesigned onboarding email sequence, and the previous "test" had been eyeballed over a weekend with no rigor, so nobody trusted the result.

**Task** I was asked to design a proper A/B test that would give us a defensible go/no-go on the new sequence.

**Action** I started from the metric: activation rate within seven days. I ran a power analysis, and to detect a 2% absolute lift at 80% power and alpha 0.05, I needed about 12,000 users per arm, which meant a two-week run. I randomized at the user level, checked that control and treatment were balanced on signup source, and pre-registered the primary metric so we wouldn't cherry-pick. I also set guardrail metrics like unsubscribe rate, and I refused to peek and stop early.

**Result** Treatment lifted activation by 2.4%, significant at p = 0.01, with no guardrail regressions. We rolled it out to 100%. The discipline of pre-registering and sizing upfront is what made leadership actually act on it.
