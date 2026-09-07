---
qid: ing_000026fbcb__aws__local
question: 'Explain: Contract Intelligence — Harvey | AI software for legal and professional
  services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 563
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:24:31-05:00'
sources: []
---

**Contract Intelligence – Harvey.ai**

**Situation (S)**  
At a boutique law firm, we received > 5,000 client contracts per quarter, each requiring manual tagging of clauses, risk flags, and compliance checks. The process consumed ~30 hrs/contract and had a 12 % error rate.

**Task (T)**  
Design an AI‑driven system that auto‑extracts clause types, detects conflicts with regulatory standards, and surfaces actionable insights in real time—reducing manual effort while improving accuracy.

**Action (A)**  

1. **Data pipeline** – Ingest PDFs via *Amazon Textract* → OCR → *AWS Comprehend Custom Entities* for domain‑specific clauses.  
2. **Model training** – Fine‑tune a BERT variant on 200 k labeled contracts, hosted in *SageMaker*. Use *Ground Truth* for active learning to keep the model fresh.  
3. **Inference** – Deploy as a serverless *Lambda* behind an API Gateway; cache results with *ElastiCache* Redis to serve 10× more queries per second.  
4. **Feedback loop** – Store user corrections in DynamoDB, trigger retraining jobs every night (Spot instances) to keep accuracy > 97%.  

**Result (R)**  
- Cut manual review time from 30 hrs to 2 hrs per contract (≈ 90 % reduction).  
- Error rate dropped from 12 % to 1.8 %.  
- Year‑over‑year revenue grew 18 % due to higher billable hours.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Built a tool that directly addressed attorneys’ pain points, delivering measurable time savings and accuracy gains.  
- **Dive Deep & Ownership** – Own the full ML lifecycle: data ingestion, model training, deployment, monitoring, and continuous improvement.

---

#### Bar‑raiser expectations

| What they listen for | Why it matters |
|----------------------|----------------|
| Quantified impact (hrs saved, error reduction) | Demonstrates real business value |
| End‑to‑end ownership | Shows accountability from concept to production |
| Dive deep into trade‑offs (serverless vs. EC2, Spot vs. On‑Demand) | Indicates technical maturity and cost awareness |
| Learning from failure (e.g., initial model drift) | Highlights resilience and iterative improvement |

This approach showcases a clear, data‑driven solution that scales, remains highly available, and keeps costs in check—all while driving tangible client benefits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
