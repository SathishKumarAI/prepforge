---
qid: ing_cc1e9f880e__faang__local
question: What Is Transfer Learning? — Transfer Learning in Keras with Computer Vision
  Models - MachineLearningMastery.com
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 574
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:33:58-05:00'
sources: []
---

**Clarify**  
*Question:* “What is transfer learning?” and *“How do we apply it in Keras for computer‑vision tasks?”*  
Assumptions:  
- The learner knows basic neural nets but not the nuance of fine‑tuning pre‑trained weights.  
- We’re focusing on convolutional models (ResNet, VGG, Inception) that are shipped with ImageNet weights.

**Approach**  
1. Define transfer learning conceptually.  
2. Explain why pre‑trained CNNs help: learned low‑level filters generalize across vision domains.  
3. Outline the Keras workflow: load a base model, freeze layers, add custom classifier, compile, train on new data.  

**Depth**  
Transfer learning = reusing knowledge (weights) from one task (source) to accelerate learning on another (target). In Keras:

```python
from tensorflow.keras.applications import ResNet50
from tensorflow.keras.layers import GlobalAveragePooling2D, Dense
from tensorflow.keras.models import Model

# 1. Load base with ImageNet weights
base = ResNet50(weights='imagenet', include_top=False, input_shape=(224,224,3))

# 2. Freeze convolutional body
for layer in base.layers:
    layer.trainable = False

# 3. Add task‑specific head
x = GlobalAveragePooling2D()(base.output)
preds = Dense(num_classes, activation='softmax')(x)

model = Model(inputs=base.input, outputs=preds)
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
```

Fine‑tuning: unfreeze last *n* layers (`layer.trainable=True`) and recompile with a lower learning rate (e.g., `Adam(lr=1e-4)`).

**Edge Cases**  
- **Domain shift:** if target images differ drastically from ImageNet (medical scans), fine‑tune more layers or use domain‑specific pre‑training.  
- **Small datasets:** risk of overfitting; use data augmentation and early stopping.  
- **Memory limits:** very deep models may exceed GPU RAM; switch to `include_top=False` + global pooling.

**Optimize & Communicate**  
Explain trade‑offs: freezing layers saves compute but may underfit; unfreezing increases capacity but needs careful regularization. Convey that transfer learning turns a 2‑hour training into minutes while maintaining high accuracy, which is why FAANG teams adopt it for rapid prototyping and production‑grade models.  

*Word count:* ~200 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
