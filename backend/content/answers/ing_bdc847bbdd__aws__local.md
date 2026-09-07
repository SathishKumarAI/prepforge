---
qid: ing_bdc847bbdd__aws__local
question: 'Explain: Living Specs and Article 14 Oversight — The 2026 EU AI Act and
  AI-Generated Code: What Changes for Dev Teams | Augment Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 519
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:32:28-05:00'
sources: []
---

**Situation** – While leading a cross‑functional team at a fintech startup, we were preparing to ship an automated loan‑approval engine that used GPT‑style models. In early 2026 the EU released the AI Act (specifically Living Specs & Article 14) and announced tighter controls on AI‑generated code. We had to decide whether to keep our current stack or redesign it for compliance.

**Task** – Deliver a compliant, high‑throughput system that still met our SLA of <200 ms per request, while keeping costs under $5k/month and ensuring data residency in the EU.

**Action**  
1. **Ownership & Customer Obsession** – I convened stakeholders (legal, compliance, ops) to map risk points: model bias, code provenance, auditability.  
2. **Dive Deep** – We performed a threat‑modeling exercise against Article 14’s “source of truth” requirement.  
3. **Design** – Adopted an *AWS SaaS Pattern*:
   - **Amazon SageMaker Pipelines** for training, with *Model Bias Checking* enabled.
   - **CodeArtifact + GitHub Actions** to capture every code commit; the pipeline automatically tags artifacts with a SHA‑256 hash and stores them in a GDPR‑compliant S3 bucket (EU‑West‑1).
   - **Amazon Athena** queries on audit logs for compliance reporting, feeding back into a *CloudWatch* dashboard.
4. **Bias for Action** – Implemented an “auto‑rollback” trigger if a new model version exceeded the bias threshold set in our policy.  
5. **Cost & Scalability** – Leveraged **SageMaker Neo** to compile models for edge inference on EC2 g4dn.xlarge instances, cutting GPU hours by 35% and reducing latency to 150 ms.

**Result** – Within 12 weeks we achieved:
- **100 % compliance** with Living Specs & Article 14 (verified by an external audit).  
- **Latency improvement** from 250 ms to 150 ms, keeping SLA.  
- **Cost savings** of 28 % ($3.6k/month vs $5k baseline).  

**Bar‑raiser takeaway** – Demonstrated ownership by turning a regulatory challenge into an architectural win, dove deep into legal specs, quantified impact on latency and cost, and learned to embed compliance in CI/CD rather than as an afterthought.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
