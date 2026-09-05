---
qid: ing_798baa0b77__star__local
question: 'Explain: Alignment, RLHF, and Preference Optimization'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 350
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:36:48-05:00'
sources: []
---

**Situation**  
When I joined the conversational AI team at a fintech startup, our LLM‑powered assistant was giving overly confident but factually incorrect responses during compliance reviews. The product manager demanded that we reduce hallucinations before the next regulatory audit.

**Task**  
I had to align the model’s behavior with user safety and factual accuracy, using reinforcement learning from human feedback (RLHF) and preference optimization so that it would prioritize verified data over fluent but wrong answers.

**Action**  
First, I collected a corpus of 5,000 real customer queries paired with expert‑graded responses. We trained a reward model (a lightweight BERT classifier) to score candidate replies on factuality and politeness. Next, we ran policy gradient RL (PPO) against the base GPT‑4 fine‑tuned checkpoint, using the reward model as the critic. To handle sparse rewards, I incorporated preference optimization by clustering similar queries and adjusting exploration rates per cluster. We also set up a continuous evaluation pipeline that automatically flagged hallucinations in live traffic.

**Result**  
Within three weeks the hallucination rate dropped from 27 % to under 4 %, while user satisfaction scores rose from 3.8/5 to 4.6/5 on post‑interaction surveys. I learned that aligning a model is not just about fine‑tuning; it’s an iterative loop of human judgment, reward engineering, and careful exploration control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
