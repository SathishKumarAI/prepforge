---
qid: ing_e03431bf6e__aws__local
question: 'Explain: Register as custom evaluator — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 464
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:46:35-05:00'
sources: []
---

**Situation / Task**  
At my previous role we built a continuous‑delivery pipeline for LLM‑powered chatbots. The QA team needed a way to automatically evaluate new model versions against business KPIs (e.g., user satisfaction, latency). I proposed turning our internal “Langwatch” monitoring tool into a **custom evaluator** that could be plugged into the *Ai Evals* framework and fed real‑time metrics from *Langfuse*.

**Action**  
1. **Requirements & Design** – Defined an evaluator contract: receive prompt–response pairs, call Langfuse’s API to fetch contextual logs, compute a weighted score (accuracy = 0.7, latency = 0.3).  
2. **Implementation** – Built the evaluator in Python, wrapped it as an AWS Lambda for serverless scaling, and exposed it via API Gateway.  
3. **Integration** – Registered the evaluator with Ai Evals using its SDK; added a `register_custom_evaluator("langwatch")` call in our CI pipeline.  
4. **Testing & Roll‑out** – Ran A/B tests on 10,000 prompts per day, logged results to DynamoDB, and visualized dashboards in CloudWatch.

**Result**  
- Cut evaluation time from 3 hrs to 15 min per model release (90% faster).  
- Enabled data‑driven rollback: after a new model rollout, we detected a 12% drop in accuracy within 2 hrs and halted deployment—saving ~$50k in downstream support.  
- Reduced infrastructure cost by 25% using Lambda’s pay‑per‑use.

**Reflection**  
I owned the end‑to‑end solution, dove deep into Langwatch/​Langfuse APIs, and iterated quickly based on feedback—aligning with **Ownership**, **Dive Deep**, and **Bias for Action**. The evaluator now serves as a reusable component across teams, illustrating how small architectural decisions can scale impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
