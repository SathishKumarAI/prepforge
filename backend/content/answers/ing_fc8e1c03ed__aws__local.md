---
qid: ing_fc8e1c03ed__aws__local
question: Why container orchestration service needed?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 565
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:48:55-05:00'
sources: []
---

**Situation / Task**  
At my previous company we launched an AI‑powered recommendation engine that had to serve millions of requests per day while keeping latency under 200 ms. The monolith grew too large for quick iteration, and the team struggled with inconsistent deployments across dev, test, and prod.

**Action**  
I proposed migrating to **Amazon EKS + Fargate** so we could containerise each micro‑service (model inference, feature store, logging) and let Kubernetes handle scaling. I wrote a Terraform stack that spun up an autoscaling group of spot instances for worker nodes, integrated with **AWS App Mesh** for service‑to‑service traffic control, and enabled **EKS Pod Autoscaler** to react to GPU utilisation spikes. For data persistence we used **Amazon EFS** with encryption‑at‑rest.

I also set up a CI/CD pipeline in **GitHub Actions** that automatically built Docker images, pushed them to **Amazon ECR**, and applied rolling updates via Helm charts. To keep costs under control, I configured **AWS Savings Plans** for the EC2 instances and used **Fargate Spot** for non‑critical workloads.

**Result**  
- Deployment time dropped from 3 days to 4 hours (∼90% reduction).  
- Request latency fell to 120 ms average; 95th percentile under 200 ms.  
- Cost savings of 35% year‑over‑year compared to the legacy VM fleet, while achieving 99.99 % availability.

**Why an orchestration service matters**  
It abstracts cluster management, allows declarative infrastructure (IaC), and gives us fine‑grained scaling—critical for bursty AI workloads that need rapid GPU provisioning without manual intervention.

---

### Leadership Principles Anchored
- **Customer Obsession**: Delivered faster, more reliable recommendations.  
- **Ownership & Dive Deep**: Took full responsibility for the migration, debugged latency bottlenecks at the container level, and tuned autoscaling policies based on real metrics.

---

### Bar‑raiser signals I listen for
1. **Ownership** – Did you own the end‑to‑end problem?  
2. **Dive deep** – Are the metrics specific (latency, cost) and actionable?  
3. **Quantified impact** – Do numbers show clear business value?  
4. **Learning from failure** – How did you iterate on early deployment hiccups?

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
