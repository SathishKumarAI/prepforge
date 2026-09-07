---
qid: ing_97736d97f9__aws__local
question: 'Explain: Interview Follow-Up Questions — Customer Support Automation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 506
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:08:20-05:00'
sources: []
---

**Situation & Task (S)**  
When I joined the SaaS team, our ticket queue grew from 3k to 12k requests/month while SLA lagged at 48 h. The leadership asked me to prototype an AI‑driven support bot that could triage and resolve ~30 % of tickets automatically.

**Action (A)**  
I owned the project, scoped it with stakeholders, and built a **Serverless Architecture**:  

| Component | AWS Service | Why |
|-----------|-------------|-----|
| NLP & intent detection | Amazon Comprehend + Amazon Lex | Zero‑maintenance ML model, auto‑scales to 10k QPS |
| Knowledge base search | OpenSearch (managed) | Sub‑second retrieval, high availability |
| Ticket routing & escalation | Step Functions + Lambda | Event‑driven workflow, clear audit trail |
| Monitoring & retraining | CloudWatch + SageMaker Pipelines | Continuous learning loop |

I added a **feedback loop**: every resolved ticket feeds back to the model via S3 + SageMaker Training jobs. I also introduced a “confidence gate” that forwards low‑certainty queries to human agents, ensuring quality.

**Result (R)**  
Within 6 weeks of deployment:  

* Auto‑resolution rate rose from 5 % → **35 %** (≈4k tickets/month).  
* Average first‑contact resolution time dropped by **62 %** (from 48 h to 18 h).  
* Operational cost fell 40 % compared to a traditional on‑prem stack.  

I documented lessons: the initial model over‑fitted on “billing” intents; we mitigated this with data augmentation and stricter validation.

**Leadership Principles Highlighted**  
- **Customer Obsession** – delivering instant, accurate help.  
- **Ownership & Bias for Action** – I drove the end‑to‑end solution from concept to production.  

Bar‑raiser cues: clear ownership, deep dive into trade‑offs (e.g., serverless vs. EC2), quantified impact, and learning from early model bias failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
