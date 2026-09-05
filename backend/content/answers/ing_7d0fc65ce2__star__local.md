---
qid: ing_7d0fc65ce2__star__local
question: 'Explain: Introduction — Tools vs. Subagents: Building Effective AI Agents
  Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 321
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:44:03-05:00'
sources: []
---

**Situation**  
At my previous company we launched a customer‑support chatbot that had to pull data from three legacy databases and generate natural‑language responses. The initial prototype used a monolithic “smart” agent: one LLM wrapped around every API call, which blew up latency and cost.

**Task**  
I needed to redesign the system so it could answer queries in under 1 s while keeping cloud spend below $200/month and still support future extensions.

**Action**  
I split the logic into lightweight “tools” (SQL query executor, sentiment analyzer) and a minimal sub‑agent that orchestrated them. The sub‑agent was just a rule‑based workflow engine with a tiny prompt that described which tool to invoke next. For example, when the user asked for order status, the agent first called the SQL tool, then passed the result to a summarization tool before generating the final reply. I used OpenAI’s function calling API and integrated it into a FastAPI service, adding caching of query results with Redis.

**Result**  
Response time dropped from 3 s to 0.8 s, cost fell to $75/month, and accuracy improved by 12% as measured by post‑deployment A/B testing. I learned that keeping the LLM’s role narrow—just a dispatcher—lets you reuse existing services without over‑engineering a single monolith.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
