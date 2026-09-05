---
qid: ing_b23c00f5d1__eli5__local
question: 'Explain: Disadvantages — Event-Driven Architecture (EDA): A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 276
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:19:22-05:00'
sources: []
---

Imagine a classroom where every student can shout whenever they have an idea, and the teacher must listen to each shout, decide what to do, and then tell everyone the outcome. That’s like event‑driven architecture (EDA): components send tiny “shout” messages called events, and other parts react when they receive them.

**The downsides for machine‑learning systems:**

1. **Hard to follow the flow** – because many small events jump around, it’s tough to trace how data moves from one model to another, like following a whisper in a noisy room.
2. **Timing problems** – if two events arrive at once, deciding which runs first can be unpredictable, just as students shouting together make it hard for the teacher to answer everyone fairly.
3. **Debugging is tricky** – when something goes wrong, you need to hunt through many event logs, like searching a library of sticky notes scattered everywhere.
4. **Overhead** – every event carries its own header and routing information, adding extra “paperwork” that can slow down real‑time predictions.

So while EDA gives flexibility, it trades clarity, predictability, and speed—things ML pipelines often need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
