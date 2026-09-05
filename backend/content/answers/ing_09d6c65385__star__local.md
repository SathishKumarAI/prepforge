---
qid: ing_09d6c65385__star__local
question: Why can't you initialize all weights to zero? What do Xavier and He initialization
  actually do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 340
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:48:49-05:00'
sources: []
---

**Situation** – In a summer internship I was building a CNN for classifying satellite imagery. The model had four convolutional layers and we were stuck with training that never progressed beyond random accuracy.

**Task** – My job was to re‑engineer the weight initialization so the gradients flowed properly and convergence speed improved.

**Action** – First, I ran a quick experiment: all weights set to zero caused every neuron in a layer to compute identical outputs. Backprop then produced identical gradients, so each unit learned the same function—essentially the network collapsed into a single neuron. To fix this, I switched to Xavier (Glorot) initialization for layers with tanh or sigmoid activations: weights drawn from a normal distribution with variance = 2/(n_in + n_out). For ReLU layers I used He initialization: variance = 2/n_in. This scaling keeps the signal variance roughly constant across layers, preventing vanishing/exploding gradients. I verified this by plotting activation histograms after each forward pass; they stayed centered and scaled properly.

**Result** – After the change, validation accuracy jumped from ~52% to 78% in just three epochs, and loss stopped oscillating. I learned that proper variance scaling is crucial for deep nets, and that zero initialization kills symmetry breaking—something you might overlook if you only focus on learning rates or regularization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
