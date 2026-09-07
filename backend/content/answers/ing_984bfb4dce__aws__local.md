---
qid: ing_984bfb4dce__aws__local
question: What is a health check? — Grokking-System-Design-Interview-Quizzes/Quizzes/Load
  Balancer.org at master \u00b7 ema2159/Grokking-System-Design-Interview-Quizzes \u00b7
  GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 579
total_tokens: 853
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:10:01-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** While designing a global e‑commerce platform I had to expose the API layer through an Application Load Balancer (ALB) that could route traffic to thousands of containerized services in ECS.  
> **Task:** Implement a *health check* mechanism so that unhealthy tasks are removed from rotation without impacting user experience.  
> **Action:**  
> 1. **Requirement clarification** – The health probe must run every 30 s, time‑out after 5 s, and mark a target healthy only if it returns HTTP 200 for two consecutive checks.  
> 2. **Design** – Use ALB’s built‑in *target group* health check (HTTP/HTTPS) pointing to `/healthz`. ECS tasks expose this endpoint; the container image includes a lightweight Flask app that queries internal metrics and returns 200 if all dependencies are up.  
> 3. **AWS services & trade‑offs** –  
>    * ALB for low latency and graceful shutdowns.  
>    * CloudWatch Alarms to flag prolonged unhealthy states (e.g., >10 % of tasks).  
>    * SQS + Lambda to trigger auto‑scaling when health‑check failure rate spikes, ensuring cost‑efficiency by only scaling up when necessary.  
> 4. **Scalability & availability** – ALB automatically distributes traffic across Availability Zones; the health check is performed in each AZ, preventing a single point of failure.  
> 5. **Cost** – Using ALB’s native checks eliminates extra EC2 instances for monitoring; only CloudWatch logs incur minimal charges (~$0.10 per 1 M metrics).  

> **Result:** After deployment, the platform saw a *30% reduction in SLA violations* (from 4.2 % to 2.9 %) and a *12 % decrease in cost* due to smarter scaling.  
> 
> **Leadership Principles** – *Ownership* (I drove the end‑to‑end solution), *Dive Deep* (I dissected latency, error rates, and cost curves).  

**Bar‑raiser cues:** I demonstrated ownership by leading cross‑functional talks, dove deep into metrics to justify thresholds, quantified impact on SLAs & spend, and reflected on a failed earlier attempt where we used an external monitoring VM that caused delayed failover—learning that native ALB checks are both simpler and more reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
