---
qid: ing_1dc6add350__eli5__local
question: 'Q: How would you prevent an AI agent from causing damage through tool calls?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 219
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:23:40-05:00'
sources: []
---

Imagine an AI as a curious child who can ask the house’s smart assistant for things—“turn on the lights,” “open the door.” To keep it from accidentally causing trouble (like blasting music loudly or unlocking doors), we set up three safety steps.

1. **Guardrails** – We give the AI a list of *allowed actions* and a rule that any request outside that list is automatically rejected.  
2. **Check‑in checkpoints** – Before each tool call, the AI must ask “Can I do this?” The system replies with a short confirmation or denial based on safety rules.  
3. **Supervised sandbox** – All calls go through a monitoring layer that watches for harmful patterns (e.g., repeated attempts to open doors) and stops the request if it looks dangerous.

By combining these layers—permission lists, real‑time checks, and oversight—the AI can still be helpful while staying safely within bounds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
