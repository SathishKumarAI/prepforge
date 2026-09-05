---
qid: ing_96a03ff7f2__eli5__local
question: 'Explain: Ship agents with confidence. — AI Agent Testing and Evaluation
  | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 230
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:36:42-05:00'
sources: []
---

Imagine you’re at a busy harbor where many boats (the *agents*) need to dock safely. Each boat has a GPS that tells it where the quay is, but the signal can be fuzzy—sometimes it’s clear, sometimes it’s shaky. A “confidence” score is like a weather report for each boat: 90 % means the GPS is almost certain about the spot; 10 % means the boat might drift off course.

When we test AI agents, we give them tasks (like docking) and let them try. After each attempt, we ask them how sure they are that they did it right—this is their confidence. If an agent says “I’m 95 % sure” but actually misses the dock, we learn its confidence was over‑optimistic. Over many trials we compare *what* the agent did with *how confident* it felt, and adjust the AI so its confidence better matches reality—just like a navigator learning to trust or doubt the GPS signal in different conditions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
