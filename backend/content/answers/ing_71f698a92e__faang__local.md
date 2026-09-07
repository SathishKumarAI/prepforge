---
qid: ing_71f698a92e__faang__local
question: 'Explain: Heads: MHA → MQA → GQA — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 530
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:08:31-05:00'
sources: []
---

**Clarify**  
The interviewer wants an explanation of the *Heads* progression in large‑language‑model (LLM) fundamentals: **MHA → MQA → GQA**.  
- *MHA*: Multi‑Head Attention, the core self‑attention mechanism.  
- *MQA*: Multiple Query Attention, a variant that reduces computation by sharing keys/values across heads.  
- *GQA*: Global Query Attention, an extension where a single query attends to all tokens (global token) for efficient global context.  
Assumptions: we’re discussing transformer‑style architectures and the evolution of attention mechanisms.

**Approach**  
1. Define each head type.  
2. Explain why each was introduced (efficiency, expressiveness).  
3. Show how they relate sequentially in modern LLMs.

**Depth**  
- **MHA**: For *h* heads, queries \(Q_i,K_i,V_i\) are linear projections of the input; attention per head is \(\text{softmax}(Q_iK_i^T/\sqrt d)V_i\). Final output is concatenated and projected. Complexity \(O(n^2d)\) for sequence length *n*.  
- **MQA**: Shares a single key/value pair across all heads, only queries differ per head. This cuts memory and compute by ~\(1/h\), while still capturing multi‑aspect relationships. It’s often used in sparse transformers (e.g., Longformer).  
- **GQA**: Introduces a *global query* token that attends to every position; the rest of the tokens attend only locally or sparsely. This allows global context aggregation with linear cost, enabling models like BigBird and GPT‑NeoX to scale to thousands of tokens.

**Edge Cases**  
- MHA can be overkill for short sequences—overheads dominate.  
- MQA may lose fine‑grained interactions when keys/values are too coarse.  
- GQA relies on a learned global token; if it’s poorly initialized, the model may ignore it, hurting performance.

**Optimize & Communicate**  
Highlight that the progression reflects a trade‑off curve: *MHA* → expressive but quadratic; *MQA* → cheaper but slightly less expressive; *GQA* → linear scaling with a global context. In an interview, I’d note how each design choice impacts memory, speed, and downstream tasks, demonstrating deep understanding of transformer internals while staying concise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
