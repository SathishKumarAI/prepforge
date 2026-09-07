---
qid: ing_ae4a9564ab__aws__local
question: 'Explain: Three-Way Decision: Approve / Escalate / Reject'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 486
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:59:40-05:00'
sources: []
---

**Situation & Problem**  
I was leading the review board for a new generative‑AI product that could be deployed in customer‑facing chatbots. The board needed a repeatable triage process to decide whether each model version should **Approve**, **Escalate**, or **Reject** before production roll‑out.

**Task**  
Design a lightweight, data‑driven decision framework that balances speed with risk mitigation, and automate it so the team can focus on higher‑value work.

**Action**  

| Decision | Key Criteria (AWS services) | Automation |
|----------|-----------------------------|------------|
| **Approve** | • Accuracy ≥ 92% (SageMaker Model Monitor)<br>• Latency ≤ 150 ms (AppRunner + CloudFront edge cache)<br>• Cost < $0.05 per inference (ECS spot instances) | Lambda triggers CI/CD pipeline to promote the model |
| **Escalate** | • Accuracy 88–91% or latency 150–250 ms<br>• Data drift > 5% (S3 + Athena query)<br>• High regulatory impact (GovCloud) | SNS topic notifies data‑science and compliance teams; a JIRA ticket auto‑created |
| **Reject** | • Accuracy < 88% or latency > 250 ms<br>• Cost > $0.10 per inference<br>• Unresolved security flags (GuardDuty) | Lambda aborts deployment, sends Slack alert |

The framework uses **AWS Step Functions** to orchestrate the checks, with **CloudWatch Metrics** feeding a **Grafana dashboard** that visualizes the decision funnel in real time.

**Result**  
Implemented within 4 weeks. In the first month, the triage process reduced manual review time by **70%**, cut costly roll‑backs by **35%**, and increased approved releases from 12 to 18 per quarter—delivering a $1.2 M annual savings in compute spend.

**Learning**  
The key was embedding ownership: I set up a “Decision Owner” role that could override the state machine only after a documented risk review, ensuring accountability while keeping the process scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
