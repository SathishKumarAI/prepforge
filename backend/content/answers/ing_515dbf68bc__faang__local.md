---
qid: ing_515dbf68bc__faang__local
question: How does dropout work - and what changes between training and inference?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 504
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:53:43-05:00'
sources: []
---

**Clarify**  
Dropout is a regularization technique that randomly drops units (neurons) during training to prevent co‑adaptation. It asks: *How does the network behave when some neurons are removed, and what adjustments are needed for inference?* We assume a fully‑connected or convolutional layer with sigmoid/tanh/softmax output.

**Approach**  
1. During **training**, each neuron’s activation is multiplied by a Bernoulli mask \(m_i \sim \text{Bernoulli}(p)\) (keep probability).  
2. The forward pass uses the masked activations; back‑propagation flows only through kept units.  
3. At **inference** we need an expectation over all dropout masks, which is approximated by scaling weights or activations.

**Depth**  
- *Training*: \(a_i^{\text{out}} = m_i \cdot a_i^{\text{in}}\). Loss gradients skip dropped units, effectively sampling sub‑networks. Complexity stays \(O(N)\) per layer.  
- *Inference*: Two common strategies:  
  - **Weight scaling** (classic): multiply each weight by \(p\), keeping activations unchanged. Equivalent to averaging over all masks.  
  - **Inverted dropout**: during training, divide kept activations by \(p\); then inference uses the same network without scaling. This keeps expected activation equal across phases and is preferred in frameworks like TensorFlow/PyTorch.  

**Edge Cases**  
- Very low keep probability (e.g., p = 0.1) can cause vanishing gradients; test stability on small networks.  
- BatchNorm layers behave differently: dropout should be applied before or after BN? Empirically, applying dropout after BN is common.  
- In convolutional nets, spatial dropout may drop entire feature maps; verify that scaling still holds.

**Optimize & Communicate**  
Explain that dropout reduces over‑fitting by forcing redundancy and improves generalization. Highlight trade‑off: more training epochs needed for convergence vs. better test accuracy. Conclude with a quick sanity check: after training, running inference on a validation set should yield higher performance than a fully trained but unregularized model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
