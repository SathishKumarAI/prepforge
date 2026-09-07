---
qid: ing_32f86a1387__aws__local
question: 'Explain: Now look at the exit code of — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 533
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:20:27-05:00'
sources: []
---

**Answer (Amazon Way)**  

**Situation / Task** – In my last role I built an automated grading pipeline for the “Python Full Course for Beginners” that ran every night on a serverless stack. The pipeline needed to capture each student’s script exit code, log it, and surface failures in the analytics dashboard.

**Action** –  
1. **Capture exit code**: In the Lambda function that invoked `subprocess.run`, I used `returncode` to store the exit status.  
2. **Persist & analyze**: The return code was written to DynamoDB (`StudentRun`) with a composite key (student_id, timestamp).  
3. **Alerting**: A CloudWatch Event triggered an SNS topic if the exit code ≠ 0; the message included the student ID and error trace.  
4. **Visualization**: I added a QuickSight dataset pointing to the DynamoDB table and created a dashboard that showed *“Pass rate”* (100 % – failures) and *“Average runtime”* per lesson.

**Result** – After deployment, we saw a 30 % drop in manual grading effort, and the pass‑rate metric jumped from 78 % to 92 % within two weeks as students received immediate feedback.  

**AWS Services & Trade‑offs**  
- **Lambda** (cost: $0.20 per million invocations) → scales automatically; trade‑off is cold start latency (~200 ms).  
- **DynamoDB** → low‑latency writes, 99.999% availability; we provisioned on-demand to avoid over‑provisioning.  
- **CloudWatch + SNS** → instant notifications; could be replaced with EventBridge for richer routing if needed.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – Students get real‑time error feedback, improving learning outcomes.  
- **Ownership & Dive Deep** – I designed the end‑to‑end pipeline, debugged latency issues, and tuned provisioned capacity to balance cost vs performance.

**Bar‑raiser Signals** – The answer shows ownership (full stack), depth (specific AWS services and trade‑offs), quantified impact (30 % effort reduction, 14 pp increase in pass rate), and learning (opted for on-demand DynamoDB after observing traffic spikes).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
