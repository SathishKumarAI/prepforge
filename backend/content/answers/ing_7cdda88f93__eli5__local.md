---
qid: ing_7cdda88f93__eli5__local
question: 'Explain: Instruction Execution in a TSP — The Architecture of Groq''s LPU
  - by Abhinav Upadhyay'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 249
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:54:37-05:00'
sources: []
---

Imagine a kitchen where every dish must be made exactly the same way, no matter what ingredients are used. In Groq’s **LPU (Linear Processing Unit)**, this “kitchen” is called a **TSP (Tensor Streaming Processor)**.  

Each recipe is an **instruction**—a tiny set of steps telling the LPU to take numbers from memory, multiply them, add them together, and write the result back. The TSP runs these recipes in lock‑step: every “cooking cycle” it pulls a batch of numbers (the **tensor**) from its local memory, feeds them into many small “stovetop burners” (the LPU’s arithmetic cores), and collects the cooked output all at once.  

Because every burner follows the same recipe simultaneously, the TSP can keep all its resources busy, just like a perfectly synchronized kitchen that never idles while dishes are being prepared. The result is fast, predictable, and highly efficient processing of large data arrays—exactly what machine‑learning workloads need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
