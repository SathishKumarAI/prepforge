---
qid: ing_57f69b9bef__eli5__local
question: 'Explain: Bandwidth — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 184
total_tokens: 344
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:55:58-05:00'
sources: []
---

**Bandwidth – the speed of traffic flow**

Think of a live‑comment system as a bustling highway where each user’s message is a car trying to reach the screen (the destination). *Bandwidth* is the width and capacity of that highway: how many cars can travel side by side at once.  

If the highway is narrow (low bandwidth), cars queue up, messages arrive late or drop out—just like a slow internet connection makes comments lag. If it’s wide (high bandwidth), traffic moves smoothly, new comments pop up instantly.

In design, you estimate how many users will be on the “highway” at peak time and choose servers, load balancers, and network links that keep the lane wide enough. That way every comment rides through quickly, keeping the conversation lively and real‑time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
