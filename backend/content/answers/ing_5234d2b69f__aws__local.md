---
qid: ing_5234d2b69f__aws__local
question: How is a system prompt for a long-running agent different from one for a
  single-shot feature?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 467
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:30:56-05:00'
sources: []
---

**Answer (Amazon style)**  

*Leadership Principles:* **Customer Obsession** & **Dive Deep**

**Situation / Task**  
I was tasked to design an AI assistant that could handle multi‑turn customer support for a SaaS product while also delivering a quick, single‑shot FAQ bot. The goal was to keep user experience consistent across both use cases.

**Action**  
1. **Define scope & data needs** – For the long‑running agent I required historical context (previous tickets, session logs) and a policy engine that could persist state over hours/days. For the single‑shot feature I only needed stateless intent extraction.  
2. **Design separate system prompts**  
   *Long‑running:* “You are an empathetic support specialist. Use the conversation history and user profile to resolve issues. If unsure, ask clarifying questions.”  
   *Single‑shot:* “Answer concisely based on the FAQ corpus; no follow‑up needed.”  
3. **Implement in SageMaker Endpoint** – Two endpoints, each with a distinct prompt stored in Parameter Store. Use DynamoDB for session state (TTL 48 h) and Kinesis for real‑time analytics.  
4. **Scalability & cost** – Long‑running endpoint runs on `ml.g5.xlarge` (GPU) to support up to 200 concurrent users; single‑shot uses `ml.t3.medium` (CPU) for 80% of traffic, cutting GPU usage by 60 %.  

**Result**  
- 30 % reduction in average resolution time for long sessions.  
- 25 % fewer escalations to human agents.  
- $12k/month saved by switching most traffic to the cheaper single‑shot endpoint.

**Learnings & Bar‑raiser cues**  
I documented that prompt length directly impacts token cost and latency, so I iterated until the multi‑turn prompt was <300 tokens without losing context fidelity. The bar‑raiser would check for: ownership (I owned both endpoints), depth (I analyzed token budgets and session persistence), quantified impact (metrics above), and lessons from an initial failure where a monolithic prompt caused 200 ms latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
