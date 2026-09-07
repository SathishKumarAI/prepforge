---
qid: ing_a082219b53__aws__local
question: 'Explain: 1.3. Stateless — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 431
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:27:58-05:00'
sources: []
---

**Customer Obsession & Ownership**

When I joined the data‑science team at my previous company, we were asked to expose a new ML model as an API so that our mobile app could fetch predictions on‑the‑fly. The requirement was “stateless” and “RESTful,” but many engineers thought it was just jargon.

**Situation & Task**  
I had to convince the product owner that statelessness isn’t a buzzword—it’s a design choice that directly improves scalability and reliability for our 1M daily users.

**Action**  
*Clarified requirements*: I mapped out the request/response cycle, highlighting that each HTTP call contains all information needed (no session state).  
*Proposed architecture*:  
- **Amazon API Gateway** as the entry point (enforces statelessness, throttling, caching).  
- **AWS Lambda** to run inference code (cold start mitigated by provisioned concurrency).  
- **Amazon SageMaker Endpoint** for model serving (auto‑scaling, 99.9 % SLA).  
*Dive deep*: I benchmarked payload sizes and latency, showing that keeping all state in the client reduced round‑trip time by 30 ms compared to a session‑based approach.

**Result**  
The stateless REST API launched two weeks early; load testing revealed we could handle 50k RPS with <200 ms latency. Post‑deployment, the app’s prediction success rate rose from 92 % to 99 %, and cost per inference dropped by 18 % thanks to efficient caching in API Gateway.

**Bar‑raiser notes**  
- Demonstrated ownership: I owned both the technical design and stakeholder communication.  
- Deep dive: I quantified latency, throughput, and cost trade‑offs.  
- Learned from failure: A prior session‑based prototype failed during a traffic spike; that lesson shaped our stateless strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
