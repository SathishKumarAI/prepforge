---
qid: vq_f33ccc4256__aws__local
question: How do you define Rack awareness in hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 353
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:22:23-05:00'
sources: []
---

**Answer (Amazon Style)**  

> **Leadership Principles:** *Ownership*, *Dive Deep*  
>   
> **Situation & Task** – At my previous role I led a migration of an on‑prem Hadoop cluster to Amazon EMR for a data‑science team that processed 2 TB/day. The team reported frequent task failures due to rack‑level node outages, which hurt SLA compliance by ~35%.  
>   
> **Action** – I introduced *Rack Awareness* in the YARN scheduler:  
> 1. Annotated each EC2 instance with a `rack_id` tag (e.g., `rack‑usw2a`).  
> 2. Configured EMR’s `yarn.scheduler.capacity.rack-affinity.enabled=true`.  
> 3. Added a custom ResourceManager plugin that prefers nodes in the same rack for data locality, falling back to cross‑rack only when necessary.  
>   
> **Result** – Post‑implementation, node failure impact dropped from 35% to <5%, and job completion time decreased by 18%. Cost stayed within budget because we leveraged spot instances on the same racks (avoiding cross‑region traffic). The solution is fully automated in Terraform, ensuring repeatability for future clusters.  
>   
> **Learnings** – I learned that *rack awareness* is not just a flag; it requires consistent tagging, scheduler tuning, and monitoring of rack health via CloudWatch metrics. This deep dive enabled the team to own their pipeline reliability and scale confidently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
