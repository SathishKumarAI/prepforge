---
qid: ing_4fae6fe0c8__eli5__local
question: 'Explain: Q: Explain context rot and your full mitigation stack for a multi-hour
  loop.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 284
total_tokens: 449
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:43:17-05:00'
sources: []
---

**Context rot** is like trying to read a long story in a room that keeps changing the lights. Each time you turn back, the text looks different, so your brain forgets what it just saw. In AI, a “context window” holds only a limited amount of text (the “story”). If a conversation runs for many hours, new messages push older ones out—your model can’t remember earlier parts, and its answers drift or repeat.

**Mitigation stack for a multi‑hour loop**

1. **Chunking** – split the chat into small, self‑contained sections that fit in the window.
2. **Summarisation** – after each chunk, generate a concise summary and feed that back as new context.
3. **External memory** – store key facts or user preferences in a separate database; load them when needed.
4. **Prompt templating** – prepend a brief “memory recap” to every prompt so the model starts with what matters.
5. **Rot‑aware design** – limit how many old chunks are kept, discarding only those that no longer influence the topic.

Together, these steps keep the AI’s “eyes on the page” even when the conversation stretches for hours, preventing context rot and keeping responses coherent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
