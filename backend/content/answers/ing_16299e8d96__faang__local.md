---
qid: ing_16299e8d96__faang__local
question: 'Q: What is the difference between MHA, MQA, and GQA?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 504
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:34:59-05:00'
sources: []
---

**Clarify**  
You’re asking about three “Q” acronyms that surface in AI research: **MHA (Multi‑Head Attention), MQA (Masked Query‑Attention), and GQA (Graph‑Query‑Attention)**.  
*Assumptions*: All refer to attention mechanisms in transformer‑style models; you want a concise technical comparison rather than implementation details.

**Approach**  
1. Define each module’s core operation.  
2. Highlight the key architectural difference.  
3. Summarize use‑case scenarios and performance trade‑offs.

**Depth**  

| Mod | Core Idea | Distinguishing Feature | Typical Use |
|-----|-----------|-----------------------|-------------|
| **MHA** | Split queries, keys, values into *h* heads → parallel dot‑product attention per head. | Parallelism across heads; each head learns a distinct representation subspace. | General language/vision transformers (BERT, ViT). |
| **MQA** | Introduces a mask on the query side to prevent attending to future tokens or to enforce locality. | Query‑side masking instead of key‑side (as in causal attention). | Autoregressive generation, sequence‑to‑sequence with strict ordering. |
| **GQA** | Extends MHA to graph structures: queries are node embeddings; keys/values come from neighboring nodes and optionally edge features. | Graph‑aware adjacency weighting; often uses message‑passing layers before attention. | Graph neural nets for chemistry, recommendation, or knowledge graphs. |

**Edge Cases**  
- *MHA*: If head count is too low, representation capacity shrinks; too high → over‑parameterization.  
- *MQA*: Mask errors (off‑by‑one) break causality, leading to data leakage.  
- *GQA*: Sparse graphs can yield very few keys per query, causing unstable gradients.

**Optimize & Communicate**  
Explain that the choice hinges on data structure: flat sequences → MHA; ordered sequences needing strict causality → MQA; relational or non‑Euclidean data → GQA. Mention that hybrid variants (e.g., masked multi‑head over graphs) exist for complex tasks. This structured answer showcases clear reasoning, technical depth, and awareness of practical pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
