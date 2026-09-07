---
qid: ing_19571ad7d8__faang__local
question: 'Explain: But what is a neural network? | Deep learning chapter 1'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 441
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:44:05-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise, interview‑ready explanation of “what a neural network is” for a deep‑learning context. I’ll assume the audience has basic ML knowledge but not deep‑learning jargon.

**Approach**  
1. Define the core idea (layered computational units).  
2. Relate to biological inspiration.  
3. Highlight key properties: learnable parameters, non‑linear transformations, end‑to‑end training.  
4. Mention typical architectures and use cases.

**Depth**  
A neural network is a function approximator composed of *layers* of artificial neurons (units). Each neuron computes a weighted sum of its inputs, adds a bias, then applies an activation function (e.g., ReLU, sigmoid) to introduce non‑linearity. Layers are stacked: input → hidden layers → output. The weights and biases are the model’s parameters; they’re updated by back‑propagation using gradient descent so that the network learns from data. This architecture mirrors a simplified brain: neurons fire based on signals received, adjusting synaptic strengths over time.

Typical deep‑learning models—CNNs for images, RNNs/Transformers for sequences, GNNs for graphs—are specializations of this generic layered design. They scale by adding more layers or units, enabling them to capture hierarchical representations and achieve state‑of‑the‑art performance on vision, NLP, speech, etc.

**Edge Cases**  
- Very shallow nets (one layer) reduce to linear models.  
- Without non‑linear activations the network collapses to a single linear transformation regardless of depth.  
- Improper initialization or vanishing/exploding gradients can impede learning.

**Optimize & Communicate**  
I’d emphasize that the “neural” part is metaphorical: we’re not modeling neurons, but mimicking their connectivity and plasticity. I would conclude by noting how this simple yet powerful abstraction underpins modern AI systems, making it a core building block in any FAANG‑level ML role.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
