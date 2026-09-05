---
qid: ing_4bc5fadb7e__star__local
question: 'Explain: Explain Confusion Matrix. — Machine Learning Interview Questions
  and Answers - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 368
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:59:52-05:00'
sources: []
---

**Situation** – While working on a fraud‑detector for an online payments company, the data science team noticed that our model’s overall accuracy was hovering around 93 %. Yet senior management kept flagging false positives as a major pain point because legitimate transactions were being blocked.

**Task** – I had to quantify exactly how many true positives, false positives, true negatives, and false negatives we were dealing with so the product team could see the trade‑off between catching fraud and keeping user experience smooth.

**Action** – I built a confusion matrix from our test set predictions. Using scikit‑learn’s `confusion_matrix`, I plotted the 2×2 table: TP = 12,345, FP = 3,210, FN = 1,987, TN = 82,678. From there I calculated precision (TP/(TP+FP) ≈ 79%), recall (TP/(TP+FN) ≈ 86%) and the F1‑score (≈ 82%). I also created a heatmap to visually highlight where the model was over‑flagging, and suggested adjusting the decision threshold from 0.5 to 0.35 to reduce false positives by ~30% while only dropping recall by ~4%.

**Result** – After implementing the new threshold, we reduced blocked legitimate payments from 3,210 to 2,250 per day (≈ 30 % drop) and increased user satisfaction scores by 12 %. I learned that a confusion matrix is not just a table; it’s a diagnostic tool that drives actionable decisions on model calibration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
