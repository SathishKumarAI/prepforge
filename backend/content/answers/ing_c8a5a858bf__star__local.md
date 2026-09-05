---
qid: ing_c8a5a858bf__star__local
question: 'Explain: In this network I chose two hidden — But what is a neural network?
  | Deep learning chapter 1'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 325
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:10:48-05:00'
sources: []
---

**Situation:**  
During my senior capstone, we were tasked to build an image‑recognition model for a local museum’s artifact cataloging system. The dataset consisted of 12,000 labeled photos, and the client needed predictions within 0.5 seconds per query.

**Task:**  
I had to design a neural network that would accurately classify artifacts into 50 categories while staying lightweight enough for on‑device inference.

**Action:**  
First, I explained to the team what a neural network is: an interconnected set of layers where each neuron applies a weighted sum plus bias, then a non‑linear activation (ReLU in our case). I chose two hidden layers—64 and 32 units—to balance depth and speed. Using TensorFlow 2, I implemented dropout after each hidden layer to mitigate overfitting, and employed Adam optimizer with a learning rate schedule. I also added batch normalization to stabilize training and reduce internal covariate shift. After 30 epochs, I evaluated the model on a held‑out set, achieving 92 % top‑1 accuracy.

**Result:**  
The final architecture ran at ~0.4 seconds per inference on an ARM Cortex‑A53 processor, meeting the client’s latency requirement. The project was showcased at the university’s tech fair, and I learned that clear architectural choices—like layer size and regularization—directly impact both accuracy and deployment feasibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
