---
qid: ing_38421ea623__star__local
question: 'Explain: Building Systems with the ChatGPT API - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 342
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:21:01-05:00'
sources: []
---

**Situation:** In early 2025 I was leading a startup’s customer support automation project where our help‑desk ticket volume had spiked by 120% during the holiday season, and response times were lagging behind SLA targets.

**Task:** My goal was to build an AI‑powered triage system that could automatically categorize tickets, suggest first‑line solutions, and only hand off complex cases to human agents—reducing average resolution time by at least 30%.

**Action:** I chose the ChatGPT API (v4) as the backbone. First, I fine‑tuned a small domain‑specific prompt template on our historical ticket data, embedding key product terms and common troubleshooting steps. Using LangChain, I constructed a modular pipeline: an ingestion layer that streamed new tickets into OpenAI’s endpoint, a context‑builder that fetched relevant knowledge base articles via Elasticsearch, and a response formatter that wrapped the model’s output in JSON for downstream processing. To keep costs low, I set up token‑budget controls and used prompt engineering to encourage concise replies. I also implemented an A/B test harness with Flask to compare AI responses against human agents.

**Result:** Within two weeks of deployment, ticket triage accuracy rose from 68% to 92%, cutting average response time from 4.2 hours to 1.5 hours—a 64% improvement and a $15K/month savings on support staff. I learned that careful prompt design combined with real‑time context retrieval is the key to reliable, cost‑effective AI integration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
