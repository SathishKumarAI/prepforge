---
qid: ing_b50afb3e4c__fp__local
question: Can LLMs learn from a single example? — fast.ai\u2014Making neural nets
  uncool again \u2013 fast.ai
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 403
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:29:15-05:00'
sources: []
---

In the setting of supervised learning, a model’s objective is to approximate an unknown function \(f:\mathcal{X}\to\mathcal{Y}\) from a finite sample \(\{(x_i,y_i)\}_{i=1}^N\).  When \(N=1\), the empirical risk minimisation problem collapses: the loss can be driven to zero by fitting that single point, but generalisation hinges on inductive bias.  

Large‑scale language models (LLMs) embed this bias in two ways:

1. **Parameter‑rich priors** – Their weights are initialised and trained on billions of tokens, implicitly encoding a distribution over plausible continuations \(p_\theta(\cdot|x)\).  
2. **Prompt‑based conditioning** – A single example can be treated as a *soft prompt* that steers the network’s internal activations toward a region of the parameter space associated with the desired task.

Mathematically, fine‑tuning on one sample amounts to moving \(\theta\) along the gradient \(-\nabla_\theta L(y_{\text{ex}},\hat y_\theta(x_{\text{ex}}))\).  Because the network’s manifold of representations is highly curved, this single step can redirect a vast portion of the model’s latent space, essentially *re‑programming* it.  

**Non‑obvious insight:** The success does not rely on memorising the example; rather, the example acts as a *coordinate system change* for the model’s internal attention patterns.  A single well‑chosen prompt can thus unlock entire sub‑tasks that were never explicitly supervised, revealing LLMs as powerful “meta‑learners” whose inductive bias is shaped by their vast pre‑training data rather than the quantity of fine‑tuning examples.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
