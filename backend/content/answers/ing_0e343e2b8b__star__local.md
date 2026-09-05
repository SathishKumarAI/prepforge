---
qid: ing_0e343e2b8b__star__local
question: 'Explain: From Prompting to Loop Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 349
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:57:04-05:00'
sources: []
---

**Situation** – At my previous startup we were building an automated customer‑support chatbot for a telecom client. The initial prompt‑based model was great at single‑turn queries but fell apart when users asked follow‑up questions or changed context mid‑conversation, leading to a 35 % drop in NPS.

**Task** – I had to redesign the interaction so the bot could maintain state and adapt prompts dynamically, turning the one‑off prompting system into a robust conversational loop that kept users satisfied while staying within our compute budget.

**Action** – First, I instrumented the model with a lightweight dialogue manager that stored key slots (plan ID, issue type) in Redis. Then I rewrote the prompt template to include “system” messages reflecting the conversation history and a small “memory chunk” of prior user turns. I added an RL‑based loop engine: after each response, the bot scored possible next prompts using a bandit algorithm that balanced exploration (trying new clarifying questions) with exploitation (using high‑confidence answers). Finally, I set up continuous A/B testing in production to iterate on reward signals and prune low‑performing prompt variants.

**Result** – Within three weeks, the loop‑engineered bot cut repeated‑question rates by 42 % and lifted NPS from 68 to 81. We also reduced inference cost per turn by 18 % thanks to smarter prompting. I learned that treating prompts as modular, stateful components and coupling them with a lightweight reinforcement loop can dramatically improve real‑world conversational AI performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
