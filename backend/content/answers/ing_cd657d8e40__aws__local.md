---
qid: ing_cd657d8e40__aws__local
question: 'Explain: Agency Levels — Agent Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 422
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:05:32-05:00'
sources: []
---

**Situation / Task**  
I was hired to design a next‑generation autonomous‑agent platform for an e‑commerce recommendation engine. The core requirement was to expose *Agency Levels*—the hierarchical decision layers (Policy, Plan, Execute)—so that each agent could reason independently while staying compliant with business rules.

**Action**  
1. **Architectural dive** – I modeled the system as a *micro‑service mesh* on AWS ECS Fargate, using Amazon EventBridge to publish *intent events*.  
2. **Agency Levels**  
   - **Policy Layer**: Stateless Lambda functions (Python) enforce constraints (budget caps, legal compliance).  
   - **Plan Layer**: A SageMaker batch job generates a sequence of actions; we store the plan in DynamoDB with TTL for auditability.  
   - **Execute Layer**: Step Functions orchestrate calls to downstream services (pricing API, inventory micro‑service) and roll back on failure.  
3. **Scalability & Cost** – By decoupling layers, each scales independently; Lambda’s 100 ms cold start was mitigated with provisioned concurrency (cost $0.20/h).  
4. **Result** – The platform handled 10× the request volume with <2 s latency, reducing recommendation‑related cart abandonment by **12%** and saving ~$250k annually in compute spend.

**Result / Reflection**  
I took full *Ownership* of the end‑to‑end flow, *dove deep* into each layer’s performance metrics, and iterated on failure modes (e.g., partial plan execution). The bar‑raiser will note my quantified impact, the depth of technical reasoning, and the learning loop that turned a costly monolith into a resilient, cost‑effective service mesh.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
