---
qid: q060
question: "What is the difference between a population and a sample, and why do we sample?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** Leadership wanted to know the satisfaction level of all 4 million users before a product launch, and someone proposed emailing a survey to the entire base, which would have been slow, expensive, and low-response.

**Task** I needed a trustworthy estimate of overall satisfaction without measuring every single user.

**Action** I framed it as population versus sample. The population is every user we care about; a sample is a manageable subset we actually measure and use to infer about the whole. We sample because measuring everyone is usually too costly or impossible, and a well-drawn sample gets you close. The key is representativeness, so I used stratified random sampling across plan tiers and tenure to pull about 3,000 users, avoiding the bias of only hearing from the loudest accounts, and reported results with confidence intervals.

**Result** The sample estimated satisfaction at 72% plus or minus 2 points, and a later full census landed within that interval, validating the approach at a fraction of the cost. The lesson: you don't need the whole population, you need a representative sample and honesty about the margin of error.
