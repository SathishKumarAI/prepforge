---
qid: ing_b3e53c6c25__fp__local
question: 'Explain: Load the ResNet50 Pre-trained Model — Transfer Learning in Keras
  with Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 628
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:26:41-05:00'
sources: []
---

**Why we “load” a pre‑trained ResNet‑50?**

The core problem in computer vision is *learning useful image representations* with limited data.  
Training a CNN from scratch requires millions of labeled images; otherwise the model overfits and never generalises. A convolutional network learns hierarchical features: early layers capture generic edges, textures, and colour blobs that are common to all visual tasks. Later layers specialise to the specific dataset.

ResNet‑50 is trained on ImageNet (1 M+ images, 1000 classes). During training it has already minimised a cross‑entropy loss over an enormous distribution of natural scenes. By *freezing* its early weights and fine‑tuning only the last few layers, we inherit a feature extractor that already approximates optimal representations for any image domain—an instance of **regularisation by prior knowledge**.

Mathematically, transfer learning reduces the hypothesis space \(\mathcal{H}\) from all possible CNNs to those close to the pre‑trained weights \(w^\*\). The optimisation problem becomes:

\[
\min_{w} \frac{1}{N}\sum_{i=1}^{N}\ell(f(x_i; w), y_i)
+ \lambda \|w-w^\*\|^2,
\]

where the second term is a *weight‑decay* towards \(w^\*\). This encourages solutions that are both low‑loss on the new data and not too far from a well‑regularised prior, effectively tightening the generalisation bound.

**Non‑obvious insight:**  
Fine‑tuning only the last layer (a 1000‑class linear classifier) often suffices because *most of the visual knowledge* resides in convolutional filters. The final fully‑connected weights are merely a linear readout; once you have a good embedding, re‑training a small dense head is enough to adapt to new classes with very few samples.

---

**Practical Keras snippet**

```python
from tensorflow.keras.applications import ResNet50
from tensorflow.keras.layers import GlobalAveragePooling2D, Dense
from tensorflow.keras.models import Model

base = ResNet50(weights='imagenet', include_top=False,
                input_shape=(224, 224, 3))
x = GlobalAveragePooling2D()(base.output)
preds = Dense(10, activation='softmax')(x)   # new task: 10 classes
model = Model(inputs=base.input, outputs=preds)

# Freeze convolutional backbone
for layer in base.layers:
    layer.trainable = False

model.compile(optimizer='adam', loss='categorical_crossentropy',
              metrics=['accuracy'])
```

Load the pre‑trained weights (`weights='imagenet'`), freeze early layers, and train only the new dense head. This short pipeline harnesses millions of learned features while keeping training time negligible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
