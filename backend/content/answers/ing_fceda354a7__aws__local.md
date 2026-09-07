---
qid: ing_fceda354a7__aws__local
question: 'Explain: Shared Resources Dependency — Cloud Native Anti-Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 439
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:49:50-05:00'
sources: []
---

**Shared‑Resources Dependency – an ML anti‑pattern**

*Situation:*  
At my previous company we deployed a nightly training pipeline that launched multiple SageMaker notebook instances from the same ECR image. All notebooks pulled the same GPU‑enabled AMI and shared a single EFS volume for checkpoints.

*Task:*  
The team needed faster turnaround and higher reliability for 200+ concurrent jobs while keeping costs predictable.

*Action:*  
1. **Identify the anti‑pattern** – “shared resources” (EFS, network interfaces, IAM roles) create hidden contention that violates *Ownership* and *Dive Deep*.  
2. **Decouple state** – move checkpoints to per‑job S3 buckets; use SageMaker’s built‑in model artifacts store.  
3. **Isolate compute** – spin up a **SageMaker Processing job** per training script, each with its own **ECS task role** and dedicated GPU instance type (p3.xlarge).  
4. **Auto‑scaling & cost control** – enable *Spot* instances via SageMaker’s Spot Training API; attach an Auto Scaling group to the underlying EKS cluster for inference endpoints.  
5. **Monitoring** – instrument with CloudWatch metrics (`CPUUtilization`, `GPUUtilization`) and set alarms on queue length.

*Result:*  
Training time dropped from 3 h → 45 min (80% faster). Concurrency increased from 30 to >200 without failures. Cost per training job fell by 35 %. The pipeline now scales linearly, and each team owns its own resources, eliminating the “single point of contention.”  

**Bar‑raiser notes:**  
- Ownership: isolated roles & storage.  
- Dive deep: quantified latency/cost improvements.  
- Learning: early tests with shared EFS revealed hidden I/O bottlenecks; pivoted to S3 + Spot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
