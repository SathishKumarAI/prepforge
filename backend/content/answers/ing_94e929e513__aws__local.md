---
qid: ing_94e929e513__aws__local
question: 'Solutions-architect scenario: a customer''s LLM chatbot on 8 GPUs is "too
  slow and too expensive." You have one week with them. What do you do?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 425
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:02:33-05:00'
sources: []
---

**Situation & Task**  
A mid‑size fintech had deployed an LLM chatbot on 8 NVIDIA A100 GPUs in a custom EC2 cluster. Latency averaged **1.4 s per user query** and monthly cost hit **$45k**, exceeding the $30k budget they’d set for Q3. I was brought in with one week to turn this around.

**Action**  
*Owned* the problem by mapping the entire request‑to‑response path (SageMaker endpoint → GPU inference → RDS response).  
1. **Model Ops** – moved the model to Amazon SageMaker Neo, enabling 8× quantization and 4× speed‑up while keeping <2 % loss in perplexity.  
2. **Infrastructure** – switched from on‑demand A100s to **g5.12xlarge spot instances** (GPU‑optimized) with an auto‑scaling group tied to request latency.  
3. **Caching** – added a Redis cache layer for the top 30% of frequently asked questions, cutting inference calls by 45%.  
4. **Cost monitoring** – set up Cost Explorer alerts and daily CloudWatch dashboards to keep spend under $28k/month.

**Result**  
- Latency dropped from **1.4 s → 0.3 s** (5× faster).  
- Monthly cost fell from **$45k → $22k** (51% savings).  
- SLA adherence improved from 78% to 99%.  

**Learnings**  
I learned that *Bias for Action* paired with *Dive Deep* into model & infra metrics can unlock huge gains. I’ll apply the same rapid, data‑driven optimization cycle to future LLM deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
