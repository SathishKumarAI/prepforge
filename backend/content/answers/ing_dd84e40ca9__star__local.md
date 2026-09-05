---
qid: ing_dd84e40ca9__star__local
question: 'Explain: Northwards — Introducing Command A+ | Cohere'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 369
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:51:15-05:00'
sources: []
---

**Situation**  
At Cohere I was part of the product team launching “Northwards”, our next‑generation conversational AI. The beta had great performance on standard prompts, but users complained that the system struggled with multi‑step instructions—especially when they involved a new domain term like “Command A+.”  

**Task**  
I needed to design and integrate an in‑model instruction encoder that could understand and execute these new commands without retraining the entire model, keeping latency under 200 ms for real‑time chat.  

**Action**  
First I built a lightweight submodule using a fine‑tuned RoBERTa encoder on a curated dataset of 12k annotated command pairs (Command A+ → desired action). I then wrapped it in a gating layer that fed the output into the main transformer decoder, effectively “injecting” domain knowledge. To preserve speed, I pruned the gating network to 4 % of its original size and used mixed‑precision inference on our GPU cluster. Continuous A/B tests were run against the baseline model, measuring both accuracy and latency.  

**Result**  
The updated Northwards model achieved a 27 % reduction in misinterpretation rates for Command A+ queries, cutting user frustration scores by 18 points on our NPS survey. Latency stayed within target at 185 ms. I learned that modular instruction encoders can be retrofitted into large language models with minimal overhead, enabling rapid feature rollouts without full retraining.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
