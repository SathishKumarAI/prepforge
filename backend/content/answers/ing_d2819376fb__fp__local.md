---
qid: ing_d2819376fb__fp__local
question: 'Explain: How to Use Pre-Trained Models — Transfer Learning in Keras with
  Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 460
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:28:31-05:00'
sources: []
---

**Why transfer learning works**

In computer vision the first layers of a deep net learn universal edge‑ and texture detectors; only later layers encode dataset‑specific concepts.  
When you train from scratch you force all parameters to discover these low‑level filters by back‑propagating through millions of pixels—an expensive, data‑hungry process.  
Transfer learning bypasses this by *fixing* the early weights (they already solve a generic subproblem) and only re‑optimising higher layers for your target classes.  

**Derivation in Keras**

1. **Load a pre‑trained backbone** (`ResNet50`, `EfficientNetB0`, …) with `weights='imagenet'`.  
   ```python
   base = tf.keras.applications.ResNet50(include_top=False,
                                         weights='imagenet',
                                         input_shape=(224,224,3))
   ```
2. **Freeze the backbone** so gradients do not update its parameters:  
   ```python
   base.trainable = False
   ```
3. **Add a task‑specific head** (global pooling + dense layers).  
   ```python
   x = tf.keras.layers.GlobalAveragePooling2D()(base.output)
   x = tf.keras.layers.Dense(256, activation='relu')(x)
   out = tf.keras.layers.Dense(num_classes, activation='softmax')(x)
   model = tf.keras.Model(base.input, out)
   ```
4. **Compile & train** on your dataset.  
5. **Optional fine‑tuning**: unfreeze the last few blocks (`base.trainable = True`) and re‑train with a very low learning rate to adapt high‑level features without destroying the generic ones.

**Non‑obvious insight**

The *effective* number of trainable parameters is dominated by the head; thus even with a tiny dataset you can achieve near‑state‑of‑the‑art performance. The key is that the pre‑trained weights already encode a *distributional prior* over natural images, which regularises your model far better than random initialization would ever do.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
