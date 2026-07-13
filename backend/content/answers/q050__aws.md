---
qid: q050
question: "What is data leakage in machine learning and how do you prevent it?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd define it, then treat it as a discipline I own — **Insist on the Highest Standards** and **Dive Deep**. Data leakage is when information unavailable at prediction time sneaks into training, so the model looks great offline but collapses in production. Classic forms: target leakage (a feature that is a proxy for or computed after the label — e.g., "payment_received" predicting "will_pay"), train/test contamination (fitting scalers, imputers, or encoders on the full dataset before splitting), and temporal leakage (using future data to predict the past).

I prevent it with rules I enforce: split *first*, then fit every transform on the training fold only inside a pipeline; use temporal or grouped splits when the data has that structure; and audit any suspiciously strong feature by asking "would this value actually exist at inference time?"

I'd ground it: "A churn model showed a too-good 0.97 AUC; digging in, a 'days_since_cancel' feature was leaking the outcome. Removing it dropped AUC to a realistic 0.84 — but that model actually worked in production." Catching that before launch is real **Ownership**.

On AWS I encapsulate transforms in SageMaker Pipelines and serve via Feature Store to guarantee point-in-time-correct features. A bar-raiser listens for whether I'm suspicious of results that look too good.
