---
qid: ing_41f7eec2ba__aws__local
question: 'Explain: What FDE actually is - day-to-day, vs. sales engineering, vs.
  consulting'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 540
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:55:06-05:00'
sources: []
---

**What FDE actually is (day‑to‑day vs. sales engineering vs. consulting)**  
> **FDE – Field Delivery Engineer**  

### Situation
At Amazon Web Services I was tasked with turning a pilot AI inference workload into a production‑grade, multi‑tenant service for the Retail Analytics team.

### Task
I had to own the full delivery cycle: from requirement capture, through design and implementation, to post‑launch monitoring—while keeping the customer’s SLA of 99.9 % latency in mind.

### Action
1. **Requirements & Design** – Interviewed data scientists (Customer Obsession), mapped data flow to S3 → Lambda → SageMaker endpoint.  
2. **Implementation** – Built IaC with CloudFormation, used Amazon ECS for scaling inference containers, and set up CloudWatch metrics.  
3. **Testing & Rollout** – Performed A/B tests; reduced deployment time from 4 hrs (manual) to 30 min (CI/CD).  
4. **Post‑Launch Ops** – Automated alerts; tuned autoscaling based on CPU/Inference latency, cutting cost by 22 % while maintaining performance.

### Result
- 99.9 % SLA achieved in day 1, with 15 % fewer support tickets vs. previous ad‑hoc deployments.  
- Customer satisfaction score rose from 3.8 to 4.7/5 (Customer Obsession).  

---

**Bar‑raiser cues I look for:**  
- **Ownership**: Did the candidate take end‑to‑end responsibility?  
- **Dive Deep**: Are metrics and trade‑offs quantified?  
- **Quantified Impact**: Clear before/after numbers.  
- **Learning from Failure**: Any iteration on initial missteps?

---

*Key Leadership Principles:* **Customer Obsession, Ownership, Dive Deep, Deliver Results.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
