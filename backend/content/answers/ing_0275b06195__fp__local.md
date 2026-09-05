---
qid: ing_0275b06195__fp__local
question: 'Explain: Models for Transfer Learning — Transfer Learning in Keras with
  Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 498
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:10:21-05:00'
sources: []
---

**Why we transfer a vision model**

Computer‑vision tasks all share the *feature extraction* problem: given an image \(x\), produce a representation \(\phi(x)\) that is useful for any downstream classifier.  
In supervised learning, the best way to learn \(\phi\) is to expose it to many labeled images; this requires huge datasets and compute.  

**The transfer‑learning principle**

Let \(f_{\theta}\) be a deep CNN trained on ImageNet (1 M images). For any new dataset \(D'\), we can split the network into

* **Feature extractor** \(g_{\phi}(x)=\text{top‑layer of } f_{\theta}\)
* **Task head** \(h_{\psi}(\cdot)\) (few dense layers)

We freeze or lightly fine‑tune \(\phi\), and train only \(\psi\).  
Why does this work? Because *the lower layers learn generic visual primitives*—edges, textures, shapes—that are nearly invariant across tasks. The higher layers encode task‑specific combinations; by retraining them we adapt to the new label space while preserving the low‑level knowledge.

**Keras implementation**

```python
base = tf.keras.applications.ResNet50(weights='imagenet',
                                      include_top=False,
                                      input_shape=(224,224,3))
x = base.output
x = GlobalAveragePooling2D()(x)
preds = Dense(num_classes, activation='softmax')(x)

model = Model(inputs=base.input, outputs=preds)

# Freeze early layers
for layer in base.layers[:-4]:
    layer.trainable = False

model.compile(optimizer='adam', loss='categorical_crossentropy',
              metrics=['accuracy'])
```

**Non‑obvious insight**

Fine‑tuning *only* the last few layers is often enough, but **freezing all but one block can hurt if your new dataset contains very different low‑level statistics (e.g., medical images).** In such cases, unfreeze an earlier block to let the network re‑learn edge detectors that are more relevant—this subtle “block‑wise fine‑tuning” balances stability and adaptability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
