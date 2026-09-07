---
qid: ing_d2495d9bc6__aws__local
question: What tools do I need? — Welcome to the \ud83e\udd17 AI Agents Course \u00b7
  Hugging Face
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 442
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:16:11-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** In my last role I built a proof‑of‑concept AI agent that answered customer queries in real time for an e‑commerce platform.  
> **Task:** I needed to pick the right tooling stack to prototype quickly, keep costs low, and scale to 10 k concurrent users.  
> **Action:**  
> * **Model hosting** – I used **Amazon SageMaker JumpStart** to pull a pre‑trained Hugging Face transformer (e.g., `distilbert-base-uncased`) and deploy it as a real‑time endpoint with auto‑scaling.  
> * **Orchestration** – AWS Step Functions wired the agent’s intent extraction, dialogue management, and API calls, giving me a clear audit trail.  
> * **Data pipeline** – Amazon S3 + Glue cataloged conversation logs; Athena enabled ad‑hoc analytics for 20 k records per day.  
> * **Security & cost** – IAM roles limited endpoint access to the Lambda function that handled user sessions, and I used spot instances in SageMaker to cut inference costs by ~35%.  
> * **Monitoring** – CloudWatch metrics (latency <200 ms, error rate 0.2%) fed into an SNS alert; a dashboard on Grafana visualized real‑time health.  
> **Result:** The agent handled 10 k concurrent users with <200 ms latency and achieved a 15 % reduction in ticket volume, costing $12/month versus the $60/month baseline for legacy systems.  

**Leadership Principles Anchored:** *Customer Obsession* (reducing support load) and *Ownership* (designing end‑to‑end pipeline).  

**Bar‑raiser focus:** Demonstrated ownership by selecting cost‑effective services, diving deep into latency metrics, quantifying impact on customer tickets, and learning from a failed initial attempt that used an unmanaged EC2 deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
