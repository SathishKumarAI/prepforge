---
qid: ing_6b76a58e8f__fp__local
question: 'Explain: Pre-LN vs Post-LN — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 546
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:53:14-05:00'
sources: []
---

### Pre‑LayerNorm vs Post‑LayerNorm in Transformer Blocks

At the core of every transformer layer is a **residual connection**:
\[
y = x + \mathcal{F}(x),
\]
where \(x\) is the input token representation and \(\mathcal{F}\) denotes the sub‑module (self‑attention or MLP).  
The residual guarantees that gradients can flow unimpeded through deep stacks, yet it also introduces a **scale mismatch**: \(\mathcal{F}(x)\) often has a much larger variance than \(x\), leading to exploding activations and training instability.

Layer Normalization (LN) addresses this by standardizing the activations across the hidden dimension:
\[
\operatorname{LN}(z)=\frac{z-\mu}{\sigma}\gamma+\beta.
\]
The placement of LN relative to the residual matters because LN is **not linear**.  

#### Pre‑LN  
\[
y = x + \mathcal{F}(\operatorname{LN}(x)).
\]
By normalizing *before* applying \(\mathcal{F}\), we force every sub‑module to receive inputs of unit variance, enabling deeper stacks (e.g., GPT‑3 uses this). The residual now adds a vector whose scale is already controlled, reducing the risk of saturation in later layers.

#### Post‑LN  
\[
y = \operatorname{LN}(x + \mathcal{F}(x)).
\]
Here the sub‑module receives raw \(x\), potentially producing high‑variance outputs. The residual sum can blow up; LN then re‑scales the *entire* block output. This works for smaller models but becomes problematic as depth grows.

#### Non‑obvious insight  
Because LN is **affine**, moving it *after* the residual introduces a bias term that depends on the entire stack’s state. In very deep nets this bias can drift, effectively acting like a learned “temperature” that must be tuned per layer—a hidden hyperparameter often overlooked when switching from pre‑ to post‑LN.

In summary, **pre‑LN stabilizes each sub‑module’s input distribution, enabling arbitrary depth**; **post‑LN relies on the residual to absorb variance, which limits scalability**. The choice is a direct trade‑off between per‑layer normalization and global stability governed by residual dynamics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
