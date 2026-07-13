---
qid: q026
question: "What is the difference between classification and regression?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd lead with the crisp distinction, then show I've owned the trade-off in production — that signals **Dive Deep**. Classification predicts a discrete label (fraud/not-fraud, product category), while regression predicts a continuous value (delivery ETA, expected revenue). The split changes everything downstream: loss function (cross-entropy vs. MSE/MAE), output layer (softmax/sigmoid vs. linear), and evaluation (precision/recall/AUC vs. RMSE/R²).

I'd make it concrete: "On a delivery-promise model, I initially framed late-vs-on-time as binary classification, but the business needed the *magnitude* of delay to set buffers, so I reframed it as regression on minutes-late and cut promise-miss rate by 18%." That shows I connect the modeling choice to the customer outcome — **Customer Obsession**.

I'd also note the boundary is fluid: you can bucket a continuous target into classes, or threshold a regression score into a decision. The right call depends on how the output gets consumed. In AWS terms I'd mention SageMaker built-in algorithms (Linear Learner, XGBoost) support both modes via a hyperparameter.

A bar-raiser listens for whether I tie the technical choice to a measurable business result rather than reciting textbook definitions.
