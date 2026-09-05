---
qid: ing_2bb5a591eb__star__local
question: 'Explain: Pattern 2 – Orchestrator agent (sub-agents as tools)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 393
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:55:11-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with building a real‑time customer support chatbot for an e‑commerce platform that had to handle product inquiries, order status checks, and return processing—all while staying under a 2 second response window during peak traffic.

**Task:**  
I needed to design a system where the main “orchestrator” agent could delegate specialized tasks (searching inventory, accessing order history, invoking a fraud‑check API) to lightweight sub‑agents, yet still provide a seamless conversational flow and maintain overall latency targets.

**Action:**  
I implemented the orchestrator using LangChain’s `MultiAgentExecutor`. Each sub‑agent was wrapped in a Python function that called a specific microservice:  
1. **ProductInfoAgent** queried Elasticsearch for SKU details.  
2. **OrderStatusAgent** fetched data from our PostgreSQL order table via an async SQLAlchemy client.  
3. **ReturnProcessingAgent** triggered a Lambda that performed eligibility checks and created return labels.  

The orchestrator parsed user intent with OpenAI’s GPT‑4, then dispatched calls in parallel where possible, aggregating results and re‑prompting the LLM for any missing context. I added circuit‑breaker logic to fall back to cached responses if a sub‑agent timed out.

**Result:**  
The chatbot achieved an average response time of 1.7 seconds during load testing (10k concurrent users), reduced ticket volume by 38%, and cut SLA violations from 12% to under 2%. I learned that treating each microservice as a “tool” for the orchestrator keeps the system modular, testable, and scalable—critical when adding new capabilities like sentiment analysis or dynamic pricing in future iterations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
