---
qid: q028
question: "Why do we split data into training, validation, and test sets?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd frame this as protecting an honest estimate of real-world performance — pure **Insist on the Highest Standards**. Training data fits parameters; the validation set tunes hyperparameters and picks models; the test set is touched once, at the end, to estimate how the model behaves on data it has never influenced. If you tune on the test set, your reported metric is optimistic and you'll disappoint the customer in production.

I'd show ownership with a concrete rule I enforce: "For a demand-forecasting model I split *temporally* — train on Jan–Sep, validate on Oct, test on Nov–Dec — because a random split leaks future information into the past and inflated our accuracy by ~9 points." That demonstrates **Dive Deep**: I match the split to the problem's structure (time series, grouped users, cold-start entities) rather than defaulting to random.

I'd add the operational view: on AWS I keep the test set immutable in S3 with versioning, and reserve final evaluation for a SageMaker Pipelines gate before model registry approval.

A bar-raiser listens for whether I understand *why* leakage between splits silently corrupts results, not just that three sets exist.
