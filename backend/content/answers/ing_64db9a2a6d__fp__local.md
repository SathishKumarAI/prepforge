---
qid: ing_64db9a2a6d__fp__local
question: 'Explain: A global workspace in language models — Research \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 474
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:39:21-05:00'
sources: []
---

**Global Workspace for Language Models**

At its core a language model must reconcile two competing objectives: *local consistency* (producing coherent tokens) and *global coherence* (maintaining context over long stretches).  
The **global workspace** is the minimal interface that enforces this reconciliation without sacrificing efficiency.

1. **Problem formulation**  
   Let \(x_{1:t}\) be a token sequence. A transformer computes hidden states \(h_t = f(h_{t-1}, x_t)\), which are highly local. To answer a question about an earlier part of the dialogue, we need a *summary* that can be retrieved in constant time.  
   We formalize this as a projection
   \[
   g(x_{1:t}) = W_{\text{proj}}\,\text{AvgPool}(h_{1:t}),
   \]
   where \(g\) is the global representation and \(W_{\text{proj}}\) is learned jointly with the language model.

2. **Why it must work this way**  
   - **Optimization**: The projection acts as a bottleneck that forces the network to compress salient information, reducing over‑parameterization.  
   - **Information theory**: By maximizing mutual information \(I(g; x_{1:t})\) under a capacity constraint, the model learns to retain only what is necessary for downstream tasks.  
   - **Geometry**: The projection maps the high‑dimensional hidden manifold into a low‑dimensional subspace where distances reflect semantic relevance.

3. **Non‑obvious insight**  
   The workspace is *not* merely an auxiliary memory; it acts as a *policy gradient signal* for the transformer itself. During training, gradients from tasks that query \(g\) propagate back through the projection and into earlier layers, nudging them to encode information in a format that can be efficiently distilled. Thus, the global workspace simultaneously serves as a bottleneck, an optimization target, and a self‑supervised signal—an elegant unification that explains why large models with explicit workspace modules often outperform their unguided counterparts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
