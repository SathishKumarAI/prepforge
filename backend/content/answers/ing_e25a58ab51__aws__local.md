---
qid: ing_e25a58ab51__aws__local
question: 'Explain: A customer executive says "the AI keeps getting things wrong"
  and wants to cancel the pilot. Walk me through your next 48 hours.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 551
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:51:18-05:00'
sources: []
---

**Situation & Task**  
A C‑suite executive flagged “AI keeps getting things wrong” and threatened to cancel the pilot within 48 hrs. I had to demonstrate ownership, bias for action, and deliver results while keeping customer obsession front‑and‑center.

**Action (Day 1)**  

| Step | What I did | AWS services | Rationale |
|------|------------|--------------|-----------|
| **Immediate response** | Sent a concise email: “We’re on it – here’s what we’ll do.” | — | Signals ownership and keeps the executive informed. |
| **Root‑cause analysis** | Deployed CloudWatch + X-Ray traces to capture model inference logs; pulled 10 k recent predictions. | Amazon CloudWatch, AWS X-Ray | Dive deep into error patterns (e.g., 12% of predictions had >1.5 σ deviation). |
| **Model health check** | Ran a sanity test against a held‑out validation set; identified drift in feature distribution (mean shift 0.42 SD). | SageMaker Model Monitor | Quantifies the issue and ties to business impact (~$250k/month loss projection). |
| **Rapid mitigation** | Implemented an “fallback” rule: if confidence < 0.65, return a human‑review flag; re‑trained the model with updated data (20% new samples). | SageMaker, Lambda, SNS | Immediate improvement in accuracy from 78 % to 92 %. |
| **Stakeholder update** | Live dashboard (QuickSight) shared via Zoom – real‑time metrics and next steps. | QuickSight | Transparency drives trust. |

**Result (Day 2)**  

- Accuracy jump: **+14 pp** in the first 4 hrs, meeting SLA of >90 %.  
- Cost impact: avoided ~$120k/month by keeping pilot alive.  
- Executive approved a full‑scale rollout with a new monitoring cadence.

**Bar‑raiser takeaways**

*Ownership*: I owned every step from diagnosis to mitigation.  
*Dive Deep*: Leveraged CloudWatch/X-Ray to surface root causes quantitatively.  
*Quantified Impact*: Tracked metrics (accuracy, cost) and communicated them clearly.  
*Learning*: Post‑pilot review will embed drift detection in CI/CD, preventing recurrence.

This approach aligns with **Customer Obsession** (prioritizing the executive’s pain), **Ownership**, and **Bias for Action**—all core Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
