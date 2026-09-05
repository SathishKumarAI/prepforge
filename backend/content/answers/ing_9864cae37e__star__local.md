---
qid: ing_9864cae37e__star__local
question: 'Explain: When (and when not) to use agents — Building Effective AI Agents
  \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 329
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:37:30-05:00'
sources: []
---

**Situation:** In my last role I was tasked with automating the customer support workflow for a SaaS platform that handled over 10,000 tickets daily. The existing rule‑based bot could only handle a handful of FAQs and often escalated complex queries to humans, inflating response time by 30%.

**Task:** My goal was to design an AI system that could triage tickets, suggest answers, and learn from interactions—ideally reducing human handoffs by at least 40% while keeping SLA compliance above 95%.

**Action:** I chose Anthropic’s agent framework because it offers a clear separation between the *policy* (decision logic) and the *model* (LLM). I built an agent that first parsed ticket metadata, then invoked a smaller retrieval‑augmented model to fetch relevant knowledge base snippets. The policy layer decided whether to generate a response or request human intervention based on confidence thresholds. I used LangChain for orchestration, OpenAI’s GPT‑4o for generation, and Pinecone for vector search. We incorporated real‑time feedback loops: every agent action was logged, and the policy was retrained monthly with human‑reviewed outcomes.

**Result:** After three months, human handoffs dropped 48%, response time improved by 25%, and SLA compliance hit 97%. The project taught me that agents shine when you need dynamic decision logic coupled with reusable LLMs; for static rule sets or low‑variance tasks, a simple script is more efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
