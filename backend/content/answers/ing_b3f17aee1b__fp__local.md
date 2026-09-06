---
qid: ing_b3f17aee1b__fp__local
question: 'Explain: A model was pretrained at 8k context. You need 128k. What are
  your options? Explain position interpolation and YaRN.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 504
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:26:40-05:00'
sources: []
---

When a transformer is trained with a maximum sequence length \(L_{\text{pre}}\), its positional encodings (PE) are fixed for that range. Extending to \(L_{\text{post}} \gg L_{\text{pre}}\) requires either re‑training or clever post‑hoc interpolation because the model’s attention still expects positions in \([0,L_{\text{pre}})\).  

**1. Positional‑interpolation (PI)**  
The PE matrix is a deterministic function of index \(i\): for sinusoidal PEs, \(f(i)=[\sin(i/10000^{2k/d}),\cos(i/10000^{2k/d})]\). PI simply evaluates this function at new indices \(i>L_{\text{pre}}\) and plugs the resulting vectors into the network. The model “sees” longer positions but still uses the same learned weights, so it behaves as if trained on a longer context.  
*Non‑obvious insight*: Because PEs are continuous, PI preserves relative positional relationships; the attention patterns learned for short sequences naturally generalise to larger \(i\) without retraining.

**2. YARN (Yet Another Reparameterization of Attention)**  
YARN re‑parameterises self‑attention by decoupling query/key scaling from absolute position. It replaces the dot‑product \(QK^\top / \sqrt{d}\) with a *relative* form that depends on distance, not raw index. This makes the model invariant to global shifts and allows it to process arbitrary lengths without changing any weights.  
*Non‑obvious insight*: YARN’s relative attention is essentially an implicit positional interpolation; by learning a smooth function of distance, it sidesteps the need for explicit PE evaluation.

**Other options**:  
- *Sparse/linear attention* (e.g., Longformer, Reformer) reduces memory to \(O(L)\).  
- *Chunking* + *cache‑based recurrence* (e.g., Transformer‑XL) reuses hidden states.  

In practice, PI is fastest to deploy; YARN offers better theoretical robustness when the model’s original attention was heavily position‑dependent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
