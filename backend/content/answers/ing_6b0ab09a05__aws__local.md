---
qid: ing_6b0ab09a05__aws__local
question: 'Explain: Cross Platform — DevOps-SRE/2_ContainerOrchestration/ApacheMarathon&Mesos.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 445
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:26:03-05:00'
sources: []
---

**Situation / Task**  
In my last role I was tasked with unifying our on‑prem Kubernetes cluster and the legacy Apache Mesos/Marathon environment into a single CI/CD pipeline that could run across Windows, Linux and macOS agents. The goal was to reduce build times by 30 % while keeping cost under $5k/month.

**Action**  
* **Ownership & Customer Obsession:** I mapped each team’s pain points (slow artifact promotion on Windows, flaky Marathon jobs) and prioritized fixes that delivered the highest ROI.  
* **Dive Deep + Bias for Action:** Built a multi‑stage GitHub Actions workflow that:
  * Builds Docker images in parallel using `buildx` (leveraging ECR for caching).  
  * Pushes to Amazon ECR and triggers an AWS CodePipeline stage that spins up a temporary Mesos cluster on EC2 Spot instances via CloudFormation.  
  * Runs Marathon jobs with deterministic container specs, then tears the cluster down automatically.  
* **AWS Services Used:**  
  - **ECR** (image registry)  
  - **CodeBuild/CodePipeline** (CI/CD orchestration)  
  - **EC2 Spot + Auto Scaling Groups** (cost‑effective Mesos nodes)  
  - **CloudWatch** (logging & metrics).  

**Result**  
* Build time dropped from 45 min to 28 min (≈ 38 % faster).  
* Monthly spend reduced by 18 % due to Spot usage and automatic cluster teardown.  
* Cross‑platform test coverage increased from 70 % to 92 %, improving defect detection before production.

**Bar‑raiser Takeaway**  
I demonstrated *ownership* by owning the entire pipeline, *depth* through a deep dive into Mesos internals, quantified impact with real metrics, and learned that automated tear‑down of temporary clusters is key to cost control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
