---
qid: ing_483726b06c__fp__local
question: 'Explain: Papers — Transfer Learning in Keras with Computer Vision Models
  - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 577
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:38:59-05:00'
sources: []
---

**Why Transfer Learning Works**

In supervised vision, a neural net learns a mapping  
\(f_{\theta}(x)=y\) by minimizing an empirical risk over a dataset \(\{(x_i,y_i)\}\).  
If the training set is small, the parameter space \(\Theta\) is vast; many \(\theta\) achieve low loss on the data but generalise poorly (over‑fit).  
A pre‑trained network \(f_{\phi^*}\) has already solved a related minimisation problem on a massive dataset (ImageNet), finding a representation \(h_{\phi}(x)\) that captures generic visual primitives (edges, textures).  

**Fundamental Principle**

Transfer learning reuses the *feature extractor* part of \(f_{\phi^*}\):  
\(h_{\phi}(x)=\text{conv‑blocks}_{\phi}(x)\).  
We freeze or lightly fine‑tune \(\phi\) and train a new classifier head \(g_{\psi}\).  
This reduces the effective dimensionality from \(|\Theta|\) to \(|\Psi|\ll |\Theta|\), tightening the hypothesis space so that empirical risk minimisation is well‑posed even with few samples.  

**Geometric View**

The pre‑trained weights lie on a low‑dimensional manifold of “good” visual representations.  
Fine‑tuning moves along this manifold, preserving useful directions while adapting to new class boundaries.  

**Non‑Obvious Insight**

Many practitioners freeze all layers, but *partial freezing* (e.g., unfreezing the last convolutional block) often yields better accuracy.  
The hidden units in deeper layers are more task‑specific; keeping them trainable allows subtle adaptation without destroying the generic lower‑level filters that encode universal visual statistics.

**Keras Implementation**

```python
base = tf.keras.applications.ResNet50(weights='imagenet',
                                      include_top=False,
                                      input_shape=(224,224,3))
for layer in base.layers[:-4]:      # freeze early layers
    layer.trainable = False

model = tf.keras.Sequential([
    base,
    tf.keras.layers.GlobalAveragePooling2D(),
    tf.keras.layers.Dense(256, activation='relu'),
    tf.keras.layers.Dropout(0.5),
    tf.keras.layers.Dense(num_classes, activation='softmax')
])
```

Compile with a low learning rate; train only the new head or fine‑tune the last few blocks.  
This protocol harnesses the deep network’s learned geometry while tailoring it to your specific data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
