---
qid: ing_7c0264c2ae__star__local
question: 'Explain: Metrics: when accuracy lies — Ml And Dl Foundations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 334
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:41:48-05:00'
sources: []
---

**Situation:**  
During my senior capstone, we built a convolutional neural network to classify plant diseases from leaf images for an agritech startup. The initial model achieved 94 % accuracy on the test set, which looked great.

**Task:**  
I was tasked with validating that this high accuracy reflected true performance and not just over‑fitting or label noise, especially because the company’s sales pitch relied on “almost perfect” predictions.

**Action:**  
First, I examined the confusion matrix: several misclassifications clustered around *early blight* vs. *late blight*. I calculated precision, recall, and F1 for each class to reveal low recall for late blight (0.55). Then I performed a 5‑fold cross‑validation with stratified splits to assess variance; accuracy dropped from 94 % to an average of 87 %. Finally, I introduced a calibration step using temperature scaling, which improved the model’s confidence scores and increased the area under the ROC curve from 0.92 to 0.97.

**Result:**  
The revised metrics showed that while overall accuracy was misleading, the model performed well on high‑impact classes, achieving an F1 of 0.83 for late blight. The startup adjusted its marketing to emphasize precision for critical diseases, and I learned that accuracy alone can hide class imbalance problems; always drill down with per‑class metrics and cross‑validation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
