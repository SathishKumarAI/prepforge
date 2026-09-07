---
qid: vq_d7df2d71e9__aws__local
question: What’s the best way to build strong friendships?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 403
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:17:07-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
In 2022 I led a cross‑functional “Friendship Lab” initiative at a mid‑size SaaS company to improve employee engagement. Our goal was to increase the average number of close workplace friendships by 25% in six months—an upstream metric tied to retention and productivity.

**Action (Dive Deep, Bias for Action)**  
I first ran an anonymous pulse survey (N = 1,200) to identify pain points: “lack of shared interests” (62%) and “busy schedules” (48%). Based on the data I designed a lightweight platform using AWS AppSync + DynamoDB that matched employees by hobbies and time slots. I deployed the solution in a single region with auto‑scaling groups behind an Application Load Balancer, costing <$200/month. Weekly Slack bots reminded participants to schedule coffee chats; we also introduced “Friendship Fridays” where teams shared stories—an inexpensive cultural lever.

**Result (Deliver Results)**  
After six months, the average number of close friendships per employee rose from 1.8 to **2.6** (+44%), and voluntary turnover dropped by **9%** in the same period. Survey satisfaction scores on “team bonding” climbed from 3.4/5 to 4.7/5. The platform is now used by 78% of employees and has a 99.8 % uptime, meeting our SLA without additional cost.

**Learning & Bar‑Raiser Takeaway**  
I owned the end‑to‑end loop—from data capture to product rollout—and iterated quickly based on real feedback. I dove deep into user pain points, quantified impact with concrete metrics, and demonstrated that small, well‑scoped AWS services can drive large cultural change while staying cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
