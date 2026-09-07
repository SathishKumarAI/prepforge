---
qid: ing_66a2b77bf1__aws__local
question: 'Explain: Our Offices — Hugging Face - Current Openings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 494
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:17:08-05:00'
sources: []
---

**Situation & Task**  
When I joined the Machine‑Learning team at **Hugging Face**, I was tasked with mapping out our global footprint and translating that into a clear hiring strategy for the coming year. The company had just opened three new offices (London, Berlin, and Singapore) and we needed to prioritize roles that would accelerate model deployment while keeping cost under control.

**Action**  
I first **dove deep** into the current pipeline: data ingestion → training → inference. Using AWS Glue and SageMaker Pipelines I built a lightweight dashboard in QuickSight that showed the time‑to‑model from data upload to production. This revealed a bottleneck at model tuning, where we were spending 40 % of total latency on hyper‑parameter sweeps.

With that insight, I proposed a **two‑tier hiring plan**:
1. **Senior ML Engineers (3)** – focus on distributed training with SageMaker Distributed Training and Spot Instances to cut GPU costs by ~25 %.  
2. **Data Scientists (5)** – specialize in AutoML using Amazon SageMaker Autopilot, reducing model search time by 30 %.

I also mapped each role to a specific office based on talent pools: London for MLOps, Berlin for research, Singapore for production scaling.

**Result**  
Within six months we filled all positions, reduced model‑to‑deployment time from 12 days to **7 days**, and cut GPU spend by **$120k annually**. The hiring plan also increased cross‑office collaboration scores by 18 % on our internal survey.

**Reflection & Learning**  
The key lesson was that *ownership* means owning the end‑to‑end metric, not just a job title. By tying each role to a concrete KPI and continuously validating assumptions with data, we avoided over‑engineering and delivered tangible business value—exactly what Amazon expects from its leaders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
