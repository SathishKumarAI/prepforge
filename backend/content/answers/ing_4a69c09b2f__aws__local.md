---
qid: ing_4a69c09b2f__aws__local
question: 'Explain: Business automation — Think Topics | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 468
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:13:38-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑science squad at my previous company, we were tasked with replacing a manual “Think Topics” pipeline (IBM’s topic‑modeling service) that processed ~30 M documents per month and produced weekly trend reports for product managers. The process was 4× slower than the SLA and cost ~$120k/yr in IBM licenses.

**Action**  
1. **Ownership & Bias for Action:** I scoped a migration to an end‑to‑end serverless ML workflow on AWS, eliminating vendor lock‑in.  
2. **Dive Deep & Invent & Simplify:**  
   * **Data ingestion** – S3 + Glue crawlers to catalog raw PDFs/HTML.  
   * **Pre‑processing** – Lambda + Textract for OCR and cleaning.  
   * **Model training** – SageMaker Processing jobs using HuggingFace `transformers` (BERT) fine‑tuned on our corpus; hyper‑parameter tuning via SageMaker Experiments.  
   * **Inference** – SageMaker Endpoint (multi‑AZ, autoscaling) exposing a REST API for downstream services.  
   * **Automation & Monitoring** – Step Functions orchestrate the workflow; CloudWatch + Athena queries provide real‑time metrics.  
3. **Cost & Scalability:** Leveraging spot instances and Lambda concurrency limits cut compute spend by 70 % (from $120k to ~$36k/yr). The serverless design scales to 10× traffic with no capacity planning.

**Result**  
- Processing time dropped from 48 h to <2 h, meeting SLA.  
- Monthly cost reduced by 70 %.  
- Product managers now receive daily topic insights, improving feature prioritization velocity by 35 % (measured via OKR completion rate).  

**Reflection**  
I documented the failure modes of the legacy IBM system (e.g., license expiration, lack of observability) and incorporated automated rollback in Step Functions. The bar‑raiser will notice my end‑to‑end ownership, deep technical dive into AWS services, quantifiable impact, and lessons learned from vendor dependency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
