---
qid: ing_287ecd59cf__eli5__local
question: 'Explain: The interview loop — Sierra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 215
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:39:52-05:00'
sources: []
---

Imagine you’re building a super‑smart robot that learns by talking with people—like a detective who keeps asking questions until the mystery is solved. In *Sierra*, the “interview loop” is just that: a continuous cycle where the AI (the detective) asks a question, listens to the answer, updates its understanding, and then decides what to ask next.

1. **Ask** – The system picks a prompt based on what it already knows.
2. **Listen** – It receives your reply and checks whether the answer fits its current model.
3. **Update** – If the reply gives new clues, the AI rewrites its internal map; if not, it tweaks the question.

The loop keeps running until the robot feels confident that the answer is complete or no more useful questions can be asked. Think of it as a friendly conversation where each turn brings both sides closer to the truth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
