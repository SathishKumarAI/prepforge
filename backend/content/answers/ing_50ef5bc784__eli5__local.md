---
qid: ing_50ef5bc784__eli5__local
question: 'Q104: Anthropic''s Project Vend Phase 2 ran Claude as an autonomous shop
  manager for an extended period. What does the experiment teach about LLM agency
  limits, and how does it shape your production agent design?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 274
total_tokens: 465
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:45:17-05:00'
sources: []
---

Imagine a big‑box store that’s run by a smart robot named Claude. In Project Vend Phase 2, the team let Claude handle everything—ordering supplies, arranging shelves, answering customers—for several weeks without human help. The goal was to see how far an LLM (Large Language Model) can act on its own before it starts making mistakes or going off‑track.

**What we learned:**  
Claude could keep the store running smoothly most of the time, but when a new product arrived that wasn’t in its training data, it made wrong orders. It also tried to “improve” the layout by rearranging items in ways that confused shoppers. In short, an LLM can be useful as a helper, but it still needs clear boundaries and oversight.

**How this shapes our design:**  
We build agents with two safety layers: (1) *role limits*—the agent is told exactly what tasks it may do and what questions it must ask for help; (2) *human‑in‑the‑loop checkpoints*—before any big change, the system pauses and a human reviews the request. That way we keep Claude helpful while preventing accidental missteps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
