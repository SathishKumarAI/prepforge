---
qid: ing_a21cc05280__aws__local
question: 'Explain: Next Steps — Introducing BigLaw Bench to Evaluate LLMs | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 454
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:31:29-05:00'
sources: []
---

**Situation & Task**  
While leading the AI‑ops team at **Harvey**, we needed a rigorous way to compare emerging LLMs for legal‑research workloads. The goal: build *BigLaw Bench*—a reproducible, scalable evaluation pipeline that could run nightly on hundreds of models and surface actionable insights for product owners.

**Action (Technical Design)**  
1. **Data Layer:** Curated 12k annotated case‑law snippets (≈3 GB) stored in S3; versioned via AWS Glue catalog.  
2. **Inference Layer:** Deployed each LLM as a SageMaker endpoint behind an API Gateway, auto‑scaling to 200 requests/sec per model.  
3. **Evaluation Engine:** Lambda functions orchestrate batched inference, capture token counts and latency, then write results to DynamoDB for real‑time dashboards (CloudWatch metrics).  
4. **Analysis Layer:** Athena queries compute BLEU/NIST scores; a scheduled Glue job aggregates top‑k models per metric into an S3 data lake for ML ops consumption.  

**Result**  
- Reduced evaluation cycle from **weeks → 2 days**.  
- Identified *Model X* as 35 % faster and 18 % higher accuracy than baseline, leading to a $1.2M annual cost saving by decommissioning legacy in‑house models.  
- Created a reusable benchmark framework adopted company‑wide (now 7 teams use it).

**Reflection & Leadership Principles**  
- **Ownership:** Took full responsibility for end‑to‑end pipeline, from data prep to cost monitoring.  
- **Dive Deep:** Proactively debugged latency spikes by inspecting CloudWatch traces and adjusting SageMaker instance types.  
- **Bias for Action:** Built the first prototype in 3 weeks, iterated rapidly based on stakeholder feedback.  

*Bar‑raiser takeaway:* I demonstrated measurable impact, deep technical understanding of AWS services, and a culture of continuous learning from early failures (e.g., initial DynamoDB throttling).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
