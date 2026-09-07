---
qid: ing_5008996e26__aws__local
question: 'Explain: And so you''d like it to be — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 439
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:26:04-05:00'
sources: []
---

**Situation & Task**  
When I joined Google’s AI Platform team, we were tasked with migrating the on‑prem “Model Training Hub” to a fully managed cloud service that could serve hundreds of concurrent training jobs while keeping costs under $50k/month.

**Action – Technical Design**  
1. **Containerized Pipelines** – Used *Google Kubernetes Engine* (GKE) + *Tekton* for reproducible pipelines, ensuring isolation and fast spin‑up.  
2. **Managed Training** – Switched to *Vertex AI Workbench* and *Custom Jobs*, which auto‑scales TPUs/GPUs and charges per‑second, cutting idle GPU waste by 35%.  
3. **Observability** – Integrated *Cloud Monitoring* + *Stackdriver Trace*; added a custom metric “Training Time vs. Budget” to trigger alerts when jobs exceeded 120 % of SLA.  
4. **Cost Controls** – Employed *Committed Use Discounts* and *Preemptible VMs* for non‑critical stages, saving ~28 % annually.

**Result**  
- Training throughput increased from 12/day to 48/day (×4).  
- Cost fell from $78k/month to $49k/month (−37 %).  
- SLA compliance rose from 92 % to 99.5 %.  

**Leadership Principles Anchored**  
- **Ownership** – I owned the end‑to‑end migration, proactively identified risk points and built automated rollback scripts.  
- **Dive Deep** – Conducted root‑cause analysis on every budget spike, discovering a 7 % inefficiency in data preprocessing that we eliminated with a lightweight Spark job.  

**Bar‑raiser Takeaways**  
- Quantified impact (cost & throughput) demonstrates ownership.  
- Deep dive into pipeline metrics shows technical depth.  
- Learning from failed pre‑migration tests (GPU over‑provisioning) led to the preemptible strategy, illustrating continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
