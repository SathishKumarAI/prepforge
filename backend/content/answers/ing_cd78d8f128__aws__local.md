---
qid: ing_cd78d8f128__aws__local
question: 'Explain: Write Policy Design — Context vs. Memory Engineering in Agentic
  AI Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 411
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:05:41-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a cross‑functional team to build an agentic chatbot that could autonomously schedule meetings and send follow‑up emails for a Fortune 500 client. The core challenge was balancing *Context* (real‑time conversational state) with *Memory Engineering* (long‑term knowledge of user preferences).  

**Action**  
I applied **Customer Obsession** and **Ownership**: I wrote a policy framework that split the agent into two microservices—`ContextService` (stateless Lambda + DynamoDB TTL for 24 h) and `MemoryService` (stateful SageMaker endpoint backed by Amazon QLDB). Policies were encoded in AWS IAM roles that allowed each service only the minimal permissions needed to read/write its own data store. I introduced a “policy‑audit” Lambda that logged every policy change, ensuring traceability.  

**Result**  
Post‑deployment, we saw a **45 % reduction in user‑reported confusion** (measured via NPS) and a **30 % increase in task completion rate**. The split architecture cut the overall latency from 1.2 s to 0.6 s while keeping costs below $12k/month—down 18 % from the previous monolithic design.  

**Bar‑raiser notes**  
- Demonstrated *ownership* by driving end‑to‑end policy design.  
- Showed *dive deep* with precise AWS service choices and trade‑off analysis (QLDB vs DynamoDB, Lambda cold starts).  
- Quantified impact via real metrics.  
- Learned from an initial failure where a shared state caused stale context; we refactored to the current split model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
