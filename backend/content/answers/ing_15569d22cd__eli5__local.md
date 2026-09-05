---
qid: ing_15569d22cd__eli5__local
question: What is context rot, and what compaction strategies do you use in long-running
  agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 265
total_tokens: 430
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:09:10-05:00'
sources: []
---

**Context rot** is like a grocery list that keeps growing while you’re cooking. At first it’s handy, but after hours the list becomes so long you can’t see what’s next and you start forgetting items or buying things twice. In AI agents, the “list” is the memory of everything they’ve seen. As time passes, older facts become less useful and clutter the model’s attention, so the agent starts repeating mistakes or losing track.

**Compaction strategies** are ways to tidy that list:

1. **Summarization** – combine many past notes into a short paragraph (“I cooked chicken yesterday; I’ll need garlic next week.”).  
2. **Chunking** – group related items (all pantry staples) and remember the group instead of each item.  
3. **Selective forgetting** – drop items that are rarely used, like old coupons.  
4. **Priority tagging** – mark important facts (“deadline tomorrow”) so they stay visible even as the list shrinks.

By summarizing, grouping, and pruning, a long‑running agent keeps its memory focused, avoids context rot, and can still act accurately over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
