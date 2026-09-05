---
qid: ing_eb26c00174__eli5__local
question: 'Explain: Tensor Parallelism (TP) — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 180
total_tokens: 338
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:47:39-05:00'
sources: []
---

Imagine a giant recipe that needs to be cooked by many chefs at once.  
The recipe is the AI model, and each chef handles one *ingredient* (a slice of the model’s weight matrix).  

In **tensor parallelism**, we split the big ingredient into equal parts and hand each part to a different chef (GPU). All chefs work simultaneously on their piece of the same step—like chopping onions in separate bowls.  
When it’s time to combine the finished pieces, the chefs bring them together, and the dish is ready for serving.

So, tensor parallelism is just a way to divide one large “tensor” into smaller chunks so multiple GPUs can process it at the same time, speeding up inference while keeping the overall model intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
