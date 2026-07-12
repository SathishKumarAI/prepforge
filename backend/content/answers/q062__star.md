---
qid: q062
question: "What are Type I and Type II errors?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** I built a fraud-detection classifier for a payments startup, and two failure modes had very different costs: blocking a legit customer versus letting a fraudster through.

**Task** I needed to tune the model's threshold deliberately rather than defaulting to 0.5, and I had to make the tradeoff legible to the risk team.

**Action** I mapped everything to Type I and Type II errors. A Type I error, a false positive, meant flagging a good transaction and annoying a paying customer. A Type II error, a false negative, meant missing actual fraud and eating a chargeback. Because a missed fraud cost us about eight times more than a false alarm, I lowered the decision threshold to catch more fraud, accepting more false positives. I plotted the confusion matrix at several thresholds so the tradeoff was concrete.

**Result** We cut missed fraud by 22% while keeping false positives under a 3% ceiling the support team could handle. The takeaway I carry: the "right" error balance is a business decision, not a default.
