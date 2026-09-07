---
qid: ing_425cebb60b__aws__local
question: 'Explain: Clarifying questions & assumptions — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 426
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:56:10-05:00'
sources: []
---

**Situation / Task**  
I was asked to build an AI‑powered Customer Support Agent that could ask clarifying questions and surface hidden assumptions before routing tickets. The goal was to cut first‑response time (FRT) by 30 % while keeping accuracy above 90 %.  

**Action**  
*Customer Obsession & Ownership* – I started by interviewing 200+ support agents, mapping the most common ambiguous queries and the assumptions they had to make.  
I designed a **stateful dialogue manager** using Amazon Lex (NLU) + AWS Lambda for business logic. Each intent triggers a *clarification flow* that references a DynamoDB table of “assumption templates” learned from past tickets. The agent learns new templates via an automated feedback loop: every resolved ticket is fed back into the model, retraining it on SageMaker nightly, ensuring continuous improvement (*Dive Deep*).  

Scalability was handled by deploying Lex in a **regional endpoint** with auto‑scaling and using Step Functions to orchestrate multi‑turn conversations. Availability >99.9 % was achieved through DynamoDB Global Tables across two AZs. Cost control came from provisioning only 2 Lambda concurrency units per region, saving ~15 % versus a monolithic approach.  

**Result**  
Within three months the agent reduced FRT from 12 min to **8.4 min (30 %)** and increased ticket accuracy from 88 % to **92 %**, surpassing our target. Agents reported a 25 % drop in follow‑up emails, freeing them to focus on high‑impact issues.  

**Learning** – The key was treating the agent as a *collaborative partner*, not a replacement; continuous data ingestion and iterative testing turned a complex assumption problem into a measurable performance win.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
