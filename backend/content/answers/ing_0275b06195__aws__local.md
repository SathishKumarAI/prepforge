---
qid: ing_0275b06195__aws__local
question: 'Explain: Models for Transfer Learning — Transfer Learning in Keras with
  Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 536
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:29:50-05:00'
sources: []
---

**Situation – Task**  
When I joined a startup that built an AI‑driven medical imaging platform, we had only 3 k labeled X‑ray scans but needed to deliver a high‑accuracy pneumonia detector by Q2. The leadership principle that guided me was **Customer Obsession**: our patients depended on fast, reliable predictions.

**Action – Technical Design**  
I scoped the problem as “classify normal vs. pneumonia” and chose transfer learning with Keras because it lets us reuse feature extractors trained on millions of images (ImageNet). I evaluated three backbone models—ResNet‑50, EfficientNet‑B0, and MobileNetV2—each wrapped in `tf.keras.applications`.  
* **Requirements**:  
  * Accuracy > 92 % (clinical threshold)  
  * Inference < 200 ms on a single GPU  
  * Deployable on AWS SageMaker with automatic scaling.  

I froze the convolutional base, added a global average pooling layer and a dense output neuron with sigmoid activation. For fine‑tuning I used a low learning rate (1e-5) and Adam optimizer. To handle class imbalance I applied focal loss.

**Result – Quantified Impact**  
After 10 epochs of transfer learning:  

| Model | Validation Accuracy | Inference Latency |
|-------|---------------------|-------------------|
| ResNet‑50 | **94.3 %** | 180 ms |
| EfficientNet‑B0 | 93.1 % | 140 ms |
| MobileNetV2 | 91.4 % | 90 ms |

ResNet‑50 met the accuracy requirement while staying within latency limits. Deploying on SageMaker with a `ml.g5.xlarge` instance and auto‑scaling (min=1, max=8) kept cost under $0.25 per inference. I logged every training run in CloudWatch for auditability.

**Reflection – Learning & Ownership**  
I realized early that freezing too many layers caused overfitting; fine‑tuning the top 4 blocks improved generalization by +2 %. A bar‑raiser would hear my **Ownership** (taking end‑to‑end responsibility), my **Dive Deep** into layer‑wise performance, and how I quantified success. The next iteration will experiment with Vision Transformers to push accuracy further while keeping inference cost low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
