---
qid: ing_66b2149841__aws__local
question: 'Explain: Supported LLMs — GitHub - NVIDIA-NeMo/Guardrails: NeMo Guardrails
  is an open-source toolkit for easily adding programmable guardrails to LLM-based
  conversational systems. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 398
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:17:17-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: Our customer‑facing chatbot was drifting off‑topic and occasionally generating unsafe content.  
*Task*: Build a safety layer that guarantees every LLM response stays within business rules without sacrificing latency or cost.

*Action*: I spearheaded the migration to **NVIDIA‑NeMo Guardrails**—an open‑source toolkit that lets us define *guardrail policies* in plain language and enforce them at inference time.  
- **Policy design**: We wrote a set of 12 guardrails (e.g., “no political persuasion,” “respect user privacy”) using the Guardrails DSL.  
- **Integration**: Deployed the guardrail engine on an **AWS SageMaker endpoint** behind a **Lambda@Edge** proxy, so policy checks happen in <5 ms before the LLM returns a reply.  
- **Scalability**: The guardrail component runs statelessly; we autoscale based on request volume (1–10k QPS) using **EKS** with horizontal pod autoscaling.  
- **Cost control**: By caching policy evaluations per session in **ElastiCache Redis**, we reduced redundant checks by 35%, cutting $0.02 per thousand responses.

*Result*: Post‑deployment, the bot’s compliance score jumped from 68 % to **97 %** (validated via automated policy audit), while latency remained under 200 ms for 99 % of requests—meeting SLA and reducing infra spend by **$15k/month**.  

**Bar‑raiser cues**: I demonstrated ownership (end‑to‑end design), deep dive into guardrail DSL, quantified impact, and learned from a prior failure where we used a monolithic rule engine that stalled at 300 ms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
