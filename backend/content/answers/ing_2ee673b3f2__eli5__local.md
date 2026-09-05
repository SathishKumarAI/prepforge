---
qid: ing_2ee673b3f2__eli5__local
question: 'Q: What is the risk of "Alignment Tax"? — Rlhf And Dpo'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 217
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:49:52-05:00'
sources: []
---

Imagine you’re teaching a robot to play chess by watching humans and then asking it “Did you like that move?” (RLHF). Every time the robot asks, it spends a bit of its battery—this is the **alignment tax**: the extra cost of getting human feedback so the robot learns what we actually want.

Now picture giving the robot a secret notebook with all your private moves. To keep that notebook safe, you add a “privacy shield” (Differential Privacy). The shield blurs some details, so the robot can still learn from the notebook but not remember every private move exactly. However, because the data is fuzzed, the robot’s learning slows down and it may need more questions to reach the same skill level—another kind of tax.

So the alignment tax is the unavoidable extra effort (time, money, battery) needed to keep a machine aligned with human values, especially when we also guard privacy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
