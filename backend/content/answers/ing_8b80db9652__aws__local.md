---
qid: ing_8b80db9652__aws__local
question: 'Explain: Run experiment with automatic metrics — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 427
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:41:28-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to launch an **automatic evaluation pipeline** for a new LLM that would continuously measure quality against *Langwatch* and *Langfuse* metrics, so the team could ship improvements faster than our 6‑week release cycle.

**Action**  
1. **Design** – built a serverless workflow in **AWS Step Functions**:  
   *Trigger → SageMaker Processing job → Langwatch/Langfuse SDK calls → DynamoDB results → CloudWatch alerts*.  
2. **Data‑driven metrics** – used **CloudWatch Logs Insights** to calculate *Precision@k*, *BLEU*, and *latency* per model version, feeding a KPI dashboard in QuickSight.  
3. **Scalability & Cost** – the SageMaker job auto‑scales on spot instances (≤ $0.02/hr) and caches prompts in **ElastiCache Redis**, cutting compute time by 40%.  
4. **Bias for Action / Ownership** – I added a rollback Lambda that automatically redeploys the last stable model if *Langwatch* confidence drops below 0.78.

**Result**  
- Reduced evaluation latency from 48 h to **2 h**.  
- Achieved a 25 % drop in error rate over two sprints, validated by Langfuse’s “Error Rate” metric (from 12 % → 9 %).  
- Saved $3K/month on compute by leveraging spot and caching.

**Bar‑raiser notes** – The answer shows ownership (owning the pipeline), deep dive into metrics and AWS services, quantified impact (time & cost savings), and a clear learning loop from failure handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
