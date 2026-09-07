---
qid: ing_dd28607b3d__aws__local
question: 'Explain: Docker Registry — Top 8 Must-Know Docker Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 435
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:39:11-05:00'
sources: []
---

**Situation & Task (S)**  
I was leading a migration of our ML pipeline from on‑prem to AWS for the next generation recommendation engine. The team needed a robust way to version, store, and distribute model containers while keeping cost and latency low.

**Action (A)**  
1. **Built a private Docker registry** using **Amazon ECR** – it offers built‑in IAM control, image scanning, and lifecycle policies.  
2. Configured **ECR Cross‑Region Replication** to keep images in the EU‑West region for compliance while mirroring them to US‑East for lower‑latency inference.  
3. Leveraged **Amazon ECS Fargate** with *task definitions* that reference ECR images, eliminating server management and enabling auto‑scaling based on CPU/Memory metrics.  
4. Implemented **Image Tagging & Immutable Tags** so every training run produced a unique SHA tag; this guarantees reproducibility.  
5. Added **ECS Service Auto Scaling** tied to CloudWatch alarms (e.g., 70 % CPU) to handle sudden traffic spikes during product launches.  

**Result (R)**  
- Reduced model deployment time from **3 days → 4 hours** (80 % faster).  
- Cut storage costs by **35 %** through lifecycle policies that delete unused images after 30 days.  
- Achieved **99.9 % availability** for inference endpoints during a high‑traffic promotion, thanks to cross‑region replicas.

**Learning & Leadership Principles**  
*Customer Obsession*: Delivered faster, more reliable models directly impacting user experience.  
*Ownership*: Took full responsibility for end‑to‑end CI/CD and cost optimization, documented the process in an internal wiki.  

Bar‑raiser notes: I demonstrated ownership, deep dive into AWS services, quantified impact, and iterated after a failed first deployment that exposed missing lifecycle rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
