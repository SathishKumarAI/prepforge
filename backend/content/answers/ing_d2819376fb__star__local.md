---
qid: ing_d2819376fb__star__local
question: 'Explain: How to Use Pre-Trained Models — Transfer Learning in Keras with
  Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 334
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:30:26-05:00'
sources: []
---

**Situation** – In my last role, we had a small dataset of 2,000 medical X‑ray images for pneumonia detection, but our model’s accuracy hovered around 70 %. The time window to launch the solution was only six weeks before the regulatory audit.

**Task** – I needed to boost performance without training from scratch, keeping inference latency under 200 ms on a single GPU. The goal was an overall accuracy above 90 % and a deployable model size <50 MB.

**Action** – I adopted transfer learning in Keras:  
1. Imported ResNet‑50 pre‑trained on ImageNet and froze the first 40 layers to preserve low‑level features.  
2. Added a global average pooling layer, followed by two dense blocks (512→256 units) with batch normalization and dropout (0.4).  
3. Fine‑tuned only the top 10 layers using a lower learning rate (1e-5) and Adam optimizer, training for 12 epochs with early stopping on validation loss.  
4. Used Keras ModelCheckpoint to keep the best weights and TensorBoard for monitoring class‑wise precision/recall.

**Result** – Accuracy rose from 70 % to 92.3 %, recall for pneumonia reached 94 %. The final model size was 48 MB, inference time 180 ms on a single GPU. I learned that selective fine‑tuning and careful regularization are key when adapting ImageNet models to niche domains with limited data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
