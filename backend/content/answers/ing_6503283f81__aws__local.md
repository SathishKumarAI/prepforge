---
qid: ing_6503283f81__aws__local
question: What are Agent Skills? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 435
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:13:13-05:00'
sources: []
---

**Answer (Amazon Way)**  

During my last role building a voice‑assistant platform, I explained *Agent Skills* as the modular, reusable capabilities that let an autonomous agent perform domain‑specific tasks—think “BookFlight”, “SetReminder”, or “PlayMusic”.  

- **Customer Obsession & Ownership**: I designed each skill to expose a clear API (`/invoke`) and a declarative intent schema so developers could iterate fast while keeping the user experience consistent.  
- **Dive Deep & Deliver Results** (STAR):  
  - *Situation*: Our internal test suite reported >30 % failure on edge‑case queries.  
  - *Task*: Reduce failures to <1 % and cut response latency from 1.2 s to 0.8 s.  
  - *Action*: Implemented an event‑driven architecture: each skill runs in a separate AWS Lambda, triggered by Amazon Lex intent events; state persisted in DynamoDB (partition key = `skillId`). Added CloudWatch metrics per skill and automated rollback via CodePipeline.  
  - *Result*: Latency dropped to 0.75 s, failure rate fell to 0.6 %, and we scaled from 10 to 200 concurrent users without cost overruns—Lambda costs stayed under $2/month while DynamoDB read/write throughput remained <5 RCU/WCU.  

**Bar‑raiser focus:**  
- *Ownership*: I owned the full lifecycle—from design docs to production rollout.  
- *Depth*: I dissected failure logs, identified a 4 ms serialization bottleneck in the skill dispatcher.  
- *Quantified impact*: 40 % latency improvement and <1 % error rate.  
- *Learning*: The first iteration taught me that stateless skills simplify scaling; future versions will cache frequent responses in ElastiCache to hit 0.5 s latency targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
