---
qid: ing_8850192891__think__local
question: 'Explain: Comparison — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 489
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:03:38-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Ask whether the audience is familiar with transformers or just basic neural nets.  
   - Assume we’re comparing *self‑attention*, *cross‑attention*, and *global vs. local* variants (e.g., scaled dot‑product, additive).  

**2️⃣ Adopt a mental framework**  
   - Use a 3‑axis table: **Purpose** (why the attention is used), **Mechanism** (mathematical operation), and **Computational cost / locality**.  
   - Think of each variant as a “design choice” that trades off expressiveness, efficiency, and interpretability.

**3️⃣ Step‑by‑step reasoning**  
   1. Define the generic attention formula \( \text{Attention}(Q,K,V)=\text{softmax}\!\left(\frac{QK^\top}{\sqrt d}\right)V \).  
   2. Explain *self‑attention*: \(Q=K=V=x\) → each token attends to all others.  
   3. Show *cross‑attention*: \(Q\) from one sequence, \(K,V\) from another (used in encoder‑decoder models).  
   4. Contrast *global* (full matrix) vs. *local* or *sparse* attention (windowed masks, linear‑time tricks).  
   5. Highlight additive attention as an alternative to dot‑product and its computational profile.

**4️⃣ Common traps**  
   - Mixing up query/key/value roles when describing cross‑attention.  
   - Forgetting that scaling is only for dot‑product; additive has no such term.  
   - Assuming locality always reduces cost—some sparse patterns still require extra bookkeeping.

**5️⃣ Sanity‑check & communicate**  
   - Verify each variant’s dimensions match (e.g., \(Q\in \mathbb R^{n\times d}\)).  
   - Summarize the trade‑offs in a quick bullet list: expressiveness, speed, memory.  
   - End with an example sentence that shows how a transformer uses self‑attention for context and cross‑attention to attend to encoder outputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
