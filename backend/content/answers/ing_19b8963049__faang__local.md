---
qid: ing_19b8963049__faang__local
question: 'Explain: Get model history — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 622
total_tokens: 862
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:45:05-05:00'
sources: []
---

**1️⃣ Clarify**

> *“Explain how you’d retrieve a training history (loss, accuracy curves, etc.) from an annotated ResNet‑50 implementation.”*  
> *Assumptions:* The code uses Keras/TensorFlow, checkpoints are saved, and the model was trained with callbacks.

**2️⃣ Approach**

1. Load the trained `ResNet50` checkpoint.  
2. Instantiate a `tf.keras.callbacks.History` object or read the JSON/CSV logs that were written during training.  
3. Plot metrics (training vs validation loss/accuracy) to inspect convergence and overfitting.

**3️⃣ Depth**

```python
from tensorflow.keras.applications import ResNet50
from tensorflow.keras.models import load_model
import json, matplotlib.pyplot as plt

# 1. Load model & checkpoint weights
model = ResNet50(weights='imagenet', include_top=True)
model.load_weights('checkpoints/resnet50_final.h5')

# 2. Read history saved during training
with open('history.json') as f:
    hist = json.load(f)

train_loss, val_loss   = hist['loss'], hist['val_loss']
train_acc,  val_acc    = hist.get('accuracy'), hist.get('val_accuracy')
epochs = range(1, len(train_loss)+1)

# 3. Visualize
plt.figure(figsize=(12,5))
plt.subplot(1,2,1)
plt.plot(epochs, train_loss, label='train')
plt.plot(epochs, val_loss,  label='val')
plt.title('Loss'); plt.legend()

plt.subplot(1,2,2)
plt.plot(epochs, train_acc, label='train')
plt.plot(epochs, val_acc,  label='val')
plt.title('Accuracy'); plt.legend()
plt.show()
```

- **Complexity:** O(E) where E = number of epochs (trivial).  
- **Trade‑offs:** Storing history as JSON is lightweight; for very long runs you might prefer HDF5 or TensorBoard logs.

**4️⃣ Edge Cases**

| Issue | Fix |
|-------|-----|
| No `val_accuracy` logged | Use `metrics=['accuracy']` during compile. |
| Large epoch count → memory blow | Stream logs from file instead of loading entire JSON. |
| Inconsistent metric names (e.g., `acc` vs `accuracy`) | Normalise keys before plotting. |

**5️⃣ Optimize & Communicate**

- **Optimization:** Replace matplotlib with Plotly for interactive dashboards; cache plots to avoid recomputation.  
- **Communication:** Start by summarizing the goal, outline the three steps, then walk through code snippets while highlighting key TensorFlow APIs and potential pitfalls.

This structure mirrors FAANG interview expectations: clear problem restatement → systematic plan → precise implementation details + complexity → edge‑case awareness → thoughtful optimizations and transparent reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
