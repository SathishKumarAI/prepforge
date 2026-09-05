---
qid: ing_91503e1944__eli5__local
question: 'Explain: Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 232
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:27:18-05:00'
sources: []
---

Imagine you’re at a big pizza party where each guest gets a slice that’s always the same size no matter how many friends join or leave. **Consistent hashing** is like a smart pizza‑cutting board that keeps slices balanced even when people walk in or out.

- **Hash function**: A recipe that turns a name (like “Alice”) into a spot on the board, called a *hash value*.  
- **Ring**: Picture the board as a circle. Every guest’s slice sits at their hash spot, and if you run off one end, you loop back to the start—this is the *circular space*.

When a new server (a “slice”) joins, only the guests whose spots fall between the new server and its neighbor need to change slices; the rest keep theirs. If a server leaves, only those who were eating there switch to the next slice. Thus, most data stays put while the system scales smoothly—just like keeping your pizza slice unchanged when friends arrive or depart.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
