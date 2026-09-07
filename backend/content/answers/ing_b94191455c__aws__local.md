---
qid: ing_b94191455c__aws__local
question: 'Q: How would you design a system that lets non-technical users automate
  desktop tasks using AI?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 478
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:22:52-05:00'
sources: []
---

**Situation / Task**  
At my previous role we launched a “Desktop Auto‑Pilot” feature for non‑technical sales reps. They needed to automate repetitive tasks (copying data, filling forms, running reports) without writing code. The goal was 80 % adoption and a 30 % time‑saving within three months.

**Action – Design**  
1. **User Interface** – A lightweight Electron app that records UI actions as a script.  
2. **AI Engine** – Each recorded script is sent to an Amazon SageMaker endpoint (PyTorch model) trained on 50k scripted workflows, which outputs a *semantic plan* (e.g., “open Excel → paste from clipboard → run macro”).  
3. **Execution Layer** – An AWS Step Functions state machine orchestrates the plan:  
   - **AWS Lambda** invokes **Amazon RDS Aurora Serverless** for data lookups.  
   - **S3** stores intermediate files; **Amazon CloudWatch** logs every step for auditability.  
4. **Security & Scalability** – IAM roles restrict actions to the user’s scope; Step Functions automatically retries on transient failures, ensuring >99.9 % availability. Cost stays under $0.02 per task by using spot‑enabled Lambda and Aurora Serverless.

**Result**  
Within 90 days we hit **85 % adoption** and a **32 % reduction in manual hours**, saving the company ~$120k annually. The system also logged 12,000+ tasks, providing data for continuous model improvement.

**Bar‑raiser cues**  
- *Ownership*: I owned end‑to‑end delivery from UX to backend.  
- *Dive Deep*: Trained the planner on real user scripts and iterated until error rate <1 %.  
- *Quantified Impact*: Clear metrics (adoption, time saved, cost).  
- *Learning from Failure*: When first models misinterpreted “paste,” we added a confidence threshold that triggered human review—this reduced errors by 70 % in the next release.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
