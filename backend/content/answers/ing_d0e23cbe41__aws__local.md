---
qid: ing_d0e23cbe41__aws__local
question: 'Explain: The EU AI Act — Ai Governance And Compliance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 456
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:13:17-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional product team at Amazon, I was tasked to onboard EU customers for our AI‑powered recommendation engine under the new **EU AI Act**. The goal: ensure full compliance without delaying rollout.

**Action**  
1. **Customer Obsession + Ownership** – I mapped every data flow against the Act’s “high‑risk” criteria (bias, transparency, safety).  
2. **Dive Deep & Bias for Action** – Built a lightweight audit framework using *Amazon Macie* (data discovery), *AWS Config* (rule enforcement) and *Amazon SageMaker Ground Truth* (labeling bias checks).  
3. **Invent & Simplify** – Created an automated “Compliance‑as‑Code” pipeline in *AWS CodePipeline*, which triggers a serverless Lambda that runs a custom Python library to validate model outputs against the Act’s risk thresholds.  
4. **Deliver Results** – Deployed the solution on *Amazon ECS* with *Application Load Balancer* for 99.9 % availability, and used *AWS Cost Explorer* to keep monthly spend < $5k.

**Result**  
- Reduced compliance review time from 14 days to 2 days (‑86%).  
- Achieved zero audit findings in the first quarter post‑launch.  
- Enabled 3 EU markets to go live 4 weeks earlier than projected, generating an estimated $12M incremental revenue.

**Bar‑raiser notes**  
*Ownership*: I took full accountability for the compliance pipeline and led cross‑team communication.  
*Depth*: Detailed audit logic, risk thresholds, and trade‑offs between cost (serverless vs container) were documented.  
*Quantified impact*: 86% time reduction, $12M revenue lift.  
*Learning from failure*: Early beta tests exposed a bias flagging false positives; we tuned the model thresholds, improving precision by 9%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
