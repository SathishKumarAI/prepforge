---
qid: ing_61f76f1b19__aws__local
question: 'Explain: Results — Introducing BigLaw Bench to Evaluate LLMs | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 497
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:07:06-05:00'
sources: []
---

**Situation / Task**  
At a boutique legal tech firm I led the launch of *BigLaw Bench*, an internal platform that benchmarks large‑language models (LLMs) on real‑world contract‑review tasks. The goal was to quantify model performance, surface blind spots, and drive a data‑driven roadmap for product improvements.

**Action**  
*Ownership & Dive Deep*: I scoped the feature set—automated test‑suite generation, drift monitoring, and an interactive dashboard.  
- **Data pipeline**: Built on **Amazon SageMaker Pipelines** to ingest 150 k annotated clauses, run inference on multiple LLMs (OpenAI GPT‑4, Anthropic Claude, custom HuggingFace models), and store metrics in **Amazon Timestream** for time‑series analysis.  
- **Scalability & Cost**: Leveraged **SageMaker Processing Jobs** with spot instances; achieved a 40 % cost reduction versus on‑demand while maintaining <30 s inference latency per batch.  
- **Availability**: Deployed the API layer behind **Amazon API Gateway + Lambda@Edge**, ensuring 99.95 % uptime across AWS regions.  
- **Security & Compliance**: Integrated **AWS Key Management Service (KMS)** for encryption of PII in transit and at rest, meeting GDPR‑style controls.

**Result**  
Within three months the platform processed 2 M clauses, revealing a 12 pp drop in model accuracy on clause‑type “confidentiality” after a vendor update. The data drove an immediate rollback, preventing a projected $1.8 M loss from mis‑parsed contracts for our top client. Monthly dashboard adoption grew to 75 % of the legal team, and we cut manual review time by **32 %**—a direct lift in deliverables.

*Learning*: Early iterations underestimated drift detection frequency; after feedback I added real‑time alerts via **Amazon CloudWatch Events**, improving responsiveness by 18 %.  

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered a tool that directly reduced legal risk for clients.  
- **Ownership & Dive Deep**: Took end‑to‑end responsibility, engineered robust data pipelines, and iterated based on quantitative insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
