---
qid: ing_18d54be639__eli5__local
question: 'Explain: Atomicity — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 233
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:15:17-05:00'
sources: []
---

**Atomicity in Cloud Spanner (like a reliable vending machine)**  
Imagine you go to a vending machine that sells both gum and soda. You press the button for a gum, but then decide you want soda instead. The machine has a *“one‑step”* rule: either it gives you the gum **or** it cancels everything and doesn’t give anything at all—there’s no half‑finished transaction. That rule is called *atomicity*: an operation is indivisible; it completes fully or not at all.

In Cloud Spanner, a database that runs across many servers worldwide, atomicity means when you update several rows (for example, moving money from one account to another), the system guarantees that either **all** those changes happen together, or **none** do. If something goes wrong mid‑update—like a network glitch—the whole change rolls back, leaving the database exactly as it was before. This keeps data consistent even when many people are reading and writing at once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
