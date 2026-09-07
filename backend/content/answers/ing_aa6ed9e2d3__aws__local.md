---
qid: ing_aa6ed9e2d3__aws__local
question: 'Explain: On-policy distillation — best of both worlds'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 508
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:51:35-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a fraud‑detection team that used an on‑policy reinforcement learning (RL) model to flag suspicious transactions in real time. The policy was great at adapting to new attack vectors, but its inference latency (~250 ms per request) exceeded our SLA of 100 ms and the GPU cost grew linearly with traffic spikes. I had to deliver a solution that preserved the model’s adaptability while meeting performance & cost targets.

**Action – On‑policy Distillation Design**  
I proposed *on‑policy distillation*: every minute we gathered fresh trajectories from the live policy, generated “soft” labels (action probabilities + value estimates), and trained a lightweight student network offline. The student ran on an **AWS Inferentia** inference endpoint with 1 ms latency, while the teacher remained on an **Amazon SageMaker training instance** for continuous learning.

Key design choices:  
- **Data pipeline** – Kinesis Data Streams fed experience replay into S3; Glue ETL produced TFRecord batches.  
- **Training loop** – Lambda orchestrated nightly jobs on a Spot‑ECS cluster, reducing compute cost by 60 %.  
- **Evaluation** – A/B test with 5 % traffic: student maintained 97 % of teacher’s precision‑recall curve and cut inference cost from $0.12/1k to $0.04/1k.  

**Result**  
Within two weeks the production system met the SLA, dropped latency by 70 %, and saved ~30 % in monthly inference spend while still adapting to new fraud patterns within 24 h.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered a faster, cheaper service that kept merchants’ fraud risk low.  
- **Ownership & Dive Deep** – Took end‑to‑end responsibility for data flow, training, and deployment; performed root‑cause analysis on latency spikes.  

### What a Bar‑Raiser Looks For
- **Quantified Impact**: Clear metrics (latency, cost, precision‑recall).  
- **Depth & Ownership**: End‑to‑end design across AWS services with trade‑off reasoning.  
- **Learning from Failure**: Iterative A/B testing and rapid rollback plan if the student underperformed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
