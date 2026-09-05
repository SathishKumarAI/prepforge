---
qid: ing_597cb51383__star__local
question: 'Explain: Agentic Systems Questions — Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 359
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:26:47-05:00'
sources: []
---

**Situation** – At my last company, we were tasked with building a customer‑support chatbot that could proactively handle high‑volume ticketing for a telecom provider. The existing rule‑based bot stalled at a 40 % resolution rate and took an average of 5 minutes per interaction, far above the SLA target.

**Task** – I needed to design an agentic system: a self‑learning model that could autonomously identify escalation paths, request additional data, and update its policy without constant human intervention, all while staying within our compute budget.

**Action** – I started by framing the problem as a reinforcement learning environment. Using OpenAI Gym’s custom wrapper, I defined states (ticket metadata, user sentiment), actions (reply, ask for info, transfer to agent), and rewards (resolution time, customer satisfaction). I trained an actor‑critic network with Proximal Policy Optimization in PyTorch, integrating a small LSTM to capture dialogue context. To keep costs low, I implemented on‑policy updates only once per day and used model distillation to shrink the policy for deployment on our edge servers. I also set up a monitoring dashboard that logged action distributions and flagged outliers for human review.

**Result** – After three months of training, the bot’s resolution rate jumped to 78 % and average handling time dropped from 5 minutes to 2.3 minutes, exceeding SLA by 15 %. The system now self‑optimizes weekly with minimal manual tuning, proving that agentic AI can scale customer support while staying cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
