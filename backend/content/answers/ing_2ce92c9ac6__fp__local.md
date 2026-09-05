---
qid: ing_2ce92c9ac6__fp__local
question: 'Explain: DeepSeek Family — Model Taxonomy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 503
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:40:01-05:00'
sources: []
---

**DeepSeek Family – a principled model taxonomy**

The core problem *deep* models solve is: **mapping high‑dimensional inputs to structured outputs while preserving compositional and hierarchical structure**.  
We first formalise the space of all such mappings as a *function class* \( \mathcal{F} = \{f_\theta : \mathbb{R}^{d_{\text{in}}}\rightarrow\mathbb{R}^{d_{\text{out}}}\}_{\theta} \).  
A model is then a *parameterization* of \( \mathcal{F} \) that balances expressivity, inductive bias and tractability.  

**1. Architecture layer (structural bias)**  
- **Feed‑forward (FF)**: pure function composition; suitable when spatial locality is irrelevant.  
- **Convolutional (CNN)**: weight sharing + local receptive fields; captures translation invariance.  
- **Recurrent (RNN/LSTM/GRU)**: temporal recurrence; encodes sequential dependencies.  
- **Attention‑based (Transformer, ViT)**: self‑attention as a weighted sum over all positions; eliminates fixed locality, enabling long‑range context.

**2. Parameterization layer (optimization landscape)**  
- **Dense vs sparse**: dense tensors give full expressivity but poor scaling; sparsity induces low‑rank manifolds that are easier to optimise.  
- **Weight‑sharing schemes**: tied weights reduce effective dimensionality, leading to smoother loss surfaces.

**3. Training objective layer (information geometry)**  
- **Maximum Likelihood / Cross‑Entropy**: minimises KL divergence between data and model; guarantees optimality under i.i.d. assumptions.  
- **Contrastive / InfoNCE**: maximises mutual information across views, aligning with the *InfoMax* principle.

---

### Non‑obvious insight

The *attention mechanism* can be seen as a **continuous generalisation of graph convolution** where each node attends to every other node with learned weights. This perspective explains why Transformers excel on vision (ViT) and language: they are, in effect, learning an adaptive adjacency matrix that captures task‑specific relationships—an elegant unification of CNNs’ locality bias and GNNs’ message passing under a single optimisation principle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
