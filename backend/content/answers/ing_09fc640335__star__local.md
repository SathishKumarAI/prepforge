---
qid: ing_09fc640335__star__local
question: 'Explain: Defining Callbacks — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 303
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:48:57-05:00'
sources: []
---

**Situation:**  
During my capstone on image classification, I was fine‑tuning a pre‑trained ResNet‑50 on the PlantVillage dataset (≈50k images). The training loss plateaued after 12 epochs and overfitting crept in – validation accuracy dipped from 93% to 92%.

**Task:**  
I needed to accelerate convergence, prevent over‑training, and automatically adjust learning rates without manual intervention.

**Action:**  
I implemented a set of Keras callbacks. First, `ModelCheckpoint` saved the best weights based on validation loss. Second, `EarlyStopping` monitored val_loss with patience = 4 to halt training when improvements stalled. Third, I added `ReduceLROnPlateau` to halve the learning rate if val_accuracy didn’t improve for two epochs (min_lr = 1e‑6). Finally, a custom callback logged per‑epoch confusion matrices into TensorBoard for qualitative analysis.

**Result:**  
Training stopped at epoch 16, saving weights that achieved 94.7% validation accuracy—a 1.7% lift over the baseline. The learning rate schedule reduced training time by ~30%, and the saved checkpoints ensured reproducibility across runs. I learned how callbacks orchestrate training dynamics and can be tuned to balance speed, generalization, and resource usage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
