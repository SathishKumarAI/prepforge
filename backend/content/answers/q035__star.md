---
qid: q035
question: "Explain the bias-variance trade-off."
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** On a credit-risk project we had two candidate models: a linear one that underperformed everywhere at 72% and a deep tree ensemble that scored 99% on training but collapsed to 76% on validation. Neither was shippable.

**Task** I needed to diagnose both failures through the bias-variance lens and find the sweet spot in between.

**Action** I framed it clearly. The linear model was high bias, too simple to capture the real relationships, so it underfit both sets. The deep ensemble was high variance, so flexible it memorized noise and swung wildly on new data, overfitting. The trade-off is that reducing one tends to raise the other, and total error is bias plus variance plus irreducible noise. I moved toward the middle: a gradient-boosted model with limited depth, plus regularization and early stopping to hold variance down while keeping enough capacity to lower bias.

**Result** The tuned model landed at 88% on both training and validation, gap nearly closed. The lesson I keep applying: matching model complexity to the signal, not maxing it out, is the whole game.
