---
qid: ing_6708cbfcbc__fp__local
question: 'Explain: Serving a custom completion model to millions of DAU: walk me
  through the inference-cost model and your top three levers.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 477
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:44:16-05:00'
sources: []
---

**Inference‑cost model**

When a user submits a prompt, the system must compute
\[
C_{\text{inference}} = \sum_{t=1}^{L}\bigl(C_{\text{self‑attn}}(d) + C_{\text{ffn}}(d)\bigr),
\]
where \(L\) is the generated token count, \(d\) the hidden dimension, and each term scales as
\(O(d^{2})\) for self‑attention and \(O(d)\) for feed‑forward layers.  
Thus, total cost grows linearly with output length but quadratically with model width.  
For millions of Daily Active Users (DAU), the aggregate cost is

\[
C_{\text{total}} = N_{\text{DAU}}\times \mathbb{E}[L]\times C_{\text{inference}},
\]

so *any* change that reduces \(d\) or \(L\) yields a multiplicative savings.

**Top three levers**

| Lever | Why it works | Typical impact |
|-------|--------------|----------------|
| **Token‑level pruning (dynamic sparsity)** | Activations become zero for many heads; attention matrices shrink to \(k \ll d\). | 30–50 % FLOP drop with negligible quality loss. |
| **Model distillation + quantization** | Transfer knowledge to a slimmer student and represent weights in 8‑bit or bfloat16. | 4× memory reduction, 2× inference speedup; still matches teacher on downstream metrics. |
| **Adaptive prompt‑length control** | Early stopping when the model’s confidence reaches a threshold; avoids unnecessary tokens. | 15–25 % fewer generated tokens per request, proportional cost savings. |

**Non‑obvious insight**

The *quadratic* dependence on width means that modest reductions in \(d\) can outweigh larger gains from token pruning. Many teams focus only on shortening outputs, but a carefully engineered narrower backbone—paired with dynamic sparsity—delivers the most bang for the buck when scaling to millions of users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
