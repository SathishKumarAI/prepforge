---
qid: ing_708df31019__star__local
question: 'Explain: Reference — Interviewnotes 2Ndjune2022'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 343
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:12:15-05:00'
sources: []
---

**Situation:**  
During my second‑year thesis I was tasked with building an image classification pipeline for a medical imaging dataset that had over 50,000 labeled X‑ray scans. The data were heavily imbalanced—only about 4% of the images contained fractures—and the evaluation metric required both high precision and recall.

**Task:**  
I needed to design a model that could handle class imbalance, provide interpretable predictions, and meet a target F1 score above 0.85 within two weeks for an upcoming conference submission.

**Action:**  
I leveraged transfer learning with a ResNet‑50 backbone pre‑trained on ImageNet, then fine‑tuned it on the dataset. To address imbalance I implemented focal loss and oversampled minority examples in each mini‑batch. For interpretability I added Grad‑CAM visualizations to highlight which regions influenced the model’s decisions. I also introduced early stopping based on a validation F1 score and used mixed‑precision training with NVIDIA Apex to speed up experiments.

**Result:**  
The final model achieved an F1 of 0.87, surpassing the target by 2 points while reducing inference time from 250 ms to 110 ms per image. The Grad‑CAM outputs were well received by clinicians, leading to a joint publication proposal. I learned that combining loss reweighting with visual explanations can both improve metrics and build stakeholder trust in ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
