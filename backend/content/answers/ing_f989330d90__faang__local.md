---
qid: ing_f989330d90__faang__local
question: 'Explain: Overview — Transfer Learning in Keras with Computer Vision Models
  - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 481
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:19:49-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise walkthrough of how to use transfer learning in Keras for computer‑vision tasks (e.g., image classification). Assume we have a labeled dataset, want to fine‑tune a pre‑trained CNN, and evaluate performance.

**Approach**  
1. Load a base model (ResNet50/ MobileNetV2) without its top layers (`include_top=False`).  
2. Freeze all convolutional blocks except the last few layers so only a subset is trainable.  
3. Add a global pooling layer + dense head matching our number of classes.  
4. Compile with an optimizer (Adam), loss (categorical_crossentropy), and metrics (accuracy).  
5. Train on augmented data, then optionally unfreeze more layers for fine‑tuning.

**Depth**  
```python
base = tf.keras.applications.ResNet50(weights='imagenet',
                                      include_top=False,
                                      input_shape=(224,224,3))
for layer in base.layers[:-10]:
    layer.trainable = False

x = tf.keras.layers.GlobalAveragePooling2D()(base.output)
preds = tf.keras.layers.Dense(num_classes, activation='softmax')(x)
model = tf.keras.Model(base.input, preds)

model.compile(optimizer=tf.keras.optimizers.Adam(lr=1e-4),
              loss='categorical_crossentropy',
              metrics=['accuracy'])
```
Training: `model.fit(train_ds, validation_data=val_ds, epochs=10)`.  
Fine‑tune by setting more layers to trainable and lowering LR.

**Edge Cases**  
*Very small datasets*: may overfit; use heavy augmentation or freeze all layers.  
*Imbalanced classes*: add class weights or focal loss.  
*Input size mismatch*: resize images or adjust `input_shape`.

**Optimize & Communicate**  
- Use mixed‑precision (`tf.keras.mixed_precision.set_global_policy('mixed_float16')`) for speed.  
- Monitor GPU memory; if OOM, reduce batch size or use gradient accumulation.  
Explain to interviewers that transfer learning reduces training time, improves generalization, and is particularly effective when labeled data is scarce—core points in a FAANG‑style answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
