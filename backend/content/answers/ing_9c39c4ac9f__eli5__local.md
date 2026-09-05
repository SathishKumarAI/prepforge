---
qid: ing_9c39c4ac9f__eli5__local
question: 'Explain: Pitfall 5: No Graceful Degradation — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 203
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:45:04-05:00'
sources: []
---

**Pitfall 5: No Graceful Degradation**

Imagine a smart home system that controls lights, temperature, and security all at once. If the internet goes down, the whole system stops working instead of just losing remote control while keeping local switches functional. That’s “no graceful degradation.” In AI, it means when part of a model or its data source fails, the entire application crashes or gives nonsensical answers rather than falling back to simpler, reliable behavior.

*Graceful degradation*: a design that keeps essential functions alive even if some components fail. For example, an image‑recognition system might still return “unknown” for a blurry photo instead of producing a random label. Building this safety net—through fallback rules, redundancy, or simpler models—keeps users safe and trust intact when the big AI engine hiccups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
