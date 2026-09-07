---
qid: ing_76ce5b4272__aws__local
question: 'Explain: Agent SDKs (choose based on your primary model provider)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 426
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:53:46-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked to prototype a customer‑support chatbot that could answer FAQs in real time while scaling to 10 k concurrent users. The goal was to reduce ticket volume by 30 % and cut agent cost by $200k annually.

**Action – Agent SDK Design (OpenAI)**  
I chose the **OpenAI Agents SDK** because it abstracts the policy‑based orchestration of LLM calls, allowing me to focus on business logic.  
1. **Define agents**: `QueryAgent` for parsing user intent, `InfoAgent` for retrieving knowledge base entries, and `FallbackAgent` for escalation.  
2. **Orchestrate with LangChain** wrapped in an AWS Lambda that receives the chat event, runs the agent chain, and streams responses via API Gateway WebSocket to the front‑end.  
3. **Persist state** in DynamoDB (partition key = session ID) so each user’s context is maintained across messages.  
4. **Monitoring & Scaling**: Use CloudWatch metrics on Lambda invocations and latency; auto‑scale with a target tracking policy (5 ms average).  

**Result**  
Within 8 weeks we saw a **32 % drop in ticket volume** and a **$210k reduction in ops cost**. The solution handled >12 k concurrent users with <10 ms average latency, staying within the $0.0000167 per token pricing tier.

**Reflection (Bar‑raiser notes)**  
I took full ownership of end‑to‑end delivery, dove deep into OpenAI’s policy engine to avoid hallucinations, quantified impact against business KPIs, and learned that early integration of observability prevents silent drift in LLM outputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
