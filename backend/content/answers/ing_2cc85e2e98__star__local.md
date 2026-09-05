---
qid: ing_2cc85e2e98__star__local
question: 'Explain: Clarifying Questions — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 343
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:57:35-05:00'
sources: []
---

**Situation**  
During a mock interview for a senior backend role, I was asked to design a high‑availability listing search service for Airbnb. The interviewer stopped midway and said, “Let’s talk about some clarifying questions first.”  

**Task**  
My goal was to surface hidden requirements—latency targets, data freshness, and traffic patterns—so that the architecture I propose would truly meet business needs.  

**Action**  
I started by asking:  
1. *What is the average search latency we must guarantee?* (They answered < 200 ms).  
2. *How often do listings change per region?* (High‑traffic cities update every 5 min, rural areas hourly).  
3. *Do we need to support A/B testing for ranking algorithms in real time?* (Yes, with zero user impact).  
4. *What is the peak QPS expected?* (≈ 120k requests/second globally).  
With these answers I chose a sharded Elasticsearch cluster backed by a read‑through cache in Redis, and designed an incremental update pipeline using Kafka to keep data fresh while keeping latency low.  

**Result**  
The resulting design met the 200 ms SLA, handled 150k QPS with 99.9% uptime, and allowed live A/B tests without downtime. I learned that asking precise clarifying questions turns vague prompts into concrete, measurable requirements, saving time and preventing costly redesigns later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
