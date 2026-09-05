---
qid: ing_1f76c289a5__star__local
question: 'Explain: Examples of Using Pre-Trained Models — Transfer Learning in Keras
  with Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 327
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:32:16-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with building an image classifier for a client’s e‑commerce platform that needed to recognize over 50 product categories within 24 hours. The dataset only had ~2,000 labeled images per category, far too few for training a deep CNN from scratch without overfitting.

**Task**  
I had to deliver a model that achieved >85 % top‑1 accuracy while keeping inference latency under 200 ms on the client’s edge devices.

**Action**  
I chose Keras’ pre‑trained ResNet50, freezing its convolutional base and replacing the final dense layer with a new 64‑unit ReLU block followed by a softmax output. Using `ImageDataGenerator`, I applied aggressive augmentation (random flips, rotations, zooms) to artificially enlarge the dataset. I then fine‑tuned the top two residual blocks with a low learning rate (1e-4) and employed early stopping on validation loss. To meet latency constraints, I exported the model to TensorFlow Lite and quantized it to 8‑bit integers.

**Result**  
The fine‑tuned model reached 88 % top‑1 accuracy on the holdout set and ran at ~180 ms per image on a Raspberry Pi 4, comfortably under the deadline. The experience reinforced that judiciously freezing layers and lightweight quantization can turn a pre‑trained vision backbone into a production‑ready solution in days rather than months.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
