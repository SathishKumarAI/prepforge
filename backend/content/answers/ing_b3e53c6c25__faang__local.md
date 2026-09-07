---
qid: ing_b3e53c6c25__faang__local
question: 'Explain: Load the ResNet50 Pre-trained Model — Transfer Learning in Keras
  with Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 538
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:42:19-05:00'
sources: []
---

**Clarify**  
You’re asked how to load a pre‑trained ResNet‑50 in Keras and use it for transfer learning on a new image classification task. I’ll assume we have the dataset split into training/validation sets, GPU availability, and that the target problem has a different number of classes than ImageNet (1000).

**Approach**  
1. Load `ResNet50` without top layers (`include_top=False`).  
2. Freeze all convolutional layers to preserve learned features.  
3. Add a global pooling layer followed by one or more dense layers, ending with a softmax matching the target class count.  
4. Compile with an optimizer (e.g., Adam) and categorical cross‑entropy.  
5. Train on the new data; optionally unfreeze some top blocks later for fine‑tuning.

**Depth**  
```python
from tensorflow.keras.applications import ResNet50
from tensorflow.keras.layers import GlobalAveragePooling2D, Dense
from tensorflow.keras.models import Model

base = ResNet50(weights='imagenet', include_top=False,
                input_shape=(224,224,3))
for layer in base.layers:
    layer.trainable = False

x = GlobalAveragePooling2D()(base.output)
x = Dense(256, activation='relu')(x)
preds = Dense(num_classes, activation='softmax')(x)

model = Model(inputs=base.input, outputs=preds)
model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])
```
Training uses a small batch size (e.g., 32) and ~10 epochs; fine‑tune by unfreezing the last `n` blocks.

**Edge Cases**  
- If images are smaller than 224×224, resize or adjust input shape.  
- For grayscale data, duplicate channels or modify the first conv layer.  
- When the target dataset is tiny, overfitting may occur; use stronger regularization or data augmentation.

**Optimize & Communicate**  
After initial training, evaluate validation loss: if stagnant, unfreeze deeper layers to fine‑tune with a lower learning rate (`1e-5`). To speed inference, consider `tf.keras.applications.ResNet50`’s built‑in preprocessing. I’d explain each step’s rationale—why freezing preserves general features and why fine‑tuning adapts to specific patterns—while keeping the explanation concise yet thorough.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
