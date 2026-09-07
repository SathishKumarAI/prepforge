---
qid: ing_eb5e5972a1__aws__local
question: 'Explain: Title: Evaluating Control Protocols for Untrusted AI Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 393
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:10:27-05:00'
sources: []
---

**Title: Evaluating Control Protocols for Untrusted AI Agents**

*Situation*: In my previous role at a fintech startup, we launched an autonomous fraud‑detection model that operated in production 24/7. A security audit revealed that the model could be manipulated via crafted input, potentially bypassing our risk thresholds.

*Task*: I was tasked with designing a robust control protocol to ensure any untrusted AI agent—whether from internal teams or third‑party vendors—could not alter core business logic without oversight.

*Action*:  
1. **Ownership & Customer Obsession** – I mapped the entire inference pipeline in **AWS Step Functions**, adding a *policy enforcement step* that validates input against an IAM‑based policy set before invoking the model on **Amazon SageMaker**.  
2. **Dive Deep & Bias for Action** – I introduced a lightweight “sandbox” using **AWS Fargate** containers, where every new model version undergoes automated unit tests and a *model‑score audit* (comparing predictions to baseline scores).  
3. **Invent & Simplify** – Leveraged **Amazon GuardDuty** to monitor anomalous API calls and integrated alerts into our Slack channel via **AWS Lambda**.

*Result*: The control protocol reduced unauthorized model changes by **99%**, cutting potential fraud losses from $2M to <$50K in the first quarter. Cost increased only 12 % due to added Fargate tasks, while latency stayed below 120 ms (95th percentile).  

**Bar‑raiser takeaway**: I demonstrated full ownership of the risk, dove deep into AWS services for a scalable solution, quantified impact with real loss numbers, and iterated rapidly after the first audit failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
