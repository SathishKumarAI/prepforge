---
qid: ing_b3364dada6__aws__local
question: 'Explain: 2024 — Implementation Timeline | EU Artificial Intelligence Act'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 409
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:10:01-05:00'
sources: []
---

**Situation / Task**  
When the EU announced the Artificial Intelligence Act (AIA) in early‑2024, our cloud‑native ML platform was exposed to new compliance checkpoints—risk assessment, transparency logs, and human‑in‑the‑loop overrides. I owned a cross‑functional task force to deliver a compliant pipeline within 12 weeks.

**Action**  
*Customer Obsession & Ownership*: Conducted user interviews with legal, data‑science, and ops teams to surface pain points.  
*Dive Deep & Bias for Action*: Built a risk‑scoring microservice (Python + SageMaker) that auto‑labels models as “high”, “medium” or “low” risk using a decision matrix from the AIA’s 12 risk categories.  
*AWS Services*:  
- **SageMaker** for training and inference, with **Endpoint Auto Scaling** to keep latency < 200 ms under peak load.  
- **Step Functions** orchestrate data‑preparation → model scoring → audit‑log generation (CloudWatch + Athena).  
- **DynamoDB** stores risk metadata; **S3** holds raw data and evidence files for audit.  
- **AWS Artifact & GuardDuty** provide continuous compliance monitoring.  

*Deliver Results*: The pipeline was live 8 weeks ahead of the mandated 12‑week window, with a 97 % success rate on automated risk classification and zero false negatives in post‑deployment audits.

**Result**  
Achieved full AIA readiness, reduced manual audit effort by **70 %**, and cut compliance costs from $150k to $45k annually. Learned that embedding compliance into the CI/CD pipeline (rather than a bolt‑on) scales faster and preserves product quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
