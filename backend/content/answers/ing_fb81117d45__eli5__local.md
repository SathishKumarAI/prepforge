---
qid: ing_fb81117d45__eli5__local
question: 'Explain: Design a service that turns the conversation into draft orders:
  labs, imaging, referrals, prescriptions. Assume tool calls against the EHR.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 204
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:13:22-05:00'
sources: []
---

Imagine you’re at a kitchen counter where a chef (the AI) listens to your recipe request (the patient’s conversation). As you speak—“I’ve had chest pain and a fever”—the chef instantly pulls out the right ingredients: a blood test, an X‑ray, a specialist call, and a cough medicine. In this analogy, each ingredient is a *draft order* in the hospital’s electronic record (EHR).

The AI tool is like that chef, but it talks to the kitchen’s inventory system (the EHR). When you finish speaking, the AI sends a short note to the EHR: “Order CBC, Order chest X‑ray, Refer cardiology, Prescribe amoxicillin.” The orders appear ready for review and approval by the real doctor—just as the chef hands you a neatly arranged plate. This keeps the conversation focused while automatically drafting all the necessary medical actions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
