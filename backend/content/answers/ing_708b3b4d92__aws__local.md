---
qid: ing_708b3b4d92__aws__local
question: 'Explain: Triage and Production Context — What is an AI SRE?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 468
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:39:47-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we launched an ML‑driven fraud detection model that ran 24/7 on SageMaker. A sudden spike in false positives caused a 12 % drop in legitimate transactions, impacting revenue and customer trust.

**Task:**  
I was tasked with acting as the **AI SRE (Site Reliability Engineer)**—the guardian of model health—while ensuring zero‑downtime production.

**Action:**  
1. **Triage Pipeline** – Built an automated alerting system on CloudWatch + SNS that triaged issues by severity:  
   * High* (e.g., >5 % deviation in precision) triggered a Lambda to spin up an EKS pod with a lighter‑weight inference container, while the main SageMaker endpoint continued serving.  
2. **Production Context** – Implemented canary releases via AWS CodeDeploy and managed traffic shifting with ALB weighted routing (95/5 split).  
3. **Observability** – Deployed Prometheus/Grafana on Kubernetes for latency & error rates; added a custom metric “prediction confidence” to CloudWatch, enabling root‑cause analysis within 2 min.  
4. **Cost & Scalability** – Leveraged Spot Instances for the canary pods and reserved capacity for baseline traffic, cutting inference costs by 18 % while keeping 99.9 % availability.

**Result:**  
Within 48 h we reduced false positives from 12 % to <2 %, restoring $1.3 M in lost revenue per month. The system now self‑heals within 5 min of any anomaly, and cost savings have been reallocated to model retraining budgets.

**Reflection (Bar‑raiser lens):**  
I owned the end‑to‑end lifecycle—designing, deploying, monitoring, and iterating. By diving deep into metrics I quantified impact (precision, latency, cost) and learned that a hybrid SageMaker‑EKS approach balances reliability with agility. This experience reinforced my bias for action while ensuring robust, customer‑centric AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
