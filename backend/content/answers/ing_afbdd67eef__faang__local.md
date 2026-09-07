---
qid: ing_afbdd67eef__faang__local
question: 'Explain: Q: Compare MHA, GQA, and MQA. — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 675
total_tokens: 916
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:31:55-05:00'
sources: []
---

**Clarify**  
We’re comparing three multi‑head attention variants used in transformer‑style models: **Multi‑Head Attention (MHA)**, **Grouped Query Attention (GQA)**, and **Mixture‑of‑Query Attention (MQA)**. I’ll assume the context is natural language processing or vision transformers where queries, keys, and values are projected from a hidden state. We want to understand their computational trade‑offs and expressive power.

**Approach**  
1. Define each mechanism’s core idea.  
2. Explain how they differ in key/value grouping or mixing.  
3. Summarize computational complexity (time/space).  
4. Highlight typical use cases.

**Depth**  

| Mechanism | Core Idea | How It Works | Complexity | Strengths |
|-----------|-----------|--------------|------------|-----------|
| **MHA** | Parallel heads each attend over all keys. | Split hidden dimension into *h* heads; each head performs scaled dot‑product attention independently, then concatenate outputs. | \(O(h \cdot n^2 d_k)\) time, \(O(n^2 h d_k)\) memory (n = seq length). | Simple, highly expressive; captures diverse interactions. |
| **GQA** | Divide keys/values into *g* groups per head; each query attends to only its group. | For head *i*, queries are projected into *g* sub‑heads that attend over disjoint key/value subsets. Reduces cross‑group computation. | \(O(h \cdot g \cdot (n/g)^2 d_k)\) ≈ \(O(h n^2 d_k / g)\); memory similar but partitioned. | Linear speedup with *g*; preserves head diversity while cutting cost. |
| **MQA** | Mix multiple query projections per head to attend over all keys, then mix the results. | Each head has *m* sub‑queries; compute attention for each sub‑query over full key set, then aggregate via learned weights. | \(O(h \cdot m \cdot n^2 d_k)\); if *m* ≪ *h*, still cheaper than MHA. | Allows richer query interactions without exploding head count; flexible trade‑off between expressivity and cost. |

**Edge Cases**  
- Very long sequences: GQA’s grouping may cause cache misses if groups are too small.  
- Small batch sizes: MHA can saturate GPU cores; GQA/MQA might underutilize resources.  
- When *g* = 1 or *m* = 1, all reduce to standard MHA.

**Optimize & Communicate**  
- In practice, pick **GQA** when you need linear speedup and the task benefits from localized attention (e.g., vision patches).  
- Use **MQA** for tasks requiring global context but with limited compute (e.g., long‑form text generation).  
- Always benchmark on target hardware; report latency vs. perplexity/accuracy trade‑offs.  

This framework shows clear reasoning, quantitative comparison, and actionable guidance—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
