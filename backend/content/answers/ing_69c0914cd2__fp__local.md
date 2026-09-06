---
qid: ing_69c0914cd2__fp__local
question: 'Explain: Crash Course in Brain Surgery: Looking Inside GPT-2'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 446
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:49:24-05:00'
sources: []
---

### Crash‑Course “Brain Surgery” on GPT‑2  
*What it does:* GPT‑2 is a causal transformer that predicts the next token in a sequence. Its **“brain”** consists of a stack of identical layers, each containing two sub‑modules: a self‑attention block and a feed‑forward network (FFN).  

1. **Self‑Attention:** For every position *i*, compute queries Qᵢ, keys Kⱼ, values Vⱼ for all positions *j*.  
   - The attention weight αᵢⱼ = softmax(Qᵢ·Kⱼ / √dₖ) is a probability distribution over past tokens.  
   - The output of the block is Σⱼ αᵢⱼ Vⱼ, a weighted mixture of all previous token embeddings.  

2. **Feed‑Forward Network:** A two‑layer MLP (ReLU or GELU activation) applied pointwise to each position’s representation.  

3. **Residual Connections & LayerNorm:**  
   - Residual paths preserve gradients and enable deeper stacks;  
   - LayerNorm stabilizes training by normalizing across the hidden dimension.  

4. **Position‑Encoding:** Since attention is permutation‑invariant, a sinusoidal or learned positional embedding is added to token embeddings to encode order.  

5. **Training Objective:** Minimize cross‑entropy loss over next‑token predictions; this is equivalent to maximizing log‑likelihood of the training corpus under the model’s distribution.  

**Non‑obvious insight:** The attention weights are *soft* mixtures, not hard assignments. This softness allows GPT‑2 to perform a **continuous weighted averaging** over all past context, effectively implementing a form of **Bayesian inference** where each token contributes proportionally to its relevance (as measured by the dot product). Thus, even with millions of parameters, the model can flexibly interpolate between local and global dependencies without explicitly encoding hard syntactic rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
