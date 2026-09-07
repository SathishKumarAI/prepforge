---
qid: ing_3387650b48__aws__local
question: 'Explain: Online Banking — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 413
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:21:50-05:00'
sources: []
---

**Situation & Task**  
While leading a fintech team at my last company, we were asked to redesign the online‑banking platform so it could handle 10× the concurrent users without compromising security or latency—critical for our **Customer Obsession** and **Ownership** principles.

**Action (Design)**  
I proposed a micro‑service architecture using **Amazon API Gateway + AWS Lambda** for stateless client calls, backed by **RDS Aurora Serverless** for transactional data. A dedicated **AWS Cognito** service handled authentication and MFA, while **DynamoDB** stored session tokens for instant revocation. For real‑time fraud alerts, I added a **Kinesis Data Stream** feeding an **SageMaker inference endpoint**, enabling sub‑second risk scoring.  

- *Scalability*: Lambda auto‑scales to 50k RPS; Aurora Serverless adjusts DB capacity on demand.  
- *Availability*: Multi‑AZ deployment with Route 53 health checks and 99.999 % SLA for critical services.  
- *Cost*: Pay‑as‑you‑go model cuts infrastructure spend by ~30 % versus a monolith.

**Result**  
Post‑launch, the platform supported 120k concurrent users with an average latency of **48 ms** (vs. 110 ms pre‑design). Fraud detection accuracy improved to **98 %** precision, reducing false positives by 40 %.  

**Reflection (Bar‑raiser)**  
I took full ownership, iterated on the data model after early load tests, and learned that coupling authentication tightly with transaction services can create a single point of failure—hence the move to Cognito. This deep dive into trade‑offs exemplifies Amazon’s “Dive Deep” principle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
