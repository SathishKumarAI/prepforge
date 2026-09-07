---
qid: ing_ebfc043bcc__aws__local
question: 'Explain: Layered Defense Architecture — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 444
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:12:14-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a cross‑functional team tasked with securing an enterprise LLM platform that handled customer data and internal business logic. The goal was to reduce the attack surface by implementing a *Layered Defense Architecture* while keeping latency < 30 ms for 95 % of requests.

**Action & Design**  
1. **Network Isolation (Ownership)** – Deployed VPC endpoints with PrivateLink, isolating inference pods from public traffic and enabling fine‑grained security groups.  
2. **Runtime Guardrails (Customer Obsession + Dive Deep)** – Integrated *Amazon SageMaker Runtime API* with a custom Lambda wrapper that injects a policy engine (Open Policy Agent). Every prompt is evaluated against GDPR & company policies before reaching the model.  
3. **Model‑Level Safeguards (Bias for Action)** – Wrapped the LLM in a *Guardrails Service* built on ECS Fargate, applying token‑level filters and a refusal model trained on adversarial prompts.  
4. **Observability & Alerting (Deliver Results)** – Instrumented with CloudWatch Logs + X-Ray to capture prompt metadata; set up dashboards that trigger SNS alerts for anomalous request patterns.

**Result**  
- Reduced potential data exfiltration vectors by **92 %** compared to a monolithic deployment.  
- Maintained latency within target 30 ms, with 97 % of requests under 25 ms.  
- Cut operational cost by **$18K/month** by shifting from on‑prem GPUs to Spot‑ECS Fargate and leveraging SageMaker’s pay‑as‑you‑go pricing.

**Learnings (Bar‑Raiser Lens)**  
I took full ownership, dove deep into policy semantics, quantified the impact with real metrics, and iterated after a pilot failure that exposed an edge‑case in token filtering. This cycle validated the layered approach and set a new internal security benchmark for LLM services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
