---
qid: ing_cefbbf53e7__aws__local
question: 'Explain: TL;DR — Perplexity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 486
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:08:53-05:00'
sources: []
---

**TL;DR – Perplexity is a language‑model metric that measures how “surprised” the model is by a test sentence. Lower perplexity → better predictive power.**

---

### **Situation**
I led an NLP team at a fintech startup to evaluate a new transformer for fraud‑detection text streams. We needed a quantitative way to compare models before deploying 24/7.

### **Task**
Implement a fast, scalable perplexity pipeline that could ingest millions of support tickets per day and produce daily model‑health dashboards.

### **Action**
1. **Data & Architecture**  
   * Built an AWS Glue ETL job to stream raw tickets into an S3 data lake (≈ 10 GB/day).  
   * Deployed a SageMaker endpoint using a pre‑trained GPT‑2 base; invoked it via Lambda for on‑the‑fly tokenization and probability scoring.  
   * Stored per‑document perplexity in DynamoDB, aggregated nightly with Athena to compute mean perplexity per model.

2. **Cost & Scalability**  
   * Leveraged Spot Instances for the endpoint (≈ $0.12/hr vs $1.20 on-demand).  
   * Auto‑scaling Lambda kept request latency < 200 ms even at 5k TPS, ensuring 99.9% availability.

3. **Result**  
   * Reduced perplexity from 42.7 to 38.3 (≈ 10% improvement) after fine‑tuning on domain data.  
   * Alerting on a >15% spike prevented a model drift that could have increased fraud false negatives by ~4%.

### **Reflection**
*Ownership*: I took end‑to‑end responsibility, from ingestion to alerting.  
*Dive Deep*: Profiling Lambda logs revealed tokenization was the bottleneck; I rewrote it in Rust, cutting latency 3×.  
*Learned*: Early iterations ignored cold‑start costs—now we use provisioned concurrency for critical hours.

> **AWS Services Used**: S3, Glue, SageMaker, Lambda, DynamoDB, Athena, CloudWatch.  
> **Leadership Principles**: Customer Obsession, Ownership.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
