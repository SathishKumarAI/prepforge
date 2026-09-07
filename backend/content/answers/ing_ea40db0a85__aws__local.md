---
qid: ing_ea40db0a85__aws__local
question: 'Explain: Deploy: Flexible deployment options with Agent Engine, Cloud Run,
  and GKE'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 488
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:07:56-05:00'
sources: []
---

**Situation (S)**  
In my last role I led the migration of a recommendation engine from on‑prem to cloud. The model had to serve millions of requests per day with <200 ms latency and support rapid A/B testing.

**Task (T)**  
I needed flexible deployment options that let data scientists iterate quickly while keeping ops overhead low, and that could scale automatically for traffic spikes.

**Action (A)**  

1. **Agent‑Based Edge Deployment** – I wrapped the model in a lightweight *Amazon SageMaker Neo* agent that can run on IoT devices or edge servers. This gave us <50 ms inference locally and reduced egress costs by 35 %.  
2. **Cloud Run / Fargate (Serverless)** – For bursty traffic, I containerized the model with Docker, deployed to *AWS Fargate* via *Amazon EventBridge*. Each request triggers a stateless pod; auto‑scaling kicks in at 80 % CPU, keeping costs <$0.05 per inference.  
3. **GKE (EKS) for Production** – I set up a managed Kubernetes cluster on *Amazon EKS* with Spot Instances and GPU nodes for batch scoring jobs. We achieved 99.9 % availability by using multiple AZs and automatic pod replacement.

I documented the trade‑offs: edge agents reduce latency but need OTA updates; serverless is cost‑effective for spikes but has cold‑start overhead; Kubernetes gives full control at higher operational cost. I also introduced a *canary pipeline* in CodePipeline that automatically rolls back if latency >200 ms or error rate >1%.

**Result (R)**  
The new architecture cut inference costs by 42 % and improved mean latency from 350 ms to 180 ms, while enabling data scientists to deploy new models in under 30 minutes.  

*Leadership Principles:* **Ownership** – I took full responsibility for end‑to‑end performance; **Dive Deep** – I analyzed cost/latency trade‑offs and tuned autoscaling thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
