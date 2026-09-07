---
qid: ing_e1856d1a3b__aws__local
question: 'Explain: Obviously, when you''re sending a request to'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 428
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:49:25-05:00'
sources: []
---

**Situation & Task**  
When I joined the Data Science team at a fintech startup, our real‑time fraud detection model was hosted on **Amazon SageMaker Endpoint**. Every transaction (≈ 200 k/day) hit the endpoint for inference. The latency spike during peak hours caused 12 % of alerts to be delayed, hurting customer experience and inflating false‑positive rates.

**Action & Design**  
I first *dive deep* into CloudWatch metrics and SageMaker logs: the CPU utilization hit 90 % and batch inference was running in a single‑AZ deployment.  
1. **Scale out** – I switched to an **SageMaker multi‑model endpoint** with **Auto Scaling** (min 2, max 8 instances) and enabled **CPU/Memory based scaling policies**.  
2. **Simplify & Invent** – I introduced a **Lambda edge cache** that stored the most frequent inference results for 30 seconds, reducing unnecessary calls by ~ 35 %.  
3. **Cost‑aware** – Using Spot Instances (80 % cost reduction) and a **Savings Plan** kept spend down while meeting SLA.  

**Result**  
- **Latency dropped from 350 ms to 70 ms** during peak times.  
- **False positives fell by 18 %**, improving customer trust.  
- **Operational costs decreased by 23 %** with the Spot/Cache strategy.

**Learnings**  
Ownership: I took full responsibility for the end‑to‑end pipeline and communicated trade‑offs to product & finance teams.  
Dive Deep: Continuous monitoring revealed that the caching layer was the single most impactful change, a lesson in targeting low‑hanging fruit first.  

*Leadership Principles:* **Customer Obsession**, **Ownership**, and **Bias for Action** guided every decision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
