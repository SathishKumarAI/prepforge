---
qid: ing_797404d226__star__local
question: 'Explain: Then organize all of the weights as — But what is a neural network?
  | Deep learning chapter 1'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 369
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:36:33-05:00'
sources: []
---

**Situation** – In my sophomore capstone I was tasked with building a handwritten digit classifier from scratch in Python to demonstrate the fundamentals of deep learning for a senior seminar.

**Task** – The professor wanted me to show how a fully connected neural network stores its parameters, and then explain what exactly a neural network is. I had to make the math concrete enough that my classmates could see the weight matrices as tangible objects.

**Action** – I first coded a two‑layer perceptron with NumPy, initializing a 784×128 weight matrix for the hidden layer and a 128×10 matrix for the output layer. Using `np.concatenate`, I flattened both matrices into a single vector of length (784×128 + 128×10) = 101,440. This “weight bag” illustrated how all learnable parameters can be treated as one long vector, which is what gradient descent actually updates. While explaining, I compared this to a physical network: each neuron’s weighted sum followed by an activation function, forming layers that propagate information forward.

**Result** – The demo ran in under two minutes on my laptop and achieved 97 % test accuracy after just 20 epochs. My classmates could now picture a neural network as a series of weighted connections—essentially a massive, learnable lookup table—rather than an abstract black box. This clarity helped them grasp why we talk about “organizing all the weights” when discussing training dynamics and optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
