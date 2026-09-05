---
qid: ing_7a31ad1fba__eli5__local
question: 'Explain: Making sense of these patterns — What do you mean by \u201cEvent-Driven\u201d?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 202
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:50:19-05:00'
sources: []
---

Imagine a smart kitchen where every appliance reacts only when someone turns on a switch, not while it sits idle. In machine learning “event‑driven” means the system waits for a specific signal—an *event*—before it starts working. The event could be a new piece of data arriving, a user clicking a button, or a sensor detecting motion. Once that trigger happens, the model processes the input and produces an output, then goes back to waiting.

Think of the model as a chef who only begins cooking when you place ingredients on the counter. The chef doesn’t pre‑heat the oven or chop vegetables unless you actually put them there. This keeps resources focused on what matters right now and lets the system respond quickly to changing inputs. In short, event‑driven ML listens for a cue, acts immediately, then pauses until the next cue arrives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
