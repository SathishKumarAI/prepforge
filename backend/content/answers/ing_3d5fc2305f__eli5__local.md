---
qid: ing_3d5fc2305f__eli5__local
question: 'Explain: Traces — Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 208
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:13:03-05:00'
sources: []
---

Imagine your AI model is a busy kitchen. Each recipe step—data arrives, the model thinks, it sends a response—is like a cooking action. **Traces** are the detailed cook‑books that record every single action taken during one dish: when ingredients were added, how long each stove was on, and which sauce was mixed. In AI, a trace logs the exact path an input takes through the system—each function call, decision point, and data transformation—so you can see what happened, why something went wrong, or how to improve performance.

Just as a chef can review the cook‑book to spot a burnt step or missing ingredient, engineers use traces to observe (or *observe‑ability*) the AI’s inner workings. The trace is a sequence of events with timestamps and identifiers; it lets you replay a single request and diagnose issues in real time without guessing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
