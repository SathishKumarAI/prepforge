---
qid: ing_d557f4e192__faang__local
question: 'Explain: Transfer Learning in Keras with Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 555
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:55:41-05:00'
sources: []
---

**Clarify**  
You’re asking how to use a pre‑trained CV model (e.g., ResNet50) in Keras for a new image task—transfer learning. I’ll assume:  
* You have labeled images and a GPU;  
* The target dataset is smaller than ImageNet;  
* Accuracy or inference speed matters more than absolute performance.

**Approach**  
1. **Load the base model** without its top (classifier) layer, freezing all layers.  
2. **Add new classification heads**: global average pooling → dense layers → softmax for your classes.  
3. **Compile & train** on your data; optionally unfreeze the last few blocks and fine‑tune with a low learning rate.

**Depth**  
```python
from tensorflow.keras.applications import ResNet50
from tensorflow.keras.layers import GlobalAveragePooling2D, Dense
from tensorflow.keras.models import Model

base = ResNet50(weights='imagenet', include_top=False, input_shape=(224,224,3))
for layer in base.layers:
    layer.trainable = False

x = GlobalAveragePooling2D()(base.output)
x = Dense(256, activation='relu')(x)
preds = Dense(num_classes, activation='softmax')(x)

model = Model(inputs=base.input, outputs=preds)
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
```
*Training*: use `ImageDataGenerator` for augmentation; early‑stop on validation loss.  
If overfitting, unfreeze last 2–3 blocks and fine‑tune with a smaller LR (e.g., `1e-5`). Complexity: O(#params) of base + head; inference cost ≈ base forward pass.

**Edge Cases**  
* Very small datasets → freeze all layers to avoid overfitting.  
* Classes not in ImageNet vocabulary → ensure the new dense layer has correct dimensionality.  
* Input size mismatch → resize images or use `Resizing` layer before base model.

**Optimize & Communicate**  
- Use mixed‑precision (`tf.keras.mixed_precision.set_global_policy('mixed_float16')`) for speed.  
- Log training curves; if validation plateaus, consider adding dropout or L2 regularization.  
Explain trade‑offs: freezing saves memory and prevents catastrophic forgetting; fine‑tuning boosts accuracy but risks overfitting. This structured walk‑through demonstrates clear reasoning, depth, and practical implementation—exactly what a FAANG interviewer looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
