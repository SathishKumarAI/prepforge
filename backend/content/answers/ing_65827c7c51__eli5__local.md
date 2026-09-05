---
qid: ing_65827c7c51__eli5__local
question: 'Explain: Requirements Gathering — Design a Distributed Job Scheduler -
  System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 241
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:17:09-05:00'
sources: []
---

**Imagine you’re planning a city‑wide festival that runs on many stages at the same time.**  
Each stage (a “worker” in computing) can host one performance (“job”) at a moment, but the whole festival must finish on schedule and never let two performances clash on the same stage.

1. **Requirements Gathering** is like asking the city council what the festival needs: how many stages, how long each act lasts, who can’t share a stage (conflicts), and how to keep the crowd moving smoothly.  
2. **Designing a Distributed Job Scheduler** is then building the master control room that keeps all stages in sync: it knows which acts are ready, assigns them to free stages, reschedules if a stage breaks down, and balances the load so no stage gets overloaded while another sits idle.

In this analogy, *jobs* = festival acts, *workers* = stages, *scheduler* = control room. The goal is to finish the festival on time without any stage overcrowding—exactly what a distributed job scheduler does in computer systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
