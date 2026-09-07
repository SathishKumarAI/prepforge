---
qid: ing_c255b0df31__faang__local
question: 'Explain: Where it runs . Who controls it. What certifies it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 484
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:12:51-05:00'
sources: []
---

**Clarify**  
The question asks for a concise overview of (1) where AI systems run, (2) who has operational control over them, and (3) what formal guarantees or certifications are applied to assure safety and compliance.

**Approach**  
* Map the typical deployment stack (edge ↔ cloud).  
* Identify key stakeholders: developers, ops teams, platform owners.  
* Enumerate certification frameworks (ISO IEC 27001, SOC 2, GDPR, NIST AI RMF).

**Depth**  

| Layer | Where it runs | Who controls it | Certification/Guarantee |
|-------|---------------|-----------------|-------------------------|
| **Edge** | IoT devices, mobile phones, autonomous vehicles | Device OEMs & app developers; OTA update managers | ISO IEC 27001 (device security), automotive‑specific ISO 26262 |
| **Fog / Edge‑Cloud** | Local gateways or regional data centers | Ops/DevOps teams, cloud provider’s edge services | NIST AI Risk Management Framework (RMF) for privacy & bias |
| **Central Cloud** | Public/Private clouds (AWS, GCP, Azure) | Platform operators + customer DevSecOps | SOC 2 Type II, ISO 27001, GDPR data‑processing addendums |

*Control mechanisms* include role‑based access control (RBAC), continuous integration pipelines, and automated rollback.  
*Certifications* provide third‑party assurance that security, privacy, and reliability standards are met; they also serve as a compliance checklist for regulated industries.

**Edge Cases**  
- Unmanaged legacy devices lacking OTA—no certification path.  
- Multi‑tenant SaaS where the provider owns runtime but customers own data—shared responsibility model must be clarified.  
- Rapidly evolving models (e.g., GPT‑style) may outpace existing certs; need ongoing audit.

**Optimize & Communicate**  
Explain that a layered approach lets teams choose cost‑vs‑risk tradeoffs: lightweight edge for latency, heavier cloud for compute. Highlight that certifications are not static; they require continuous monitoring and re‑certification cycles. Conclude by stressing the importance of aligning technical architecture with governance frameworks to satisfy both internal stakeholders and external regulators.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
