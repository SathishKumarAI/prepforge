---
qid: q027
question: "What is overfitting and how can you prevent it?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** On a demand-forecasting model, I saw training error at a beautiful 2% while validation error sat at 19%. The model had basically memorized the training set and was useless on new weeks.

**Task** I needed to close that gap and get a model that generalized, not one that just looked great in training.

**Action** That gap is the textbook signature of overfitting. I attacked it on several fronts. I added L2 regularization and reduced the model's depth to lower capacity. I introduced dropout in the neural version and early stopping tied to validation loss. I expanded the training data with more historical seasons and augmentation, and I pruned noisy, low-signal features that were letting the model latch onto coincidences. Finally I used k-fold cross-validation instead of a single split so the results were trustworthy.

**Result** The train-validation gap shrank to about 3 points and validation error dropped to 11%. The lesson that stuck: a big gap between training and validation performance is the alarm bell, and the fix is almost always reducing capacity, adding regularization, or getting more data.
