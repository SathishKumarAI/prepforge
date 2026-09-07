---
qid: ing_321127e479__aws__local
question: 'Explain: Routing Tables — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 453
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:18:23-05:00'
sources: []
---

**Situation / Task**  
I was leading the redesign of our multi‑region e‑commerce platform in FY24. The existing on‑prem routing tables were causing a 12 % increase in cross‑AZ latency and a 7 % rise in support tickets for “unreachable services” after we migrated to AWS. My goal: build a scalable, fault‑tolerant routing layer that guarantees <1 ms intra‑region latency while keeping costs under $50K/month.

**Action**  
* *Ownership*: I scoped the problem, drafted a 3‑month sprint plan and signed off on budget with finance.  
* *Dive Deep*: Analyzed VPC flow logs (≈ 2 TB/day) to identify hot spots; discovered that legacy static routes were duplicated across dozens of subnets.  
* *Design*:  
  - Adopted **AWS Transit Gateway** as the hub for all inter‑VPC traffic, reducing per‑subnet routing tables from ~300 to <10.  
  - Implemented **Route 53 Resolver** with conditional forwarding to on‑prem DNS for legacy services.  
  - Leveraged **AWS Global Accelerator** for edge‑to‑edge low‑latency paths.  
* *Bias for Action*: Prototyped the new topology in a single region, ran a canary test with 20 % of traffic, and rolled out incrementally across all regions.

**Result**  
- Cross‑AZ latency dropped from **120 ms to 15 ms** (10× improvement).  
- Support tickets for routing issues fell by **65 %**.  
- Monthly cost decreased from $78K to **$45K**, saving $33K/year.  

I documented lessons: keep a single source of truth for routes and automate route propagation with CloudFormation, reducing human error. This project earned the “Customer Obsession” badge at our quarterly leadership review.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
