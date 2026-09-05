---
qid: ing_3725925f09__eli5__local
question: 'Explain: 1 Introduction — MemoryGraft: Persistent Compromise of LLM Agents
  via Poisoned Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 200
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:03:09-05:00'
sources: []
---

Imagine a classroom where students learn by remembering stories told by their teacher. Now, suppose a mischievous student secretly slips a note into the story book that changes how the story is remembered every time it’s read again. After many lessons, all students start telling the story with that hidden twist—without anyone noticing they’re being tricked.

In AI, large language‑model (LLM) agents “learn” from past interactions stored in memory. **MemoryGraft** is a sneaky way to poison this memory: an attacker injects malicious experiences into the agent’s long‑term storage. Each time the agent retrieves those memories to answer questions or make decisions, it unknowingly follows the attacker’s hidden instructions—creating a persistent compromise that survives across sessions and updates. The analogy shows how a small, unnoticed change in stored experience can steer an AI’s behavior over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
