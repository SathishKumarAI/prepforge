---
qid: ing_9a5881f707__aws__local
question: 'Explain: Option 2: Self-Host Opik for Full Control'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 444
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:14:31-05:00'
sources: []
---

**Situation / Task**  
At my last role we had to deploy a real‑time recommendation engine for a global e‑commerce platform. The vendor’s managed AI stack promised “full control” only if customers self‑hosted Opik on their own infra, but that raised concerns about latency, cost and compliance.

**Action**  
I led a cross‑functional squad to evaluate three options: (1) Vendor‑managed cloud; (2) Self‑host Opik on EC2/SSM; (3) Hybrid. We built a proof‑of‑concept using **Amazon ECS + Fargate**, **AWS Secrets Manager**, and **KMS** for encryption, while keeping the model weights in an **S3 bucket** with lifecycle policies. I wrote Terraform scripts to spin up the cluster with auto‑scaling based on CloudWatch metrics (CPU >70% → add 2 tasks). For data ingress we used **API Gateway + Lambda** to batch requests into a **Kinesis Data Stream**, feeding the inference service.

**Result**  
- Latency dropped from 250 ms (vendor) to 95 ms (self‑hosted), meeting our SLA.  
- Operational cost fell by 32% YoY because we eliminated vendor licensing fees and only paid for actual compute time.  
- We gained full audit trails in CloudTrail, satisfying GDPR requirements.

**Reflection & Learning**  
I owned the risk assessment, documenting trade‑offs (higher operational overhead vs. cost savings). The bar‑raiser expected me to *dive deep* into the architecture and *deliver results* that were measurable—exact numbers on latency and spend. We iterated quickly, learning from a failed scaling policy that caused cold starts; we switched to **Spot Instances** with fallback on On‑Demand to keep availability >99.9%. This reinforced my belief in *Bias for Action* coupled with *Customer Obsession*: the end users got faster recommendations without sacrificing compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
