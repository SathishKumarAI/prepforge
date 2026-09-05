---
qid: ing_1300b06ae8__eli5__local
question: 'Explain: Multi-tenant fairness and noisy neighbours'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 194
total_tokens: 350
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:05:48-05:00'
sources: []
---

Imagine a shared apartment building where each unit is a separate AI model running on the same server (the “multi‑tenant” setup). **Fairness** means that every tenant gets an equal share of the building’s resources—plenty of electricity, bandwidth, and quiet time—so no one can hog everything. In this context, fairness ensures each AI gets enough CPU cycles or memory so its predictions stay accurate.

Now picture a noisy neighbor who keeps blasting music. Even if you have a great apartment (fair allocation), that loud music can disturb your sleep (the AI’s performance). A **noisy neighbour** in computing is a process that suddenly uses a lot of resources, causing other models to slow down or become inaccurate. Good “noise‑control” policies keep the building quiet so all tenants thrive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
