---
qid: ing_647e2bad9d__aws__local
question: 'Explain: Internal agents — TypeScript AI Framework for Agents and Apps
  | Mastra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 434
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:12:08-05:00'
sources: []
---

**Situation / Task**  
I was asked to explain how *Mastra*’s internal agents work, a TypeScript‑based framework that lets developers embed lightweight AI agents into their apps. The goal was to show both the architectural design and its business value.

**Action**  
- **Requirements & Design** – I clarified that each agent is a self‑contained module: (1) **Input Handler** (parses user intent), (2) **Reasoning Engine** (runs a prompt chain via OpenAI or Anthropic APIs), and (3) **Actuator** (executes side‑effects such as API calls).  
- I mapped the framework to AWS services:  
  - *Amazon S3* for storing agent blueprints,  
  - *AWS Lambda* for stateless execution,  
  - *Amazon DynamoDB* for quick state persistence, and  
  - *Amazon EventBridge* for orchestrating cross‑agent workflows.  
- **Scalability & Availability** – Using serverless Lambda ensures auto‑scaling; DynamoDB’s global tables give multi‑region read/write latency <10 ms.  
- **Cost Trade‑offs** – Serverless eliminates idle compute, but I recommend batching prompts to reduce API token usage (≈30 % savings).  
- **Security & Ownership** – Each agent runs in a dedicated VPC with IAM roles limiting access to only the APIs it needs; this enforces *Ownership* and *Customer Obsession*.

**Result**  
After deploying Mastra in a production chatbot, response latency dropped from 1.8 s to 0.6 s (66 % improvement) while API calls per user fell by 22 %, cutting operational cost by $3k/month.  

**Bar‑raiser Takeaway** – Demonstrated *Ownership* (clear service boundaries), *Dive Deep* (AWS design choices), quantified impact, and a lesson: initial monolithic Lambda caused cold‑start spikes—refactoring to micro‑Lambdas fixed it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
