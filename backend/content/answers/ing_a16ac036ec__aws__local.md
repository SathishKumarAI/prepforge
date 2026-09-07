---
qid: ing_a16ac036ec__aws__local
question: 'Explain: Context retrieval and agentic search — Effective context engineering
  for AI agents \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 460
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:30:17-05:00'
sources: []
---

**Context Retrieval & Agentic Search – Key to Smart Agents**

**Situation (S)**  
I led a cross‑functional team at a fintech startup that built an AI‑powered customer support bot. The bot’s response quality dropped because it couldn’t fetch the right context from our knowledge base, and users complained of irrelevant answers.

**Task (T)**  
Design an architecture that lets the agent *retrieve* precise documents and *search* for new information on its own while staying within latency and cost limits.

**Action (A)**  
1. **Context Retrieval** – Implemented a vector‑based similarity engine using Amazon Kendra + OpenSearch. Indexed 3 M FAQ entries and user logs, reducing average retrieval time from 2 s to 0.4 s.  
2. **Agentic Search** – Added an LLM‑driven “search planner” (Amazon Bedrock Anthropic model) that generates search queries, executes them via AWS Lambda, and feeds results back into the conversation flow.  
3. Deployed everything on a serverless stack: API Gateway → Lambda (Node 14) → Kendra/OpenSearch → Bedrock. Auto‑scales with traffic; cold starts < 200 ms.  

**Result (R)**  
- Accuracy of responses increased from **68% to 92%** (measured by post‑chat NPS).  
- Average handling time fell by **35 s**, boosting agent throughput by **1,200 tickets/day**.  
- Operational cost stayed below $0.05 per query due to efficient caching and Lambda concurrency controls.

**Leadership Principles Anchored**  
- *Customer Obsession* – Delivered a faster, more relevant experience for users.  
- *Dive Deep & Ownership* – Built the end‑to‑end pipeline, continuously iterated on metrics, and owned post‑deployment monitoring.

**Bar‑raiser Takeaway**  
Showed ownership by reducing latency, quantified impact through NPS and throughput gains, demonstrated deep technical knowledge of AWS services, and learned from initial retrieval failures to refine vector indexing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
