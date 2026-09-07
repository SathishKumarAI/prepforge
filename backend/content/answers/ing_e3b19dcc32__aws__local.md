---
qid: ing_e3b19dcc32__aws__local
question: 'Explain: Functions, Tools and Agents with LangChain - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 426
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:53:48-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a proof‑of‑concept for an AI assistant that could pull domain knowledge from our internal docs and answer user queries in real time. The goal was to reduce support tickets by 30 % while keeping latency under 200 ms.

**Action – Design & Architecture**  
I built the system with **LangChain** as the orchestration layer, leveraging its *Functions* (to call external APIs), *Tools* (e.g., `SQLDatabaseToolkit` for querying our data lake) and *Agents* (the ReAct agent that decides which tool to invoke).  
- **AWS services:**  
  - *Amazon Bedrock* – hosted the LLM, giving us low‑latency inference.  
  - *Amazon RDS Aurora Serverless v2* – powered the SQL Toolkit; auto‑scales with traffic.  
  - *Amazon API Gateway + Lambda* – exposed a REST endpoint; Lambda’s concurrency limits kept costs predictable.  
  - *AWS Step Functions* – orchestrated the agent workflow, enabling retries and visibility.

I wrote custom **LangChain tools** to wrap our internal knowledge graph (via Neptune) and added a safety filter that scored responses on bias before returning them.

**Result**  
Within two weeks of deployment we saw a **32 % drop in support tickets**, saving ~$12k/month. The average end‑to‑end latency stayed at 180 ms, meeting SLA. Cost per query was $0.0004, below the target $0.001.

**Reflection (Bar‑raiser lens)**  
I owned every layer—from data ingestion to API design—ensuring deep understanding of trade‑offs between cost and availability. The iterative testing revealed a latency spike during peak hours; I responded by adding an Aurora read replica and adjusting Lambda provisioned concurrency, learning that even small architectural tweaks can yield large operational gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
