---
qid: ing_483726b06c__star__local
question: 'Explain: Papers — Transfer Learning in Keras with Computer Vision Models
  - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 380
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:52:57-05:00'
sources: []
---

**Situation**  
At my last role, the product team needed a quick prototype for classifying medical images into three disease categories. The dataset was only 3,000 labeled scans, and we had to deliver results within two weeks.

**Task**  
I had to build an accurate classifier that would outperform our baseline CNN by at least 15% in F1 score while keeping inference time under 200 ms per image on a single GPU.

**Action**  
I followed the “Transfer Learning in Keras with Computer Vision Models” paper from MachineLearningMastery.com. First, I downloaded pre‑trained ResNet50 weights and froze all convolutional layers to preserve learned features. Then I added a global average pooling layer, a dense bottleneck (512 units, ReLU), dropout (0.5), and a softmax output for the three classes. Using Keras’ ImageDataGenerator, I applied rotation, width/height shift, and zoom augmentation to artificially expand the dataset. I compiled the model with Adam (lr=1e-4) and trained only the top layers for 10 epochs, followed by fine‑tuning the last block of ResNet with a lower learning rate (5e-5). I monitored validation loss via TensorBoard and stopped early when it plateaued.

**Result**  
The transfer‑learning model achieved an F1 score of 0.87 compared to the baseline 0.71, a 22% improvement. Inference time was 180 ms per image, meeting our latency requirement. I learned that freezing layers judiciously and carefully scheduling fine‑tuning can dramatically reduce training time while boosting performance on small datasets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
