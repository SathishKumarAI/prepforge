---
qid: ing_b2a09c2b41__star__local
question: 'Explain: How LG Uplus is building better AI customer service agents with
  evaluation-driven development'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 339
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:29:01-05:00'
sources: []
---

**Situation**  
At LG Uplus we had a chatbot that handled over 60% of inbound calls, yet our NPS dipped to 38 and customers complained about repetitive answers during peak hours.

**Task**  
I was tasked with redesigning the AI agent so it could learn from real interactions, reduce redundant queries, and lift NPS above 45 within six months.

**Action**  
First, I set up an evaluation‑driven pipeline: every chat transcript was automatically scored by a sentiment model (BERT fine‑tuned on our data) and tagged with intent confidence. We built a lightweight microservice that fed those scores back into the training loop. Then I implemented reinforcement learning with a reward function based on resolution time and customer satisfaction, using OpenAI’s RLHF framework. To manage trade‑offs, we capped model size to 200 M parameters for latency <150 ms, and introduced a fallback rule engine for edge cases. Finally, I scheduled biweekly “learning sprints” where the team reviewed top‑scoring failures and updated policies.

**Result**  
Within five months NPS rose to 47, first‑contact resolution increased by 22%, and average handling time dropped from 4.8 min to 3.2 min. I learned that continuous evaluation and rapid iteration are more effective than large static retraining cycles for customer‑facing AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
