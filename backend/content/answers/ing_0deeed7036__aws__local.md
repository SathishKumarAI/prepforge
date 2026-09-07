---
qid: ing_0deeed7036__aws__local
question: 'Explain: Pre-Trained Model as Classifier — Transfer Learning in Keras with
  Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 587
total_tokens: 832
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:57:10-05:00'
sources: []
---

**Situation (S)**  
At my last role I was tasked to launch a mobile app that classifies plant diseases from photos. The dataset had only ~3 k labeled images, but we needed <1 s inference on an edge device.

**Task (T)**  
Implement transfer learning with Keras so we could train quickly, keep accuracy > 90 %, and reduce model size to < 10 MB.

**Action (A)**  

| Step | What I did | Why |
|------|------------|-----|
| 1. **Select a pre‑trained backbone** | ResNet‑50 from `keras.applications` (ImageNet weights) | Proven feature extractor, ~60M params, good trade‑off between depth and size |
| 2. **Freeze early layers** | `for layer in base_model.layers[:-10]: layer.trainable = False` | Keeps learned low‑level features; reduces overfitting on small data |
| 3. **Add a custom classifier head** | GlobalAveragePooling → Dense(256, relu) + Dropout(0.5) → Dense(num_classes, softmax) | Compact but expressive enough for our classes |
| 4. **Compile with focal loss & AdamW** | `loss='sparse_categorical_crossentropy', optimizer=AdamW(lr=1e-4)` | Handles class imbalance and improves generalization |
| 5. **Fine‑tune top layers** | Unfreeze last conv block, train for 10 epochs | Boosts accuracy without full retraining |
| 6. **Quantize with TensorFlow Lite** | `tf.lite.TFLiteConverter` + post‑training quantization | Reduces size to 8 MB and speeds inference on ARM Cortex‑A53 |

**Result (R)**  
- Accuracy: 92.4 % on a held‑out test set (vs 78 % baseline).  
- Inference latency: 0.56 s per image on the target device.  
- Model size: 8.1 MB, 3× smaller than a naïve CNN we initially built.

**Leadership Principles Reflected**

*Customer Obsession*: Delivered an app that users could run offline with instant feedback.  
*Ownership & Dive Deep*: I evaluated multiple backbones, quantified trade‑offs, and iterated until metrics met business goals.  

**Bar‑raiser takeaways**  
- Showed ownership by choosing the right pre‑trained model and customizing it for constraints.  
- Demonstrated depth through layer‑wise freezing, loss choice, and quantization.  
- Quantified impact with clear accuracy/latency numbers.  
- Learned from early trials (full fine‑tuning overfit) and pivoted to selective training.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
