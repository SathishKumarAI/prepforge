---
qid: ing_1f76c289a5__faang__local
question: 'Explain: Examples of Using Pre-Trained Models — Transfer Learning in Keras
  with Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 578
total_tokens: 826
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:57:53-05:00'
sources: []
---

**1️⃣ Clarify**

> *Goal*: Show how to plug a pre‑trained CNN into a new CV task in Keras, fine‑tune it, and evaluate performance.  
> *Assumptions*: We have labeled data (e.g., flower species), GPU access, and Keras/TensorFlow 2.x installed.

**2️⃣ Approach**

1. **Load base model** (`MobileNetV2`, `ResNet50`, etc.) with `include_top=False`.  
2. **Freeze layers** to preserve learned features.  
3. **Add custom head**: global pooling → dense layers → softmax.  
4. **Compile** with a low learning rate and an optimizer suited for fine‑tuning (AdamW).  
5. **Train** on the new dataset, optionally unfreeze top blocks after a few epochs.  
6. **Evaluate** with validation split, monitor `accuracy`, `precision/recall`.  

**3️⃣ Depth**

```python
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.layers import GlobalAveragePooling2D, Dense
from tensorflow.keras.models import Model

base = MobileNetV2(weights='imagenet', include_top=False,
                   input_shape=(224,224,3))
for layer in base.layers:          # freeze backbone
    layer.trainable = False

x = GlobalAveragePooling2D()(base.output)
x = Dense(128, activation='relu')(x)
preds = Dense(num_classes, activation='softmax')(x)

model = Model(base.input, preds)
model.compile(optimizer=Adam(lr=1e-4),
              loss='categorical_crossentropy',
              metrics=['accuracy'])
```

*Complexity*: Inference `O(N)` per image; training cost dominated by backbone FLOPs.  
*Trade‑off*: Freezing reduces overfitting but limits adaptation; unfreezing improves accuracy at the expense of longer epochs.

**4️⃣ Edge Cases**

- *Small dataset*: keep many layers frozen, use data augmentation.  
- *Class imbalance*: weighted loss or focal loss.  
- *Different input size*: resize with `tf.image.resize` and adjust `input_shape`.  

**5️⃣ Optimize & Communicate**

- Use mixed‑precision (`tf.keras.mixed_precision`) to speed up GPU training.  
- Log learning curves; if validation stalls, unfreeze more layers or lower LR.  
- Present results in a concise slide: baseline accuracy vs. fine‑tuned model, highlighting % improvement.

This structured pipeline demonstrates transfer learning fluency and the ability to adapt pre‑trained vision models efficiently—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
