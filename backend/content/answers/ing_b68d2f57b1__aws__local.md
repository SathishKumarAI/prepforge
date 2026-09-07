---
qid: ing_b68d2f57b1__aws__local
question: 'Explain: F4: Cost regression from over-routing to teacher'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 476
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:16:40-05:00'
sources: []
---

**Situation (S)**  
While launching a recommendation model for our e‑commerce catalog, the inference pipeline was routed through two separate Lambda functions—one for feature extraction and one for scoring—to satisfy a legacy “teacher” architecture. This over‑routing inflated per‑request cost by ~30 % and increased latency from 45 ms to 120 ms.

**Task (T)**  
Reduce inference cost while preserving model accuracy, and demonstrate that the new design meets SLA requirements.

**Action (A)**  
1. **Dive Deep into Tracing** – enabled X-Ray on both functions, identified a 12 % CPU‑bound duplication in feature extraction.  
2. **Redesign with AWS SageMaker Endpoint** – consolidated logic into a single container, deployed as a multi‑model endpoint using *Inference Scheduler* to auto‑scale.  
3. **Cost Optimisation** – switched from on‑demand Lambda to spot‑based EC2 instances behind an Application Load Balancer; used *AWS Compute Optimizer* recommendations for instance types (m5.large).  
4. **Monitoring & Alerting** – set up CloudWatch dashboards and alarms to track cost per 1 M requests, latency, and error rate.

**Result (R)**  
- Cost per inference dropped from $0.00012 to $0.00008 (a 33 % reduction).  
- Latency decreased to 55 ms, meeting the 60 ms SLA.  
- Monthly savings projected at ~$48k for 50 M requests.  
- The new pipeline is fully automated via CodePipeline CI/CD, ensuring rapid rollback if accuracy falls below 99.5 %.  

**Leadership Principles Highlighted**  
*Customer Obsession* – delivering faster, cheaper recommendations directly benefits shoppers.  
*Ownership* – I took end‑to‑end responsibility for tracing, redesigning, and validating the new architecture.  

A bar‑raiser would note the quantitative impact, depth of analysis (X-Ray traces), and the learning loop that turned a costly legacy pattern into an efficient, scalable solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
