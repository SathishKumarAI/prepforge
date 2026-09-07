---
qid: ing_d2819376fb__faang__local
question: 'Explain: How to Use Pre-Trained Models — Transfer Learning in Keras with
  Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 537
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:49:46-05:00'
sources: []
---

**Clarify**  
The question asks how to apply transfer learning in Keras using pre‑trained computer‑vision models (e.g., VGG, ResNet). I’ll assume we’re working on a supervised image classification task with limited data and that the target dataset shares similar low‑level features with ImageNet.

**Approach**  
1. Load a pre‑trained backbone (`keras.applications`) without its top classifier.  
2. Freeze all convolutional layers to preserve learned weights.  
3. Add new dense layers tuned for our class count, optionally inserting dropout or batch‑norm.  
4. Compile with an optimizer (Adam) and a suitable loss (`categorical_crossentropy`).  
5. Train only the added head; after convergence unfreeze some top blocks and fine‑tune at a low learning rate.

**Depth**  
```python
base = tf.keras.applications.ResNet50(weights='imagenet',
                                      include_top=False,
                                      input_shape=(224,224,3))
for l in base.layers: l.trainable = False

x = tf.keras.layers.GlobalAveragePooling2D()(base.output)
x = tf.keras.layers.Dense(256, activation='relu')(x)
preds = tf.keras.layers.Dense(num_classes, activation='softmax')(x)

model = tf.keras.Model(base.input, preds)
model.compile(optimizer=tf.keras.optimizers.Adam(1e-3),
              loss='categorical_crossentropy',
              metrics=['accuracy'])
```
Fine‑tuning: `for l in base.layers[-20:]: l.trainable=True` and recompile with `learning_rate=1e-5`.

**Edge Cases**  
* If the target domain is very different (medical images), consider freezing fewer layers or using a smaller learning rate.  
* Imbalanced classes require weighted loss or focal loss.  
* Extremely small datasets may overfit even the head; use data augmentation.

**Optimize & Communicate**  
- Use `tf.data` pipelines for efficient loading and preprocessing.  
- Monitor validation accuracy to decide when to unfreeze layers.  
- Explain that freezing reduces trainable parameters, speeds up convergence, and mitigates catastrophic forgetting.  
- Highlight trade‑offs: more frozen layers → less overfitting but lower capacity; more fine‑tuning → better adaptation but risk of overfit.

This structured pipeline shows clear problem framing, stepwise implementation, complexity awareness (O(N) training), and thoughtful edge‑case handling—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
