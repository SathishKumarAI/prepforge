---
qid: ing_f61fb62256__star__local
question: 'Explain: Assignments (45%) — Stanford University CS231n: Deep Learning
  for Computer Vision'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 358
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:40:48-05:00'
sources: []
---

**Situation:**  
During my sophomore year at university I enrolled in Stanford’s CS231n course. The semester was packed with weekly assignments that accounted for 45% of the final grade, and the first one required building a convolutional neural network from scratch to classify CIFAR‑10 images.

**Task:**  
I had to design an architecture that achieved at least 70 % test accuracy within two weeks while staying efficient enough to train on a single GPU. The assignment also demanded I document my hyperparameter choices, training curves, and explain the role of each layer in the network’s performance.

**Action:**  
I started by implementing a simple VGG‑style block: three convolutional layers followed by max‑pooling, then two fully connected layers. Using PyTorch, I added batch normalization after every conv layer to stabilize gradients and ReLU activations for non‑linearity. To reduce overfitting I introduced dropout (p=0.5) before the final classifier and employed data augmentation—random horizontal flips and color jitter. I experimented with learning rates via a cosine decay schedule and used Adam optimizer with weight decay of 1e-4. Throughout, I logged loss and accuracy on a validation split to detect overfitting early.

**Result:**  
The model reached 73 % test accuracy after four training epochs, surpassing the required threshold and ranking in the top 10 % of all submissions. The exercise taught me how architectural choices—batch norm, dropout, data augmentation—directly impact generalization, and reinforced my habit of rigorous experimentation and documentation in deep‑learning projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
