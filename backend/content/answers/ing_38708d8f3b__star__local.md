---
qid: ing_38708d8f3b__star__local
question: 'Explain: 🤖 Agents, Tool Use & MCP — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 434
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:21:23-05:00'
sources: []
---

**Situation** – At my previous company we were launching a customer‑support chatbot that had to answer technical questions about our cloud platform while staying within compliance limits on data usage.

**Task** – I needed to build an autonomous agent that could decide when to generate a response directly, when to call the internal knowledge‑base API, and when to trigger a secure external lookup (via a private search engine) without exposing any user credentials.

**Action** – I implemented the agent as a lightweight Python orchestrator. It received the user query, parsed intent with spaCy, then fed it into a policy network trained on past support logs. The policy used a Multi‑Criteria Planning (MCP) framework: each potential tool (GPT‑3, internal API, external search) was scored by cost, latency, and privacy risk. The agent chose the highest‑scoring tool, invoked it via an async HTTP client, and streamed the result back to the user. I added a fallback rule that re‑ran the policy if the chosen tool returned an error.

**Result** – Deployment cut average resolution time from 8 minutes to 3 minutes (a 62% drop) while keeping data‑exposure risk below our compliance threshold. The MCP approach also reduced API calls by 35%, saving us $1,200/month on compute costs. I learned how a simple decision framework can make an AI agent both efficient and compliant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
