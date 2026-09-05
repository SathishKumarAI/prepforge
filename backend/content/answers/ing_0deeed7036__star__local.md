---
qid: ing_0deeed7036__star__local
question: 'Explain: Pre-Trained Model as Classifier — Transfer Learning in Keras with
  Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 353
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:56:20-05:00'
sources: []
---

**Situation** – In my last internship at a medical imaging startup, the team needed to classify rare skin lesions from dermoscopic images. Our dataset had only ~1,500 labeled samples, far too small for training a deep CNN from scratch without overfitting.

**Task** – I was tasked with building an accurate classifier that could achieve >85 % top‑1 accuracy within two weeks, using the limited data while keeping inference time under 200 ms on a laptop GPU.

**Action** – I leveraged Keras’ transfer learning workflow. First, I loaded ResNet50 pre‑trained on ImageNet and froze all convolutional layers to preserve learned low‑level features. Then I added a global average pooling layer followed by two dense blocks (512→256 units with ReLU) and a final softmax output for our 5 lesion classes. To combat overfitting, I applied data augmentation (random rotations, flips, brightness shifts) and used an Adam optimizer with a learning rate scheduler that reduced LR on plateau. I trained only the top layers for 10 epochs, then fine‑tuned the last two ResNet blocks for another 8 epochs, monitoring validation loss.

**Result** – The model reached 88 % top‑1 accuracy on a held‑out test set and achieved an inference latency of ~150 ms. I learned that freezing early layers and carefully tuning the learning rate schedule can dramatically boost performance when data is scarce, and that Keras’ functional API makes experimenting with different fine‑tuning strategies straightforward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
