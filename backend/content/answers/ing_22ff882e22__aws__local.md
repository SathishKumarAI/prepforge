---
qid: ing_22ff882e22__aws__local
question: 'Explain: Multi-Hop Reasoning Loops — Agentic Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 499
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:45:42-05:00'
sources: []
---

**Scenario (S)**  
In my last role I led a team that built an AI‑powered customer support agent for a fintech platform. The bot had to answer complex queries that required pulling facts from multiple documents and then reasoning across them—essentially a *multi‑hop reasoning loop* or Agentic Retrieval Augmented Generation (RAG).  

**Task (T)**  
Deliver a system that can retrieve, chain, and synthesize information from a growing knowledge base while keeping latency under 800 ms for 95% of requests.  

**Action (A)**  
1. **Requirements & Design** – I scoped the problem as a *retrieval‑first* pipeline:  
   - Use **Amazon Kendra** to index PDFs, policy docs, and API logs (high‑quality semantic search).  
   - Build a *reasoning orchestrator* in **AWS Step Functions** that calls **Amazon Bedrock** (Claude 3.5) for each hop. Each step receives the previous answer as context, limiting token usage to control cost.  
   - Cache intermediate results with **ElastiCache‑Redis** to avoid redundant calls.  
2. **Scalability & Availability** – Step Functions provide fault tolerance; Bedrock endpoints are region‑redundant. Kendra scales automatically with index size.  
3. **Cost Control** – By bounding token usage per hop and caching, we limited Bedrock spend to $0.02 per query vs an estimated $0.10 if a single large prompt were used.  

**Result (R)**  
After deployment, the bot answered 78% of complex queries without human hand‑off, cutting average resolution time from 12 min to **2.3 min**—a 80% reduction—and saving ~$45k/month in support ops.  

> *Leadership Principles:* **Customer Obsession** (delivered faster answers), **Ownership** (architected end‑to‑end flow), and **Dive Deep** (tuned token budgets, monitored latency).  
> *Bar‑raiser cues:* I quantified impact, iterated on the multi‑hop design after a 30% failure rate in early tests, and documented lessons that now guide our AI ops playbook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
