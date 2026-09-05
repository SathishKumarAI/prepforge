---
qid: ing_0794d7620c__star__local
question: 'Explain: Posts — Transfer Learning in Keras with Computer Vision Models
  - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 325
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:44:02-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with building a plant disease detector for a precision‑agriculture startup. The dataset only had ~3,000 images, but we needed an accuracy above 92 % to be useful on the field.

**Task**  
I had to create a high‑performance classifier within two weeks, using limited compute and data.

**Action**  
I chose ResNet50 as the base model in Keras. I froze all convolutional layers and added a new GlobalAveragePooling2D followed by a dense layer with softmax for 5 disease classes. Using ImageDataGenerator I applied rotation, zoom, and horizontal flip to augment the training set. Then I compiled the model with Adam (lr = 1e‑4) and trained only the top layers for 10 epochs. After that I unfreezed the last two blocks of ResNet50 and fine‑tuned with a reduced learning rate (5e‑5) for another 15 epochs, monitoring validation loss to avoid overfitting.

**Result**  
The final model achieved 94.7 % accuracy on a held‑out test set, surpassing our target by almost 3 points. Training time dropped from weeks (training from scratch) to under 48 hours on a single GPU. I learned that careful layer freezing and progressive fine‑tuning are key to leveraging pre‑trained vision models effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
