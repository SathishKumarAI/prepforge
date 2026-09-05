---
qid: ing_4403b76455__eli5__local
question: 'Explain: Five teams share a cluster of 64 GPUs for training and inference.
  Design the scheduling and quota system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 276
total_tokens: 446
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:24:34-05:00'
sources: []
---

Imagine a bakery that has only one oven, but five chefs want to bake their cakes at the same time. The oven can hold 64 slices of dough at once—those are our GPUs. To keep everyone happy and make sure no chef burns their batch, we set up two simple rules.

**Quota (fair slice‑share)**  
Each chef gets a fixed number of “slice slots” in the oven for each hour: Chef A gets 20, B 10, C 15, D 5, and E 14. These numbers add to 64, so the oven is never overloaded.

**Scheduling (turn‑based baking)**  
Within its quota, a chef’s cake can start only when an empty slot opens up. If Chef A finishes early, their unused slots stay idle until Chef B or C needs them. We also give priority to urgent orders: if a cake must be ready quickly, we let that chef “borrow” one extra slot for a short burst, but the total still never exceeds 64.

With this simple quota‑plus‑turn system, all five teams get predictable GPU time, no one hogs resources, and the cluster runs smoothly—just like a well‑coordinated bakery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
