---
qid: ing_c6e27a804d__aws__local
question: 'Explain: Recursive Task Decomposition — Planning And Decomposition'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 405
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:52:23-05:00'
sources: []
---

**Situation & Task**  
I led the launch of a generative‑AI platform for a media client that had to auto‑create episode outlines, scripts, and subtitles in real time. The requirement was a recursive task decomposition engine: high‑level narrative → scenes → shots → dialogues → subtitling.

**Action – Technical Design**  
1. **Recursive Decomposition Service** – A stateless Lambda chain orchestrated by Step Functions; each node (outline, scene, etc.) spawns child workflows.  
2. **Data Store** – DynamoDB tables per level with TTL for cache invalidation; Global Tables enabled multi‑region reads (99.999% availability).  
3. **AI Inference** – SageMaker endpoints hosted on GPU instances (p3.8xlarge) for GPT‑4 fine‑tuned models, auto‑scaling via SageMaker Pipelines.  
4. **Cost Control** – Spot instances + Lambda concurrency limits; used AWS Budgets to cap monthly spend at $12k.  

**Result**  
- Reduced end‑to‑end generation time from 8 min to 1.5 min (≈80% faster).  
- Cut compute cost by 35% while maintaining >99.9% SLA for live broadcasts.  
- Received 98% positive feedback from editors on script quality, a 40% increase in daily content output.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered a tool that cut editors’ turnaround time dramatically.  
- **Ownership & Dive Deep**: Built the entire recursive pipeline, debugged latency hotspots, and tuned cost metrics.  

*Bar‑raiser cue*: I quantified performance gains, iterated on architecture after failure (initial Lambda timeout), and documented lessons for future AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
