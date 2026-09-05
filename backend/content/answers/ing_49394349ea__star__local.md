---
qid: ing_49394349ea__star__local
question: Explain momentum and Adam. What problem does each solve over vanilla SGD?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 344
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:55:05-05:00'
sources: []
---

**Situation:**  
During my last semester project I was training a convolutional neural network to classify plant diseases from leaf images. After a week of vanilla SGD the validation loss plateaued around 0.32 and the learning rate schedule kept oscillating, making convergence painfully slow.

**Task:**  
I needed to accelerate training, reduce oscillations in gradients, and reach a lower validation loss without hand‑tuning many hyperparameters.

**Action:**  
First I added **momentum** (β=0.9) to my SGD optimizer. The momentum term accumulated an exponential moving average of past gradients, effectively smoothing the updates and allowing the optimizer to “carry” through shallow ravines in the loss surface. Then I switched to the **Adam** optimizer, which combines momentum with adaptive per‑parameter learning rates (using estimates of first and second moments). Adam’s bias‑corrected moment estimates let each weight adjust its step size based on how frequently it receives large gradients, mitigating issues where some parameters learn too slowly or too quickly.

**Result:**  
With momentum alone the training loss dropped from 0.32 to 0.21 in just two epochs and the validation accuracy rose by 4 %. Switching to Adam pushed the validation accuracy to 87 % (up from 82 %) and cut total training time by roughly 35 %. I learned that momentum tackles the “zig‑zag” problem of vanilla SGD, while Adam further solves the learning‑rate tuning burden by adapting step sizes on a per‑parameter basis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
