---
qid: ing_9466c6f02f__aws__local
question: 'Explain: GPU Requirements by Model Size — Pricing And Costs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 444
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:01:35-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a team to launch an on‑prem AI service that needed to support inference for models ranging from 10 M to 1 B parameters while staying under a $500/day spend.  

**Action**  
I performed a *dive deep* cost model:  
- **GPU sizing:** 10–50 M → T4 (0.5 GB VRAM), 200–500 M → V100 (16 GB), >1 B → A100 (40 GB).  
- **Pricing strategy:** Use SageMaker’s managed spot GPU instances for batch inference, reserving on‑demand GPUs only for latency‑critical traffic.  
- **Scaling & availability:** Auto‑scaling groups with Spot Fleet + On‑Demand fallback; multi‑AZ to avoid single points of failure.  
- **Cost control:** Implemented a cost‑alert pipeline (CloudWatch → SNS) that throttles model loading when spend >$450/day, ensuring *customer obsession* by preventing service outages.

**Result**  
We reduced inference cost from $1,200/day to $480/day (60 % savings) while maintaining <50 ms latency for 95 % of requests. The model‑size matrix was shared across the org, becoming a reference for future projects.  

**Learning & Bar‑raiser cues**  
- Ownership: I owned the end‑to‑end cost model and documented it in Confluence.  
- Dive Deep: Detailed GPU memory calculations and spot‑price volatility analysis.  
- Quantified Impact: 60 % spend reduction, <50 ms latency.  
- Failures: Early trials over‑provisioned GPUs; we iterated until the sizing matched actual VRAM usage, learning to validate assumptions with real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
