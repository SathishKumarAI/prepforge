---
qid: ing_ba52c560e0__star__local
question: 'Explain: Midterm (20%) — Stanford University CS231n: Deep Learning for
  Computer Vision'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 334
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:43:41-05:00'
sources: []
---

**Situation**  
During my second semester at university I was enrolled in CS 231n, the deep‑learning course that Stanford offers online. Midterms were worth 20% of the final grade, so we had to demonstrate a solid grasp of both theory and hands‑on coding.

**Task**  
I needed to build a convolutional neural network from scratch, train it on CIFAR‑10, and report performance metrics in a concise written report that included visualizations of learned filters and feature maps.

**Action**  
First I sketched the architecture—three conv layers with ReLU and max‑pooling, followed by two fully connected layers—and implemented it in PyTorch. I used data augmentation (random crops, horizontal flips) to boost generalization and tuned hyperparameters via a small grid search on learning rate and batch size. To validate my model, I plotted training/validation loss curves and visualized the first‑layer filters using Matplotlib, which helped identify overfitting early. Finally, I wrote a 2‑page report that explained each design choice, cited relevant research papers, and included tables of top‑1/top‑5 accuracy.

**Result**  
The model achieved 83 % test accuracy—well above the class average of 78 %. My midterm score was 92 %, and I received positive feedback for clear visualizations. This experience taught me how to translate theoretical concepts into reproducible code, balance model complexity with computational cost, and communicate results effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
