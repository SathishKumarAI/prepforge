---
qid: q026
question: "What is the difference between classification and regression?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** Early in a subscription-analytics project, a teammate framed "predict customer value" as a churn yes/no problem, but the business actually wanted a dollar figure. We'd spent a week building the wrong model.

**Task** I had to reset the framing and make the classification-versus-regression distinction concrete so we picked the right target and metrics.

**Action** I laid it out simply: classification predicts a discrete label, like churn or no-churn, and you evaluate it with accuracy, precision, recall, or AUC. Regression predicts a continuous number, like expected lifetime revenue, and you evaluate it with MAE, RMSE, or R-squared. We actually needed both, so I split it into a churn classifier and a revenue regressor, using logistic regression for the first and gradient-boosted trees for the second, each with the appropriate loss function and metric.

**Result** The regressor hit an MAE of about $42 on monthly value, and the two-model split let marketing target high-value at-risk customers specifically. My takeaway: the shape of the output you need, category versus quantity, dictates the whole modeling and evaluation approach.
