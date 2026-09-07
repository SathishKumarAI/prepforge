---
qid: ing_85636d12bc__faang__local
question: 'Q: What is the difference between pre-norm and post-norm?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 506
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:54:45-05:00'
sources: []
---

**Clarify**

The question asks about *pre‑norm* vs *post‑norm* in transformer architectures—i.e., where LayerNorm is applied relative to the residual connection.  
Assumptions: we’re talking about standard multi‑head attention + feed‑forward blocks, not custom variants.

---

### 1️⃣ Approach
- Define a single transformer sub‑layer.
- Show two variants:
  - **Pre‑norm**: `LN(x)` → sub‑layer → add residual.
  - **Post‑norm**: sub‑layer → add residual → `LN`.

Then explain the effect on gradients, training stability, and output scale.

---

### 2️⃣ Depth
| Variant | Flow | Effect |
|---------|------|--------|
| **Pre‑Norm** | `y = x + Sublayer(LN(x))` | Normalization happens before the sub‑layer; residual adds a signal that is *already* normalized. Leads to better gradient flow, allows deeper models (e.g., GPT‑3). |
| **Post‑Norm** | `y = LN(x + Sublayer(x))` | Normalization after addition; original input scale can grow during training. Historically used in BERT and early transformers; requires careful learning‑rate scheduling. |

- *Training stability*: Pre‑norm mitigates exploding/vanishing gradients, especially for >30 layers.
- *Inference speed*: No difference—both are O(1) per layer.
- *Output distribution*: Post‑norm keeps outputs centered around 0 after the residual; pre‑norm can shift mean slightly because LN is applied only to the sub‑layer output.

---

### 3️⃣ Edge Cases
- **Very deep models**: Post‑norm often diverges without a warm‑up schedule.
- **Mixed precision training**: Pre‑norm less sensitive to FP16 underflow.
- **Fine‑tuning small datasets**: Post‑norm can over‑regularize; pre‑norm may preserve more signal.

---

### 4️⃣ Optimize & Communicate
When interviewing, emphasize that *pre‑norm* is the modern default for large models due to superior training dynamics. Clarify that both are mathematically equivalent in a single layer but diverge as depth increases. Conclude by noting that choosing between them depends on model size, dataset, and hardware constraints—an important design decision in production transformer systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
