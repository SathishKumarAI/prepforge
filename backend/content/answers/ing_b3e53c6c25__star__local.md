---
qid: ing_b3e53c6c25__star__local
question: 'Explain: Load the ResNet50 Pre-trained Model — Transfer Learning in Keras
  with Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 343
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:31:45-05:00'
sources: []
---

**Situation**  
At a summer internship I was tasked with building an image classifier for a wildlife conservation project. The dataset had only ~3,000 annotated photos across 12 species, but the evaluation metric required >85 % top‑5 accuracy on unseen camera trap images.

**Task**  
I needed to quickly prototype a model that leveraged existing visual knowledge while adapting to our limited data, and deliver results within two weeks.

**Action**  
I started by importing `ResNet50` from `tensorflow.keras.applications`, setting `include_top=False` and `weights='imagenet'`. I added a global average pooling layer, followed by a dense bottleneck (512 units, ReLU) and an output softmax for 12 classes. To prevent overfitting, I froze the first 80 layers and applied a learning rate schedule (`ReduceLROnPlateau`) with early stopping on validation loss. Data augmentation (random flips, rotations, zooms) was implemented via `ImageDataGenerator`. Training ran on an NVIDIA V100 for 12 epochs; I monitored GPU memory usage to keep it under 8 GB.

**Result**  
The transfer‑learning model achieved 87 % top‑5 accuracy on the hold‑out set, surpassing the target and outperforming a baseline CNN by ~15 %. I learned how to balance feature extraction with fine‑tuning, and that careful layer freezing can dramatically reduce training time while preserving performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
