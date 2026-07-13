---
qid: q066
question: "What are the main approaches to feature selection?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Confirm the goal behind selection — fewer features for speed, less overfitting, or interpretability — since that biases which method you recommend. Assume a supervised setting with a mix of relevant and noisy features.
2. **Mental model.** Organize the whole answer around three buckets defined by *when the model enters the loop*: before it (filter), around it (wrapper), inside it (embedded). That taxonomy is the skeleton to hang everything on.
3. **Reason step by step.** Filter = model-agnostic statistics (correlation, chi-square, mutual information, ANOVA F, variance threshold): fast, but blind to interactions. Wrapper = train-and-evaluate subsets (RFE, forward/backward): accurate but expensive. Embedded = selection during training (L1/Lasso zeroing weights, tree importances): a cost/quality middle ground.
4. **Traps to dodge.** Do not conflate feature *selection* (keeps original features) with PCA-style dimensionality *reduction* (creates new combined ones). Do not claim correlation alone suffices. Beware leakage — fit selection on training folds only.
5. **Sanity-check and communicate.** Confirm your recommendation fits the constraints (dimensionality, compute, model type). Deliver the three named buckets with one example and one trade-off each — that structure signals command of the topic.
