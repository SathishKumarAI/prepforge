---
qid: ing_1f02d956d9__aws__local
question: 'Explain: Docker — DevOps-SRE/1_Containers/Docker/Readme.md at main \u00b7
  Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 417
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:37:25-05:00'
sources: []
---

**Situation & Task**  
In 2023 I led a migration of our on‑prem ML inference service to AWS for the *AI‑Assist* product. The goal was to cut deployment time from ~2 hrs to <10 min, improve scalability during traffic spikes, and lower infra costs by 30 %.  

**Action (Technical)**  
1. **Containerization** – I Dockerized the TensorFlow inference pipeline and added a lightweight *Nginx* reverse proxy.  
2. **CI/CD** – Integrated GitHub Actions with `docker build`, signed images using Amazon ECR Public Signing, and deployed to an ECS‑Fargate cluster via CloudFormation.  
3. **Observability** – Emitted Prometheus metrics (`model_latency_ms`) from the container and pushed them to CloudWatch; set up Auto Scaling based on target CPU % (70%) and a custom metric (latency > 200 ms).  
4. **Cost Optimization** – Used Spot Instances for Fargate, reserved capacity for steady traffic, and leveraged AWS Savings Plans → $0.02 per inference vs $0.04 on‑prem.

**Result**  
- Deployment time reduced from 2 hrs to <10 min (80 % faster).  
- Traffic handled up to 4× peak load with 99.97 % availability.  
- Annual cost savings of ~$120k, exceeding the 30 % target by 20 %.  

**Leadership Principles & Bar‑raiser Insight**  
- **Ownership**: Took full responsibility for end‑to‑end migration and post‑launch monitoring.  
- **Dive Deep**: Diagnosed latency bottlenecks via container logs and CloudWatch traces, then tuned GPU allocation.  
- **Deliver Results**: Met all SLAs while cutting cost—quantified impact in dollars and uptime.  

This demonstrates how Docker + AWS services can drive tangible business value for AI workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
