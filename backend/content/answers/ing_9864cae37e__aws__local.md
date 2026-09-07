---
qid: ing_9864cae37e__aws__local
question: 'Explain: When (and when not) to use agents — Building Effective AI Agents
  \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 421
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:10:18-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with building a customer‑support chatbot that could handle high‑volume, multimodal queries for a SaaS product. The goal was to reduce average handling time by 30 % while keeping SLA > 95 %.  

**Action**  
I first evaluated whether an **AI agent** (Anthropic’s *Building Effective AI Agents*) would be appropriate versus a simple retrieval‑augmented generation pipeline.  
- **When to use agents:**  
  - *Complex, multi‑step workflows* where the system must remember context and make decisions across external APIs (e.g., booking tickets, updating CRM).  
  - *Dynamic policy enforcement* or real‑time compliance checks that require a stateful decision engine.  
- **When not to use agents:**  
  - *Single‑turn Q&A* or static FAQ tasks where a stateless LLM suffices and latency must be < 200 ms.  

I implemented an **AWS Lambda** orchestration layer that invoked Anthropic’s agent endpoint for workflow steps, while lightweight queries hit OpenAI’s GPT‑4 Turbo via API Gateway for instant responses. The design used **Step Functions** to maintain state across calls, **DynamoDB** for session persistence, and **SQS** for queuing high‑volume requests.  

**Result**  
- Reduced average handling time from 90 s to 63 s (30 % improvement).  
- SLA maintained at 97 %.  
- Cost decreased by 18 % due to efficient use of stateless calls and reduced Lambda invocations.

**Reflection**  
I learned that over‑engineering with agents can inflate latency; a hybrid approach balances flexibility and performance. This demonstrates **Ownership**, **Dive Deep**, and **Bias for Action**—the very principles Amazon looks for in a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
