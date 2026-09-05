---
qid: ing_1f76c289a5__fp__local
question: 'Explain: Examples of Using Pre-Trained Models — Transfer Learning in Keras
  with Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 572
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:12:53-05:00'
sources: []
---

**Why transfer learning works for vision**

The core problem in deep learning is *data scarcity*: training a convolutional network from scratch requires millions of labeled images to learn low‑level filters (edges, textures) and high‑level concepts (faces, cars). In practice we often have only thousands or hundreds. A pre‑trained model has already solved the first part—learning generic visual primitives on ImageNet—so the only thing left is to *adapt* those features to a new task.

**The mathematical principle**

Let \(f_\theta(x)\) be a convolutional feature extractor and \(g_{\phi}(x)\) its classifier. Training from scratch optimises \(\min_{\theta,\phi} L(g_{\phi}(f_{\theta}(x)), y)\). With transfer learning we freeze most of \(\theta\) (or fine‑tune only the last layers), reducing the optimisation to a smaller parameter space \(\{\phi, \theta'\}\). This is an *inductive bias*: we assume that lower‑level features are generic across visual domains. The loss surface shrinks dramatically, leading to faster convergence and less overfitting.

**Keras workflow**

```python
base = tf.keras.applications.ResNet50(weights='imagenet',
                                      include_top=False,
                                      input_shape=(224,224,3))
base.trainable = False          # freeze convolutional base

x = tf.keras.layers.GlobalAveragePooling2D()(base.output)
x = tf.keras.layers.Dense(256, activation='relu')(x)
pred = tf.keras.layers.Dense(num_classes, activation='softmax')(x)

model = tf.keras.Model(inputs=base.input, outputs=pred)
model.compile(optimizer='adam', loss='categorical_crossentropy',
              metrics=['accuracy'])
```

*Fine‑tuning*: after initial training set `base.trainable=True` and lower the learning rate (e.g., 1e-5) to adjust only the top layers.

**Non‑obvious insight**

Transfer learning is not a magic “copy‑paste”. The *depth* of fine‑tuning matters: freezing too many layers can leave the network unable to adapt to domain shifts (e.g., medical images), while unfreezing too early reintroduces data‑hungry parameters. A principled strategy is to monitor validation loss per layer and unfreeze progressively until marginal gains vanish—a process akin to *curriculum learning* in which the model gradually takes on more complex features.

Thus, pre‑trained models solve the “learning from few examples” problem by leveraging shared visual structure, and Keras gives a concise interface to harness that principle while still allowing precise control over adaptation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
