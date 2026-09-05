---
qid: ing_e30cedad09__star__local
question: 'Explain: Why is MSE a bad loss for classification, even though it "works"?
  Connect it to the probabilistic view of loss functions.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 305
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:02:46-05:00'
sources: []
---

**Situation:**  
During a capstone project I built a binary sentiment classifier using a simple feed‑forward network. My instructor suggested starting with mean squared error (MSE) because it was easy to implement in TensorFlow.

**Task:**  
I had to train the model to predict “positive” vs. “negative” labels and evaluate its performance on a held‑out test set, aiming for at least 85 % accuracy.

**Action:**  
I used MSE between one‑hot target vectors (0/1) and the network’s sigmoid outputs. While training converged, I noticed that the gradients became very small when predictions were close to the true label, so learning stalled on hard examples. To probe this, I plotted loss versus predicted probability: the curvature was shallow near 0 or 1 but steep in the middle, meaning MSE treated all errors linearly regardless of confidence. In contrast, cross‑entropy penalizes confident wrong predictions heavily and rewards correct high probabilities, matching the probabilistic interpretation that likelihood should be maximized.

**Result:**  
Switching to binary cross‑entropy improved accuracy from 78 % to 92 % within the same epoch budget, and training stabilized faster. I learned that MSE is a poor surrogate for classification because it ignores the underlying Bernoulli distribution; loss functions should reflect the probabilistic model of the task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
