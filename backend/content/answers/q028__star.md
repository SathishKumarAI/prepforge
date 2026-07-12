---
qid: q028
question: "Why do we split data into training, validation, and test sets?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** I joined a fraud-detection team that reported 96% accuracy, but production performance was closer to 80%. Digging in, I found they tuned hyperparameters on the same set they reported final numbers on, so they'd leaked information and fooled themselves.

**Task** I had to establish an honest evaluation protocol so our offline numbers actually predicted production.

**Action** I set up a clean three-way split. The training set fit the model parameters. The validation set was where we tuned hyperparameters, picked thresholds, and did model selection. The test set was locked in a vault and touched exactly once, at the very end, to get an unbiased estimate of real-world performance. Because fraud is time-dependent, I split chronologically rather than randomly to avoid leaking future information, and I checked that class balance was preserved across splits.

**Result** Our reported test accuracy of 84% finally matched production within two points, so stakeholders could trust the numbers. The lesson: without a held-out test set you never touch during development, you're just measuring how well you memorized your own tuning.
