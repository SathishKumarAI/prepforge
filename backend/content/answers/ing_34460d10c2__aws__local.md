---
qid: ing_34460d10c2__aws__local
question: 'Explain: It’s a Marathon, Not a Sprint — Frugal Architecture - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 458
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:23:06-05:00'
sources: []
---

**Context & Challenge**  
I was leading the migration of our recommendation engine to AWS when the senior leadership flagged that “ML pipelines should be **frugal** – we can’t afford a 10 % monthly spend on data‑processing services.” The problem: our existing Spark cluster on EC2 was hitting $4,800/month while delivering only 0.5 % improvement in CTR compared to a baseline rule‑based model.

**Action & Design**  
1. **Refactor the pipeline** into an event‑driven microservice architecture using AWS Lambda + Step Functions.  
2. Store raw logs in S3 (object storage, cheap) and trigger Lambda on new prefixes.  
3. Use Amazon SageMaker Neo to compile the trained model for inference on edge devices, reducing per‑request compute from 1 vCPU to 0.25 vCPU.  
4. Cache predictions with Amazon ElastiCache Redis, cutting repeated inference calls by 70%.  
5. Implement cost controls: S3 lifecycle policies (30‑day transition to Glacier), Lambda concurrency limits, and a daily CloudWatch alarm that auto‑scales the SageMaker endpoint down to zero during off‑peak hours.

**Result**  
- **Cost:** $4,800 → **$1,200/month** (75 % reduction).  
- **Performance:** CTR increased from 0.5 % to 2.3 % within 6 weeks.  
- **Latency:** Prediction latency dropped from 350 ms to 90 ms.

**Leadership Principles & Takeaways**  
*Customer Obsession*: We focused on real user metrics (CTR) rather than internal KPIs.  
*Ownership*: I drove the redesign, coordinated cross‑team buy‑in, and set up monitoring for ongoing stewardship.  
*Dive Deep*: The cost analysis revealed that 90 % of spend was idle compute; moving to serverless eliminated waste.  

**What a bar‑raiser looks for** – ownership, depth (why Lambda vs EC2), quantified impact, and learning: the next iteration will add an automated model retraining trigger when drift > 5 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
