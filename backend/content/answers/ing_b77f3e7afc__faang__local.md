---
qid: ing_b77f3e7afc__faang__local
question: 'Explain: Software — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 482
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:49:36-05:00'
sources: []
---

**Clarify**  
You’re asking how a *software* system implements **spaced‑repetition learning** (SRL) using the algorithmic insights from Wikipedia’s description of spaced repetition systems. I’ll assume:  
1. The goal is to schedule review items for optimal retention.  
2. We have a set of flashcards with known “difficulty” or “forgetting curve”.  
3. Performance feedback (correct/incorrect) feeds back into the schedule.

**Approach**  
1. **Model each item** as an object holding its *interval* and *easiness factor*.  
2. On every review, update these parameters using the SM‑2 algorithm (or a Bayesian variant).  
3. Persist state to a lightweight database; expose REST endpoints for front‑end clients.  
4. Use background workers to generate upcoming review lists per user.  

**Depth**  
- **SM‑2 Update**: `IF quality < 3 → interval = 1`; else `interval = previous_interval * easiness_factor`. Then `easiness_factor += 0.1 - (5-quality)*(0.08+ (5-quality)*0.02)`, bounded [1.3, 2.5].  
- **Scheduling**: For each user, maintain a priority queue keyed by next review date; pull the top N for today’s session.  
- **Scalability**: Use Redis for in‑memory queues; shard by user ID. Complexity per review is O(log n) for queue ops; SM‑2 update is O(1).  

**Edge Cases**  
- New items never reviewed → default 1‑day interval.  
- Extremely low quality scores → avoid infinite loops by capping minimum interval to 1 day.  
- Clock skew: store timestamps in UTC and normalize.

**Optimize & Communicate**  
I’d add adaptive “difficulty” learning via Bayesian networks for better personalization, and expose metrics (e.g., retention rate) through dashboards. I would iterate on the queueing strategy—perhaps a time‑bucketed hash to reduce contention—and benchmark with A/B tests before rollout. This shows clear design thinking, trade‑offs, and a path to production readiness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
