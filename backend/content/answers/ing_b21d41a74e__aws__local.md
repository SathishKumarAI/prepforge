---
qid: ing_b21d41a74e__aws__local
question: 'Explain: Testing and maintenance — What is Disaster Recovery? | Google
  Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 443
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:07:34-05:00'
sources: []
---

**Situation & Task**  
While leading a recommendation‑engine team for an e‑commerce platform, we discovered that our nightly model training pipeline was failing intermittently due to a single‑point failure in the GCP data‑flow cluster. The business impact was a 12 % drop in conversion rate during peak traffic.

**Action**  
I owned the incident response and re‑architected the disaster‑recovery (DR) strategy using AWS services, because the team needed an end‑to‑end solution that could be automated, cost‑effective, and easy to test.  

1. **Data Layer** – Replicated BigQuery tables to Amazon Redshift via *AWS Glue* ETL jobs scheduled on *Amazon EventBridge*.  
2. **Model Training** – Migrated the training DAG from Cloud Composer to *AWS Step Functions*, orchestrating EC2 Spot instances with *Auto Scaling Groups* for elasticity.  
3. **Fail‑over** – Deployed a second identical training stack in an alternate region, protected by *Route 53 latency routing* and *AWS Global Accelerator*.  
4. **Automation & Testing** – Implemented nightly DR drills using *AWS CloudFormation StackSets*, generating synthetic data to validate end‑to‑end recoverability within 30 minutes.  

**Result**  
Post‑migration, we achieved a 99.9 % uptime for the training pipeline, reduced mean time to recovery (MTTR) from 4 h to <15 min, and cut DR costs by 35 % compared with the previous GCP‑only approach.

**Reflection**  
The exercise taught me that *Ownership* means driving cross‑functional change, while *Dive Deep* requires dissecting failure modes and quantifying trade‑offs. The bar‑raiser will hear my clear ownership, data‑driven impact, depth of technical design, and the lesson that automated DR drills are non‑negotiable for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
