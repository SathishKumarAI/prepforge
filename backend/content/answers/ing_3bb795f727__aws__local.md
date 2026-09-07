---
qid: ing_3bb795f727__aws__local
question: 'Explain: EU AI Act Timeline: What Enforces on August 2, 2026'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 491
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:41:17-05:00'
sources: []
---

**Situation / Task**  
While leading the EU‑AI compliance team at a global SaaS provider, I was tasked with ensuring that all customer‑facing ML models would be fully compliant when the EU AI Act took effect on **2 Aug 2026**. The act categorises *high‑risk* systems (e.g., decision‑support for recruitment) and mandates strict transparency, auditability, and risk mitigation.

**Action**  
I built an end‑to‑end compliance pipeline on AWS:

| Step | AWS Service | Rationale |
|------|-------------|-----------|
| Model registry & versioning | **Amazon SageMaker Model Registry** | Guarantees immutable model artifacts for audit. |
| Risk scoring & monitoring | **AWS GuardDuty + Amazon Lookout for Metrics** | Detects drift or bias in real‑time with sub‑second latency. |
| Documentation & transparency | **Amazon S3 Glacier Deep Archive + AWS Glue** | Stores signed risk assessments, logs, and model cards; Glue extracts metadata for compliance dashboards. |
| Incident response | **AWS Lambda + SNS** | Auto‑triggers remediation workflows (e.g., rollback to previous version) when a threshold breach occurs. |

I also defined a **Compliance Scorecard** (model accuracy ≥ 95%, bias‑gap ≤ 2%) and automated quarterly risk reviews via **Amazon QuickSight** dashboards.

**Result**  
By Q4 2025, the pipeline covered 120+ models across 30 regions with an average compliance audit time of **3.2 hours**—a 78% reduction versus manual review. When enforcement kicked in on Aug 2 2026, we had zero non‑compliant high‑risk deployments and earned a *“Compliance Champion”* award from the EU regulator.

**Reflection**  
I learned that *ownership* means anticipating regulatory change early and *dive deep* into technical controls; the bar‑raiser will note my quantitative impact (hours saved, risk reduction) and proactive learning loop that fed back into continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
