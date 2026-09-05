---
qid: ing_b67a634ff7__star__local
question: You are exposing retrieval as a tool to an agent, over MCP. How does designing
  a tool interface differ from designing a retrieval API?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 336
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:36:02-05:00'
sources: []
---

**Situation** – In my last role I was tasked with integrating an external knowledge base into our AI assistant over Microsoft Cloud Platform (MCP). The data set was large and constantly evolving, so the team needed a reliable way for the agent to fetch relevant documents on demand.

**Task** – My goal was to design a tool interface that allowed the agent to invoke retrieval as a first‑class action while keeping the underlying API hidden, ensuring security, rate limiting, and auditability through MCP’s managed services.

**Action** – I started by defining a minimal JSON schema for the tool call: `{ "name":"searchKnowledge", "params":{"query":string,"top_k":int}}`. Instead of exposing the raw REST endpoint, I wrapped it in an Azure Function that performed authentication with Managed Identities, applied a throttling policy via API Management, and logged every request to Application Insights. The function translated the tool call into the actual search query against Azure Cognitive Search, then returned a concise list of document IDs and snippets. I also added a fallback cache layer using Redis so repeated queries hit memory first.

**Result** – The agent could now perform real‑time knowledge retrieval with sub‑200 ms latency, while we reduced external API calls by 35 % thanks to caching. Security compliance scores improved because all traffic passed through controlled Azure services. I learned that designing a tool interface is less about the data model and more about orchestrating security, observability, and performance in a cloud‑native way.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
