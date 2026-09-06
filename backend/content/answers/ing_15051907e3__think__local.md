---
qid: ing_15051907e3__think__local
question: 'Explain: ALiBi (Attention with Linear Biases) — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 529
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:05:54-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - The user wants a *conceptual* explanation of ALiBi (Attention with Linear Biases) as used in LLMs.  
   - Assume they know basic transformer math but not this specific trick.  
   - They likely want to understand why it’s useful, how it works, and its practical impact.

**2️⃣ Pick a mental model / framework**  
   - Think of ALiBi as an *attention bias* that replaces positional encodings.  
   - Use the “bias‑plus‑dot‑product” view: standard scaled dot‑product attention plus a linear term in position differences.  
   - Relate it to other positional strategies (absolute, relative) so they can see where ALiBi fits.

**3️⃣ Step‑by‑step reasoning toward the answer**  
   1. Start with vanilla transformer attention formula.  
   2. Show how positional encodings are usually added to queries/keys.  
   3. Introduce the linear bias term: \(b_{ij} = -\alpha |i-j|\).  
   4. Explain that this is a *learnable* slope per head, fixed across layers.  
   5. Discuss how it enforces locality (higher weight for nearer tokens) without storing large position tables.  
   6. Note the effect on long‑context extension: same weights work beyond trained length.  
   7. End with practical benefits (memory savings, speed, better generalization to longer sequences).

**4️⃣ Common traps & how to avoid them**  
   - Don’t conflate ALiBi with absolute positional encodings; stress that it’s a *bias* added inside the attention logits.  
   - Avoid heavy math jargon—keep formulas simple and intuitive.  
   - Don’t forget to mention that slopes are learned, not fixed; this is what gives flexibility.

**5️⃣ Sanity‑check & communicate clearly**  
   - Re‑read the explanation as if teaching a peer: does each sentence flow logically?  
   - Ask: “Did I explain why it’s useful?” If not, add a quick bullet.  
   - Keep the tone explanatory, not overly technical, and finish with a concise summary that ties back to LLM internals.

---  
Use this structure next time you need to demystify a transformer trick!

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
