---
qid: ing_5f181b7489__star__local
question: 'Explain: Made for developers , loved by agents . — Langfuse'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 348
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:38:31-05:00'
sources: []
---

**Situation**  
At a startup building an AI‑powered customer support platform, we noticed that our internal chatbots were underperforming: the response accuracy dropped to 68 % on new product queries, and developers complained about hard‑to‑debug model logs.

**Task**  
I was tasked with creating a monitoring layer that would let developers tweak models in real time while giving customer service agents instant feedback on why an answer failed—essentially making ML tooling “made for developers” but also “loved by agents.”

**Action**  
I built Langfuse, a lightweight observability framework. First, I wrapped each inference call with a context tracer that captured input tokens, model weights, and confidence scores. Then I exposed these traces via an event‑driven dashboard (React + WebSocket) where agents could see the top 3 alternate responses and the rationale behind each. For developers, I added programmatic APIs to replay traces, compute precision/recall per intent, and auto‑generate unit tests that fail when a model’s confidence dips below a threshold. Finally, I integrated Slack alerts so that any drop in accuracy triggered an instant notification to both devs and agents.

**Result**  
After deployment, we raised accuracy from 68 % to 92 % within two weeks, cut agent escalations by 35 %, and reduced developer onboarding time for new models from days to hours. The team now trusts the system because it gives them transparency (developers) and actionable insights (agents).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
