---
qid: ing_d2819376fb__think__local
question: 'Explain: How to Use Pre-Trained Models — Transfer Learning in Keras with
  Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 478
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:51:13-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- Ask what level of familiarity the learner has (Python basics? Keras/TensorFlow?).  
- Assume they already have a dataset and want to speed up training.  
- Note that “pre‑trained” refers to models trained on ImageNet or similar.

**2️⃣ Pick a mental model**  
- Think of transfer learning as *feature extraction* + *fine‑tuning*.  
  - Feature extraction: freeze early layers, use their learned filters.  
  - Fine‑tuning: unfreeze some top layers and retrain them on the new task.  
- Map this to Keras API: `tf.keras.applications`, `Model` subclassing.

**3️⃣ Step‑by‑step reasoning**  
1. **Load a base model** (e.g., ResNet50) with `include_top=False`.  
2. **Add custom head** – global pooling → dense layers → output.  
3. **Freeze base layers** (`layer.trainable = False`).  
4. **Compile & train** on your data; monitor loss/accuracy.  
5. **Optional fine‑tuning**: unfreeze last few blocks, recompile with a lower LR, continue training.  

Explain each code block’s purpose and how Keras handles weight sharing.

**4️⃣ Common pitfalls to avoid**  
- Forgetting to resize inputs to the base model’s expected shape (e.g., 224×224).  
- Using `include_top=True` when your number of classes differs from ImageNet.  
- Training with a too‑high learning rate after unfreezing layers → weights blow up.  
- Not normalizing pixel values in the same way as the pre‑trained model.

**5️⃣ Sanity‑check & verbalize**  
- Verify that loss decreases and accuracy improves on validation set.  
- Check that the base model’s layers remain unchanged (weights stay constant) during feature extraction.  
- When fine‑tuning, observe a slight dip before the new layers adjust.  

Conclude by summarizing: “You load a pre‑trained backbone, attach a small classifier, freeze or unfreeze as needed, compile with an appropriate optimizer, and train.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
