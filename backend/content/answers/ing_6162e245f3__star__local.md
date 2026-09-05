---
qid: ing_6162e245f3__star__local
question: 'Explain: Using Graphiti with Azure OpenAI — GitHub - getzep/graphiti: Build
  Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 321
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:42:48-05:00'
sources: []
---

**Situation** – In a recent project, my team was building an AI‑powered customer support chatbot that needed to pull up-to-date product specs and warranty details from our legacy ERP system. The data was highly relational, so we decided to expose it as a real‑time knowledge graph.

**Task** – I had to integrate Graphiti with Azure OpenAI so the LLM could query the graph directly and generate context‑aware responses without pulling raw tables into memory each time.

**Action** – First, I set up a Neo4j instance on Azure Managed Instance and used Graphiti’s Python SDK to stream live changes from the ERP via Kafka. Then I created an Azure OpenAI deployment (gpt‑4o) and wrote a custom prompt template that included a Cypher query wrapper. In our function‑calling schema, we exposed a `getProductInfo(productId)` operation; when called, Graphiti executed the Cypher, returned structured JSON, and the LLM stitched it into its reply. I added rate‑limiting and caching with Redis to keep latency below 200 ms.

**Result** – The chatbot’s accuracy jumped from 68% to 92% on knowledge‑based queries, and average response time fell from 1.5 s to 0.3 s. I learned how tightly coupling a graph database with Azure OpenAI can dramatically reduce data drift issues and improve LLM grounding in dynamic enterprise environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
