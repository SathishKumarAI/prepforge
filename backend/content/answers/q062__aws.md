---
qid: q062
question: "What are Type I and Type II errors?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd frame this with **Insist on the Highest Standards** and **Customer Obsession**: choosing which error to tolerate is a values decision, not just math. A Type I error is a false positive, rejecting a true null, concluding an effect exists when it doesn't; its rate is alpha. A Type II error is a false negative, failing to detect a real effect; its rate is beta, and power is 1-beta. There's a trade-off: lowering alpha raises beta unless you increase sample size.

The judgment I signal is that the *cost asymmetry* drives the choice, and I anchor it to the customer. I'd give a concrete example: for a medical or fraud classifier, a Type II error (missing real fraud or disease) can harm customers far more than a Type I, so I'd loosen the threshold and accept more false positives, then size the sample for high power, say 80-90%, up front. For a costly product launch, the reverse. I'd run the power analysis before the experiment, not after. A bar-raiser listens for whether you reason about the relative *cost* of each error type and do power analysis proactively, rather than defaulting to alpha=0.05 without thought.
