---
qid: ing_3823ce5645__fp__local
question: 'Explain: Summary — Transfer Learning in Keras with Computer Vision Models
  - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 483
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:03:39-05:00'
sources: []
---

**Why transfer learning works for vision**

Computer‑vision models learn hierarchical features: early layers capture edges, textures; deeper layers encode object parts and semantics. A pre‑trained network has already discovered a *universal* dictionary of such visual primitives on a huge dataset (e.g., ImageNet). When you want to solve a new task with limited data, the only thing that changes is how those primitives are combined into class‑specific patterns. Thus, the core representation can be reused; only the final classifier needs to be re‑trained.

**The Keras recipe**

1. **Load a pre‑trained backbone**  
   ```python
   base = tf.keras.applications.ResNet50(weights='imagenet',
                                         include_top=False,
                                         input_shape=(224,224,3))
   ```
   `include_top=False` keeps only convolutional layers; the final dense head is discarded.

2. **Freeze early layers** – they remain unchanged during training.  
   ```python
   base.trainable = False
   ```

3. **Add a new classifier** – global pooling + Dense(s) for your classes.  
   ```python
   x = tf.keras.layers.GlobalAveragePooling2D()(base.output)
   x = tf.keras.layers.Dense(256, activation='relu')(x)
   outputs = tf.keras.layers.Dense(num_classes, activation='softmax')(x)
   model = tf.keras.Model(inputs=base.input, outputs=outputs)
   ```

4. **Fine‑tune selectively** – unfreeze the last few blocks if you have more data or higher similarity to ImageNet.

5. **Compile & train** with a low learning rate; this prevents catastrophic forgetting of the learned features.

**Non‑obvious insight**

The *effective* number of trainable parameters is tiny compared to training from scratch, which drastically reduces overfitting risk. Moreover, because early layers are generic, they act as an implicit data augmentation: input images are projected into a feature space where linear separability is easier, so even a small dataset behaves like a large one.

In short, Keras makes transfer learning a plug‑and‑play process that leverages universal visual knowledge, drastically cutting training time and data requirements while retaining the flexibility to adapt to new domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
