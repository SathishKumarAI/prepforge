---
qid: ing_4e3efe8e4f__aws__local
question: 'Explain: Decouple What is Important to the Business and Changes Frequently'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 513
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:22:30-05:00'
sources: []
---

**Situation (S)**  
I led a fraud‑detection ML team at a fintech startup that processed ~10 M transactions/day. The business required the model to adapt quickly to new fraud patterns while keeping latency < 50 ms for real‑time scoring.

**Task (T)**  
Design a system that **decouples core business rules from rapidly changing fraud signals**, enabling engineers to iterate on features without disrupting production.

**Action (A)**  
1. *Decouple data pipelines* – split into a **core rule engine** (Rule Set A) and an **ML feature store** (Feature Store B).  
2. Use **AWS Lambda + Step Functions** for the rule engine, keeping it stateless and version‑controlled via CodeCommit.  
3. Build Feature Store B on **Amazon SageMaker Feature Store** backed by DynamoDB for low‑latency reads and S3 for batch ingestion.  
4. Implement a **model registry** in SageMaker Model Registry; each new model gets an immutable tag (e.g., `fraud-v2`).  
5. Deploy inference endpoints via **SageMaker RealTimeInference** with an autoscaling policy that keeps 99th‑percentile latency < 45 ms.  
6. Adopt **Canary releases** in CodePipeline to roll out new rule sets or models to 1% traffic before full rollout.

**Result (R)**  
- Reduced model iteration time from *3 days* to *4 hours*.  
- Achieved a **99.9 % availability** SLA and cut inference costs by **22 %** through efficient autoscaling.  
- Customer fraud loss dropped by **18 %** within the first month of deployment.

---

### Leadership Principles
- **Customer Obsession:** Delivered faster, more accurate fraud detection, directly protecting revenue.  
- **Ownership & Dive Deep:** Built a fault‑tolerant architecture that allowed rapid experimentation without compromising production.

### What a Bar‑Raiser Listens For
- Demonstrated ownership of end‑to‑end solution and clear trade‑offs between latency, cost, and flexibility.  
- Quantified impact (cost savings, fraud reduction).  
- Reflected on failure: initial monolithic model caused 15 % downtime; the decoupled design eliminated that risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
