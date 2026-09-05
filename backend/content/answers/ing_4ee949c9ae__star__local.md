---
qid: ing_4ee949c9ae__star__local
question: 'Explain: Load the InceptionV3 Pre-Trained Model — Transfer Learning in
  Keras with Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 330
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:06:29-05:00'
sources: []
---

**Situation:**  
In a university capstone I was tasked with building an image classifier for a client’s plant disease dataset—over 10,000 images across 15 species. The baseline CNN I had coded from scratch only reached ~70 % accuracy after several weeks.

**Task:**  
I needed to boost performance quickly and reduce training time while keeping the model lightweight enough to deploy on edge devices.

**Action:**  
I switched to transfer learning with Keras’ InceptionV3. First, I imported `InceptionV3(weights='imagenet', include_top=False, input_shape=(299,299,3))` and froze all convolutional layers (`layer.trainable = False`). I added a global average pooling layer followed by two dense blocks (512 units with ReLU, dropout 0.5) and a softmax output for the 15 classes. Using `ImageDataGenerator`, I rescaled images to 299 × 299 and applied random flips/rotations for augmentation. I compiled the model with Adam(1e-4) and categorical crossentropy, then fine‑tuned the top few layers (unfreezing them one by one) while monitoring validation loss.

**Result:**  
Accuracy jumped from 70 % to 92 % within 48 hours of training on a single GPU. The final model size was only ~25 MB, suitable for mobile deployment. I learned how careful layer freezing and progressive fine‑tuning can dramatically improve results without overfitting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
