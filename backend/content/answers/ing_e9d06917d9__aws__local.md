---
qid: ing_e9d06917d9__aws__local
question: 'Explain: Building block: The augmented LLM — Building Effective AI Agents
  \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 522
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:06:52-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked to prototype a next‑generation customer‑support bot that could “augment” a large language model (LLM) with real‑time domain knowledge and policy enforcement—essentially the *augmented LLM* described by Anthropic. The goal: reduce first‑contact resolution time for support tickets by 30 % while keeping token usage under budget.

**Action**  
I architected a serverless pipeline on AWS:

| Component | Service | Rationale |
|-----------|---------|-----------|
| **LLM inference** | Amazon Bedrock (Anthropic Claude) | Managed, low‑latency, auto‑scaling. |
| **Knowledge store** | DynamoDB + ElasticSearch | Fast retrieval of policy docs; elasticsearch for semantic search. |
| **Policy engine** | Lambda + Step Functions | Enforces business rules before/after LLM response. |
| **Monitoring** | CloudWatch & Athena | Track token counts, latency, SLA compliance. |

The design used *prompt engineering* to embed policy snippets into the prompt, then a post‑process Lambda rewrote outputs that violated constraints. I added an “inference cache” in ElastiCache Redis to reuse identical prompts, cutting Bedrock calls by 18 %.

**Result**  
In production over 3 months we saw:

- **30 % drop** in average ticket handling time (from 12 min to 8.4 min).  
- **Token cost** fell 22 % thanks to caching and smarter prompts.  
- **99.9 % uptime** achieved via multi‑AZ Lambda deployments.

**Reflection & Learning**  
The first iteration over‑ran token limits because I underestimated prompt size; we looped back, refined the prompt template, and added a “token budget check” Lambda—demonstrating *Bias for Action* and *Dive Deep*.  

**Leadership Principles Anchored**  
- **Customer Obsession**: Delivered measurable speed gains for users.  
- **Ownership & Dive Deep**: Took full responsibility for end‑to‑end pipeline, iterated on failures.

As a bar‑raiser I would listen for evidence of ownership, quantitative impact, and how the candidate learned from early missteps—exactly what this story shows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
