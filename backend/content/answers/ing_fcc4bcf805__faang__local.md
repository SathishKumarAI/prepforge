---
qid: ing_fcc4bcf805__faang__local
question: 'Explain: A quick how-to on capacity planning for an application deployed
  in AWS: Laxmi Nagarajan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 521
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:27:30-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to give a *quick* guide for capacity‑planning an ML model or service running on AWS.  
Assumptions:  
- The workload is stateless (or can be horizontally scaled).  
- We have access to CloudWatch metrics, Auto Scaling groups, and cost insights.  
- The goal is to avoid over‑provisioning while meeting latency SLAs.

**2️⃣ Approach**  
1. **Define key KPIs** – request rate, latency, CPU/Memory usage, GPU load if applicable.  
2. **Baseline profiling** – run the model on a representative dataset with an EC2 t3.medium (or p3.2xlarge for GPUs) and collect metrics over 24–48 hrs.  
3. **Scale‑up factor** – compute the maximum CPU/GPU utilization; if it’s <70 % use a safety margin of 1.5× to account for burst traffic.  
4. **Auto Scaling policy** – create an ASG with target tracking on `CPUUtilization` (or `GPUUtilization`) set to the value from step 3.  
5. **Cost monitoring** – enable Cost Explorer and set alerts when spend exceeds a threshold.

**3️⃣ Depth**  
- Use **Amazon SageMaker endpoints** for managed scaling; otherwise, an ALB + ECS service with task definitions tuned to `cpu`/`memory`.  
- For inference latency < 200 ms, keep the instance type in the *high‑performance* family (e.g., `ml.m5.large` or `g4dn.xlarge`).  
- Apply **spot instances** for batch jobs; reserve capacity for critical traffic.  

Complexity: O(1) per request after scaling; cost linear with instance count.

**4️⃣ Edge Cases**  
- Sudden traffic spikes (DDoS, marketing launch). Mitigate by enabling *warm‑up* instances or a *pre‑warmed cache*.  
- Model drift causing higher inference time. Detect via A/B testing and trigger re‑training pipeline.  

**5️⃣ Optimize & Communicate**  
Iterate the baseline every 3 months; use **AWS Compute Optimizer** to recommend instance families. Narrate by showing a *before/after* graph of CPU usage vs. traffic, emphasizing the trade‑off between cost and SLA compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
