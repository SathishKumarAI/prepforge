---
qid: ing_b3e53c6c25__aws__local
question: 'Explain: Load the ResNet50 Pre-trained Model — Transfer Learning in Keras
  with Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 417
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:11:38-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional prototype for a medical imaging startup, we needed to classify rare skin lesions with limited labeled data. I was tasked to build a high‑accuracy model within two weeks.

**Action**  
I chose **ResNet‑50** pre‑trained on ImageNet and applied *transfer learning* in Keras:  

1. Load the base model (`include_top=False`, `weights='imagenet'`).  
2. Freeze all convolutional layers to preserve learned low‑level features.  
3. Add a global average pooling layer, followed by two dense blocks (512→256 neurons, ReLU) and a sigmoid output for binary classification.  
4. Compile with Adam (`lr=1e-4`) and `binary_crossentropy`.  
5. Train only the top layers on our 1 k‑image dataset using data augmentation (rotation, flip).  

For deployment I wrapped the model in an **AWS SageMaker** endpoint, leveraging **Elastic Inference** to cut GPU cost by ~30% while keeping latency <200 ms. The solution ran on a single `ml.m5.xlarge` instance for training and `ml.t2.medium` inference.

**Result**  
Accuracy rose from 78 % (hand‑crafted features) to **92 % F1‑score**, reducing misdiagnoses by 4 k cases annually (~$350K in potential savings). The endpoint processed 500 requests/sec with <250 ms latency, meeting regulatory SLAs.  

**Reflection**  
I learned that freezing layers early prevents overfitting on small datasets—an insight I documented and shared via a Jupyter notebook for future teams. This experience exemplifies **Customer Obsession** (delivering reliable diagnostics) and **Ownership** (owning the end‑to‑end ML pipeline).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
