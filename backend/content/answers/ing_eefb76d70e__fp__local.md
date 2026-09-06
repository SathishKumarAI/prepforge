---
qid: ing_eefb76d70e__fp__local
question: 'Explain: Scaling Latent Reasoning via Looped Language Models'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 422
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:26:58-05:00'
sources: []
---

**Scaling latent reasoning with looped language models**  
The core problem is that a single forward pass of an LLM can only *instantiate* a fixed‑size representation; long‑range or multi‑step deductions require more capacity than the token budget allows. A looped architecture treats the model as a dynamical system: at each iteration it receives its own previous hidden state (or a compressed summary) and outputs an updated state.  

Formally, let \(h_t\in\mathbb{R}^d\) be the latent vector after \(t\) steps. The loop applies  
\(h_{t+1}=f_{\theta}(x,h_t)\), where \(x\) is the prompt and \(f_{\theta}\) is a transformer block. After \(T\) iterations we obtain \(h_T=f^T(x,0)\). This recursion realizes an *unrolled* computation graph that can grow arbitrarily deep while keeping the same parameter set \(\theta\).  

Why does it work?  
1. **Iterative refinement** mirrors human reasoning: each pass peels off one layer of abstraction.  
2. **Implicit memory compression**: \(h_t\) acts as a bottleneck, forcing the model to distill relevant facts while discarding noise—an instance of *information bottleneck* theory.  
3. **Gradient flow** is preserved across iterations thanks to residual connections, enabling training over many steps without exploding gradients.

A non‑obvious insight: the loop turns the transformer into a *self‑reinforcing generative model*. During inference, the model can generate its own intermediate hypotheses and feed them back as inputs—effectively performing *closed‑loop planning* without explicit external planners. This self‑referential capability is what allows latent reasoning to scale beyond the token limit while remaining fully parameter‑efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
