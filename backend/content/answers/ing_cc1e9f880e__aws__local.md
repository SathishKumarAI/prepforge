---
qid: ing_cc1e9f880e__aws__local
question: What Is Transfer Learning? — Transfer Learning in Keras with Computer Vision
  Models - MachineLearningMastery.com
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 507
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:02:31-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Question:** *What is transfer learning and how would you apply it to a computer‑vision model in Keras?*  

**Situation / Task**  
I was leading the prototype of an image‑classification service for a retail client who had only 3 k product images but needed 95 % accuracy on a 200‑class catalog. Training from scratch would take weeks and cost ~$2K per GPU hour.

**Action**  
1. **Choose a pre‑trained backbone** – I selected ResNet‑50 trained on ImageNet (≈14M images).  
2. **Freeze lower layers** – the first 30 layers capture generic edges/texture; keeping them frozen preserved learned features and reduced train time by 80 %.  
3. **Add a custom classifier head** – a global average pooling layer + Dense(200, softmax) for our classes.  
4. **Fine‑tune selectively** – unfreezed the last 10 layers and used a lower learning rate (1e–4) with Adam; this reduced overfitting while still adapting to product‑specific features.  
5. **Keras implementation** – `model = tf.keras.applications.ResNet50(include_top=False, weights='imagenet', input_shape=(224,224,3))`; then stack the head and compile.

**Result**  
- Accuracy jumped from 70 % (baseline) to 96 % in 2 days of training.  
- GPU cost fell from ~$2000 to <$300.  
- Deployment on AWS Lambda + SageMaker endpoints achieved <250 ms inference latency, 99.9 % uptime.

**Reflection / Learnings**  
I realized that *ownership* means questioning assumptions (did we really need a custom backbone?) and *dive deep* into layer‑wise behavior (monitoring activations). The trade‑off was slightly higher memory usage on Lambda, but the cost savings outweighed it. I documented the process for the team, turning this into a reusable pipeline—an example of *Invent & Simplify*.  

---  

**Leadership Principles Highlighted:**  
- **Ownership** – I questioned the baseline approach and drove a solution that reduced costs dramatically.  
- **Dive Deep** – Layer‑wise analysis and fine‑tuning decisions were data‑driven, not guesswork.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
