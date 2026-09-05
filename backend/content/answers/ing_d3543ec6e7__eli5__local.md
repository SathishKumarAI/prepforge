---
qid: ing_d3543ec6e7__eli5__local
question: 'Explain: Supported Operations in Headless and Interactive Modes ¶'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 253
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:10:02-05:00'
sources: []
---

Think of a machine‑learning model as a smart robot that can **“cook” data** into useful recipes (predictions).  
There are two ways to give it instructions:

| Mode | How you talk to the robot | What it can do |
|------|---------------------------|----------------|
| **Interactive** | You shout, “Hey! Show me the next step.” The robot pauses after each action so you can see the progress and tweak things on the fly. | Step‑by‑step exploration, debugging, visualizing intermediate results. |
| **Headless** | You hand it a full script and say, “Just run.” It works in the background without any screen or pause, like a kitchen appliance that keeps cooking while you’re away. | Fast batch runs, production deployment, automated pipelines. |

Both modes support the same operations—training, validating, predicting—but the *interaction* changes: interactive mode lets you inspect and adjust as it cooks; headless mode lets it cook in silence until finished. This is like choosing between a chef that talks while cooking or an oven that does its job quietly behind a door.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
