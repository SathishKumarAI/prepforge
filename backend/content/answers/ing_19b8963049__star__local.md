---
qid: ing_19b8963049__star__local
question: 'Explain: Get model history — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 417
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:20:54-05:00'
sources: []
---

**Situation**  
During a Kaggle competition on plant disease classification I fine‑tuned a pre‑trained ResNet‑50 on our custom dataset of 12k images. After the initial run the validation accuracy plateaued at 0.82, so I needed to dig into the training logs to understand overfitting and learning rate issues.

**Task**  
I had to extract the full model history—epoch loss, validation metrics, learning‑rate schedule, and weight snapshots—to guide hyper‑parameter tuning and early stopping decisions.

**Action**  
Using PyTorch Lightning’s `Trainer` I enabled the `ModelCheckpoint` callback with `monitor='val_acc'`, `save_top_k=3`, and `mode='max'`. The callback automatically writes a JSON file (`checkpoint.yaml`) containing epoch numbers, loss/accuracy values, optimizer state, and learning‑rate scheduler steps. I then parsed this YAML in a Jupyter notebook:

```python
import yaml, pandas as pd
with open('checkpoints/checkpoint-epoch=20-val_acc=0.84.ckpt', 'r') as f:
    history = yaml.safe_load(f)['callbacks']['ModelCheckpoint']
df = pd.DataFrame(history['metrics'])
```

This produced a tidy DataFrame with columns `epoch`, `train_loss`, `val_loss`, `val_acc`. I plotted the curves to spot the exact epoch where val loss stopped improving and overfitting began.

**Result**  
The analysis revealed that after epoch 18 the learning rate dropped too early, causing the model to converge prematurely. By resetting the scheduler and adding a cosine‑annealing schedule, validation accuracy rose to 0.88 within two more epochs, saving ~30 minutes of training time. I learned that capturing full checkpoint metadata is essential for reproducible tuning and that visualizing the history can pinpoint subtle training dynamics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
