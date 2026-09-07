---
qid: ing_39223759ab__faang__local
question: 'Explain: Model Sizes — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 511
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:57:22-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of how the size of a large language model (LLM) is defined and why it matters internally. I’ll assume we’re talking about transformer‑based models, the dominant architecture in AI today.

**Approach**  
1. Define “model size” quantitatively.  
2. Explain what each component contributes to that number.  
3. Relate size to capacity, compute/memory requirements, and training dynamics.

**Depth**  

| Component | Typical Parameter Count | Role |
|-----------|------------------------|------|
| **Embedding matrix** (vocab × dim) | `V * D` | Maps tokens to dense vectors. |
| **Self‑attention layers** | `4 * H * D² + 2 * H * D` per layer | Computes queries, keys, values; key‑value projections dominate. |
| **Feed‑forward sub‑layers** | `H * (D × d_ff + d_ff × D)` | Expands and projects hidden states; `d_ff ≈ 4–16 × D`. |
| **Layer norms & biases** | Negligible | Stabilize training. |

Total parameters ≈  
`V*D + L * [4H(D²) + H(d_ff·D)]`, where `L` is number of transformer blocks, `H` heads, `D` hidden size.

Why it matters:  
- **Capacity** – more params → richer function space; can model complex language patterns.  
- **Compute** – FLOPs ∝ `L * D²`; memory ≈ `O(L*D²)`.  
- **Generalization vs overfitting** – larger models need more data and regularization.

**Edge cases**  
- Extremely large vocabularies inflate embedding cost disproportionately.  
- Models with sparse attention reduce the quadratic term, altering the size‑capacity trade‑off.  
- Quantized or low‑rank factored weights can shrink runtime size without changing theoretical param count.

**Optimize & communicate**  
I’d highlight that “model size” is a proxy for computational budget and expressiveness, but the real metric is *effective capacity*: how many distinct patterns a model can capture given data. I would conclude by noting that engineers balance size against latency, energy, and deployment constraints—an essential trade‑off in production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
