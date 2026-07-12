---
qid: q061
question: "What is a p-value and how do you interpret it?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** On a checkout-flow team, product wanted to ship a new one-click purchase button, and the PM kept asking me "is the lift real or just noise?" We'd run a two-week test and seen a 1.8% conversion bump.

**Task** I had to decide whether that bump was strong enough evidence to roll out, and explain the statistics to non-stats stakeholders without hand-waving.

**Action** I framed the null hypothesis as "no difference between variants" and ran a two-proportion z-test. The p-value came back at 0.03, which I explained as: if there truly were no effect, we'd see a bump this large or larger only 3% of the time. I stressed it is NOT the probability the hypothesis is true, and I paired it with the effect size and confidence interval so nobody over-read a single number.

**Result** We shipped, and the lift held in the following quarter at roughly 1.6%. The lasting win was that the team stopped treating p < 0.05 as magic and started asking about practical significance too.
