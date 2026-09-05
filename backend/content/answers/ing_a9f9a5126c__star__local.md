---
qid: ing_a9f9a5126c__star__local
question: 'Explain: Computer Vision Interview Questions — Ml Interview Prep'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 333
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:12:33-05:00'
sources: []
---

**Situation:**  
During my internship at a health‑tech startup, we had to develop an automated system to detect diabetic retinopathy from retinal fundus images. The dataset was imbalanced (only 12% positive cases) and the existing baseline model achieved 78 % accuracy but missed many early‑stage lesions.

**Task:**  
My goal was to improve detection sensitivity while keeping false positives low enough for clinicians to trust the tool, aiming for at least a 90 % F1 score within two weeks before our quarterly demo.

**Action:**  
I first applied data augmentation (random rotations, flips, contrast adjustments) and oversampled minority classes. Then I swapped out the plain ResNet‑50 backbone for EfficientNet‑B4 to reduce overfitting and added a focal loss layer to emphasize hard negatives. I used TensorFlow 2.x with Keras callbacks for early stopping and monitored AUROC on a held‑out validation set. After tuning the learning rate schedule (cosine decay) and batch size, I fine‑tuned the last convolutional block to capture subtle vascular patterns.

**Result:**  
The new model achieved an F1 score of 92.4 % and an AUROC of 0.97 on the test set—up from 78 %. Clinicians reported that false positives dropped by 35 %, making the system ready for pilot deployment. I learned how to balance augmentation, architecture choice, and loss functions to tackle class imbalance in medical imaging.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
