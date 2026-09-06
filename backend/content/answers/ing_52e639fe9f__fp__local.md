---
qid: ing_52e639fe9f__fp__local
question: 'Explain: What Attention Learns — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 423
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:01:13-05:00'
sources: []
---

## What Attention Learns

At its core, an attention mechanism tackles the **“which part of the input matters most for a given output?”** question.  
Imagine translating a sentence: the word *“bank”* could mean a financial institution or a river edge. The correct meaning depends on surrounding words. A naïve model would treat all tokens equally; attention learns to weight each token’s contribution dynamically.

Formally, let an input sequence be encoded into vectors \(\{h_i\}\). For a target position \(t\), we compute scores  
\(e_{ti} = f(h_t, h_i)\) (often dot‑product or additive). These are normalized via softmax to obtain weights \(\alpha_{ti}\). The context vector is the weighted sum \(\sum_i \alpha_{ti}h_i\), which feeds into the next layer.  

Why does this work?  
1. **Optimization** – Backpropagating through \(\alpha_{ti}\) lets the model learn *where* to focus for minimizing loss, effectively performing a differentiable “hard‑search” over positions.  
2. **Information theory** – Attention implements a learned stochastic policy that concentrates information flow where mutual information with the target is highest, reducing entropy of irrelevant features.  
3. **Geometry** – In embedding space, attention aligns vectors by projecting queries onto keys; this is a form of *inner‑product geometry* that preserves relative similarity.

### Non‑obvious insight

Attention does more than pick words; it learns a **dynamic coordinate system** for each query. The weights \(\alpha_{ti}\) re‑parameterize the input space, effectively rotating and scaling the feature manifold so that downstream layers operate in a context‑specific basis. This is why transformers can generalize across modalities: the same attention machinery merely re‑orients its internal geometry to the statistics of the data at hand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
