---
qid: ing_09d6c65385__faang__local
question: Why can't you initialize all weights to zero? What do Xavier and He initialization
  actually do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 437
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:07:30-05:00'
sources: []
---

**Clarify**  
You’re asking why a neural net can’t start with every weight equal to 0, and what the “Xavier” (Glorot) and “He” initializations actually do. I’ll assume we’re talking about fully‑connected or convolutional layers trained with backpropagation.

**Approach**  
1. Explain symmetry breaking via zero weights.  
2. Show how Xavier/He set variance to preserve signal variance across layers.  
3. Compare the two formulas and why one is preferred for ReLU vs tanh/sigmoid.

**Depth**  

| Initialization | Formula (fan‑in = n) | Target Variance |
|-----------------|----------------------|-----------------|
| Xavier (Glorot) | `w ~ U(−√6/(n+out), √6/(n+out))` | 1/2 of fan‑in/out sum |
| He | `w ~ N(0, sqrt(2/n))` | 2/fan‑in |

Xavier derives from setting the variance of activations equal to that of inputs for linear or tanh units; it keeps both forward and backward gradients roughly unit‑scale.  
He’s a refinement for ReLU (or variants) where half the activations are zero on average, so we scale variance by √2 to compensate.

**Edge cases**  
- **Zero initialization** forces every neuron in a layer to compute identical outputs; gradients become identical → no learning.  
- **Very large or small variances** cause exploding/vanishing gradients, especially deep nets.  
- **Non‑Gaussian distributions** (e.g., uniform) still work if variance matches the target.

**Optimize & communicate**  
I’d highlight that these schemes balance signal flow without costly pre‑training and are simple to implement. If I were coding this, I’d use `torch.nn.init.xavier_uniform_` or `he_normal_`. For deeper networks, consider layer‑wise variance scaling or orthogonal initialization for further stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
