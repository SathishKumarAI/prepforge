---
qid: ing_64e0eb3af1__eli5__local
question: 'Explain: Evaluation plan — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 206
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:15:50-05:00'
sources: []
---

Imagine you’re teaching a robot to turn grocery lists into shopping‑cart orders. First, give it a “practice set” of lists (test data) and ask it to write the exact order instructions (SQL queries). Then check how many items it got right—this is **accuracy**. Next, see how fast it can finish each list; that’s **speed** or latency. Sometimes the robot might understand some words but misinterpret others—measure these errors with **precision** and **recall** to see if it’s missing pieces or adding extras. Finally, test it in a real kitchen: let users type free‑form lists (unstructured text) and see how often the resulting cart matches what they actually needed. This mix of metrics gives you a clear picture of whether your Text‑to‑SQL agent is reliable, quick, and useful in everyday use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
