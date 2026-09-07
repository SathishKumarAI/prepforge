---
qid: ing_372a11b64d__aws__local
question: 'Explain: The Teacher-Student Paradigm — Knowledge Distillation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 557
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:29:26-05:00'
sources: []
---

**Situation – Task**  
At my last role I led a team that had to reduce the inference latency of our recommendation engine from **250 ms to < 80 ms** while keeping accuracy within 1 % of the flagship model. We chose *knowledge distillation* (teacher‑student paradigm) as the core technique.

**Action – Design & Implementation**  
- **Teacher**: A 12‑layer Transformer with 120M parameters, trained on S3 datasets and served via SageMaker Batch Transform (cost ~$0.50/hr).  
- **Student**: A lightweight 4‑layer CNN (≈ 5M params) packaged in a Docker image on ECR, deployed as an ECS Fargate service behind an Application Load Balancer for *high availability* (99.9%).  
- **Distillation Pipeline**: Lambda functions orchestrated via Step Functions pulled teacher logits from S3, streamed them to the student training job on SageMaker Pipelines, and logged loss metrics in CloudWatch.  
- We added a **temperature‑scaled cross‑entropy** objective (T=5) and a *confidence weighting* term to preserve hard examples.  
- Automated hyper‑parameter sweeps ran on Spot Instances, cutting GPU cost by 70 %.  

**Result – Impact**  
The student achieved **97.8 % of the teacher’s top‑k accuracy**, reducing inference latency to **65 ms** and cutting per‑request cost from $0.12 to $0.04 (≈ 66 % savings). The deployment also improved *customer satisfaction* scores by 4.2 points on our internal survey.

---

### Leadership Principles & Bar‑Raiser Signals  
- **Customer Obsession / Deliver Results**: Directly lowered latency, improving user experience.  
- **Ownership**: I owned the entire pipeline from data ingestion to production deployment.  
- **Dive Deep**: Tracked per‑class confidence gaps and iterated on temperature values until convergence.  
- **Bias for Action**: Deployed a provisional model within 3 weeks of kickoff, learning quickly from A/B test failures (initial student overfitting) and adjusting the loss weighting.

The bar‑raiser will listen for measurable impact, depth of technical reasoning, ownership across AWS services, and evidence of rapid learning from early setbacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
