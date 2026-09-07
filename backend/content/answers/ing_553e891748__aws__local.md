---
qid: ing_553e891748__aws__local
question: 'Explain: Enterprise Sales Engineer, Healthcare — Careers | Sierra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 556
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:38:58-05:00'
sources: []
---

**Situation (S)**  
I was recruited by a SaaS startup that specialized in AI‑driven diagnostic tools for hospitals. The product promised to reduce radiology read times by 30 % using deep learning on CT scans. As the Enterprise Sales Engineer, my mandate was to convince large health systems—each with >5 000 beds—to adopt our platform.

**Task (T)**  
I had to demonstrate not only clinical value but also how our solution could scale across multiple sites, stay compliant with HIPAA, and integrate with existing PACS/EMR ecosystems. The goal: close a multi‑year contract worth $12 M ARR.

**Action (A)**  
1. **Dive Deep & Ownership** – I built a proof‑of‑concept on AWS:  
   * **Amazon SageMaker** for model training and inference pipelines.  
   * **AWS Glue + Athena** to ingest raw DICOM metadata into a data lake, enabling real‑time audit logs.  
   * **Amazon Elastic Kubernetes Service (EKS)** orchestrated microservices that exposed the model via HTTPS, ensuring zero downtime during rollouts.  
2. I scripted automated compliance checks using **AWS Config Rules** and leveraged **AWS Artifact** for HIPAA attestation PDFs, showing our “customer obsession” by addressing their data‑security concerns head‑on.  
3. Using **Amazon CloudWatch + X-Ray**, I produced dashboards that displayed inference latency (median 1.2 s) and accuracy metrics (99.2 % sensitivity), directly tying the tech to clinical outcomes.

**Result (R)**  
The demo convinced a senior medical director; we signed a $12 M contract, projected to reduce read times by 28 % across 10 hospitals—saving ~1,200 radiologist hours annually (~$4.5 M in labor cost). The solution later scaled to 25 sites with <0.5 % increase in latency, proving its elasticity.

**Reflection (Bar‑raiser focus)**  
- **Ownership:** I owned the entire technical delivery from requirement capture to production launch.  
- **Dive Deep:** Built end‑to‑end AWS architecture, quantified latency & accuracy, and pre‑empted compliance gaps.  
- **Quantified Impact:** Delivered $4.5 M in annual savings and a 28 % clinical efficiency gain.  
- **Learning from Failure:** Early prototype suffered a 30 % latency spike; I traced it to EKS node sizing and re‑architected with spot instances, cutting cost by 18 % while maintaining SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
