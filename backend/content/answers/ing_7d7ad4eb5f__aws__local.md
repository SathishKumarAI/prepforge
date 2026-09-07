---
qid: ing_7d7ad4eb5f__aws__local
question: 'Q: When would you choose Pydantic AI over LangGraph for a Python service?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 396
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:09:02-05:00'
sources: []
---

**When I built a micro‑service that exposed an LLM‑powered recommendation API, I had to decide between Pydantic AI and LangGraph.**

**Situation / Task** – The service needed to ingest unstructured user logs, validate them against evolving schemas, and route prompts through a stateful conversation graph. Latency had to stay below 150 ms for 99.9 % of requests, while the model was billed per token.

**Action** –  
1. **Customer Obsession & Ownership**: I scoped a pilot that validated user data with Pydantic’s runtime validation (auto‑generated docs, strict typing) and leveraged LangGraph only for the conversational flow.  
2. **Dive Deep**: I instrumented both libraries, measured 10 k requests per second on an EC2 t3.medium, and logged token counts. Pydantic added ~1 ms overhead but prevented malformed payloads that would have caused costly retries in LangGraph.  
3. **Bias for Action & Deliver Results**: I deployed the hybrid stack to ECS Fargate (spot) with SQS buffering; achieved 99.8 % success, <140 ms median latency, and cut token usage by 18 % compared to a monolithic LangGraph model.

**Result** – The split architecture reduced costs by $3k/month and improved reliability. I documented the trade‑offs in a post‑mortem: Pydantic’s static typing saved debugging time, while LangGraph handled complex multi‑turn logic efficiently.

---

*Bar‑raiser notes*: clear ownership of design choice, deep dive into performance metrics, quantified business impact, and learning that a hybrid approach can outperform a single monolithic solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
