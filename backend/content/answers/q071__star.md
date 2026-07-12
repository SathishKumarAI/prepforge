---
qid: q071
question: "Explain Bayes' theorem and give an intuitive example."
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was building a diagnostic-style alerting rule for a rare infrastructure fault, and engineers kept panicking at alerts because the base rate of the fault was tiny, so most alerts were false.

**Task** I needed to quantify how much an alert actually raised the probability of a real fault, and communicate it intuitively.

**Action** I used Bayes' theorem: posterior probability of the fault given an alert is proportional to the likelihood of an alert given a fault times the prior probability of the fault. The classic intuition I gave was the medical-test one: even a test that's 99% accurate, applied to a disease that affects 1 in 1,000 people, yields mostly false positives, because the tiny prior dominates. Plugging our real numbers, a fault prior of 0.5% and a 95%-sensitive detector, the posterior probability of a true fault given an alert was only about 30%.

**Result** That reframing led us to add a second confirming signal before paging anyone, cutting false pages by 60%. The enduring lesson: without accounting for the base rate, people wildly overestimate what a positive signal means.
