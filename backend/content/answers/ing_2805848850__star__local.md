---
qid: ing_2805848850__star__local
question: 'Explain: Code — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 319
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:48:23-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our customer‑support chat had a 45 % SLA breach rate because agents spent too much time triaging tickets and hunting for policy references in a sprawling knowledge base.

**Task** – I was tasked with designing an agentic AI assistant that could autonomously fetch the right policy documents, draft concise responses, and hand off only complex cases to humans—cutting response times by 30 % while keeping accuracy above 90 %.

**Action** – I built a hybrid system: a BERT‑based intent classifier paired with a retrieval‑augmented generation (RAG) pipeline. The agent used LangChain to query our internal policy vector store, then OpenAI’s GPT‑4 for drafting replies. We wrapped the logic in an async FastAPI microservice, added a reinforcement‑learning loop that logged human overrides and fed them back as training data. I also set up monitoring dashboards with Grafana to track latency, F1 score, and SLA compliance.

**Result** – Within two weeks of rollout, SLA breaches dropped from 45 % to 18 %, average first‑response time fell from 12 min to 3 min, and the system handled 70 % of tickets without human intervention. I learned that marrying retrieval with generative models yields both speed and reliability, and that continuous human feedback is essential for maintaining trust in agentic AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
