---
qid: vq_d72b9042b8__star__local
question: What is the ROC Curve, and how do you make one?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 407
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:22:05-05:00'
sources: []
---

**Situation** – In my last role as a data scientist at a fintech startup, we were building a fraud‑detection model for credit card transactions. The business required us to deliver a model with a false positive rate (FPR) below 5% while maintaining high true positive rates.

**Task** – My job was to evaluate the classifier’s discrimination ability and present a clear visual metric so stakeholders could see how different probability thresholds impacted performance. I had to generate an ROC curve, interpret it, and explain its trade‑offs in plain terms.

**Action** – I started by splitting the data into training and hold‑out test sets (70/30). Using scikit‑learn’s `predict_proba`, I obtained probability scores for each transaction. Then I called `roc_curve(y_true, y_scores)` to get FPR, TPR, and threshold arrays. With Matplotlib, I plotted FPR on the x‑axis against TPR on the y‑axis, added a diagonal “no‑skill” line, and highlighted the point closest to the top‑left corner (our chosen operating threshold). I also calculated the AUC with `roc_auc_score` to quantify overall performance. Throughout, I logged runtime metrics and saved the plot as a PNG for the executive deck.

**Result** – The ROC curve showed an AUC of 0.97, confirming strong discrimination. By selecting a threshold that gave an FPR of 4% and TPR of 92%, we reduced false alerts by 30% compared to the legacy rule‑based system. The visual helped non‑technical managers understand why higher thresholds reduce fraud detection rates. I learned that a well‑crafted ROC plot not only validates the model but also bridges data science with business decision‑making.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
