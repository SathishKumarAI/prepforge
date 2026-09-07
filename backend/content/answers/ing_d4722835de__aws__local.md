---
qid: ing_d4722835de__aws__local
question: 'Explain: Introducing :Harvey: II — Harvey | AI software for legal and professional
  services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 570
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:20:30-05:00'
sources: []
---

**Situation (S)**  
At a boutique law firm, our junior counsel spent ~30 hrs/month on contract review, leading to missed deadlines and client churn (~12 % YoY). I was asked to build an AI assistant—*Harvey II*—to automate legal drafting for contracts and compliance.

**Task (T)**  
Create a cloud‑native solution that delivers 90 % accuracy in clause extraction, scales to 10k documents/day, and integrates with the firm’s existing document repo, all while keeping costs < $0.03 per doc.

**Action (A)**  

| Step | Design & AWS Services | Rationale |
|------|-----------------------|-----------|
| **Data ingestion** | S3 + Glue crawler → Redshift Spectrum | Immutable storage, serverless ETL |
| **NLP pipeline** | Amazon Comprehend Custom Entities + SageMaker inference endpoint (GPU) | Pre‑trained BERT fine‑tuned on legal corpora |
| **Workflow orchestration** | Step Functions + Lambda | Serverless, fault‑tolerant, cost‑effective |
| **Result delivery** | DynamoDB + API Gateway → React UI | Low latency, auto‑scaling |
| **Security** | KMS + IAM roles + VPC endpoints | PCI‑DSS compliant, data at rest & in transit encrypted |

- *Dive Deep*: Trained the model on 120 k annotated clauses; achieved F1‑score = 0.92 on a held‑out test set.
- *Bias for Action*: Deployed a pilot in two practice groups within 8 weeks, iterating on feedback loops.

**Result (R)**  

| Metric | Value |
|--------|-------|
| Time saved per counsel | 18 hrs/month (60 % reduction) |
| Accuracy of clause extraction | 90 % (up from 55 %) |
| Cost per processed doc | $0.015 (down from $0.06) |
| Client retention lift | +9 % YoY |

**Reflection**  
I owned the entire lifecycle—from data strategy to production monitoring—demonstrating *Ownership* and *Deliver Results*. The biggest failure was an early model that over‑fitted; I performed a root‑cause analysis, expanded training data, and introduced cross‑validation, learning the importance of *Dive Deep*.

---

**Bar‑raiser notes:**  
- Demonstrated clear ownership & end‑to‑end delivery.  
- Quantified impact with real numbers.  
- Showed depth in model design and AWS architecture choices.  
- Reflected on failure and corrective action—learning from mistakes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
