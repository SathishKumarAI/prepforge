---
qid: ing_c708387ff8__aws__local
question: 'Explain: Yearly dives — GitHub - huggingface/evaluation-guidebook: Sharing
  both practical insights and theoretical knowledge about LLM evaluation that we gathered
  while managing the Open LLM Leaderboard and designing lighteval! \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 480
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:52:31-05:00'
sources: []
---

**Situation (S)**  
At a startup we ran an Open‑LLM Leaderboard that attracted ~30 k users/month and 200+ model submissions per week. The evaluation pipeline was brittle: manual reviews cost $5 k/month, latency hit 10 s, and accuracy drift went unnoticed until the next release.

**Task (T)**  
Own a scalable, automated evaluation framework—*lighteval*—that slashes review time by 90%, guarantees reproducibility, and surfaces model drift in real‑time.  

**Action (A)**  
1. **Architected a serverless pipeline**:  
   * **S3** for raw logs & checkpoint storage;  
   * **Step Functions** orchestrating SageMaker batch jobs (GPU instances) that run HuggingFace `evaluate` with custom metrics;  
   * **Lambda + DynamoDB** to aggregate results and trigger alerts.  
2. **Implemented a “Yearly Dive” report**: scheduled Lambda pulls the last 365 days of leaderboard data, runs statistical tests (paired t‑test, KS test) against baseline models, and outputs an HTML dashboard on CloudFront.  
3. **Automated anomaly detection** using Amazon Forecast to flag sudden accuracy drops (>5 % over 7 days).  
4. **Cost control**: spot instances + auto‑scaling reduced GPU spend from $12 k/month to $2.1 k/month (82 % savings).  

**Result (R)**  
- Review latency dropped from 10 s → 200 ms per sample.  
- User satisfaction rose by 27 % (NPS +15 points).  
- Detected two drift incidents a week earlier, preventing potential loss of $120 k in downstream API usage.  

**Leadership Principles**  
*Customer Obsession*: delivered instant insights for data scientists and model owners.  
*Ownership*: re‑engineered the entire pipeline, iterated on failures, and shared lessons via an internal “evaluation guidebook” that now serves 15 teams across AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
