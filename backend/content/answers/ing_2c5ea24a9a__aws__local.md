---
qid: ing_2c5ea24a9a__aws__local
question: 'Explain: Tools, Resources, and Prompts — Model Context Protocol Explained
  in 3 Levels of Difficulty'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 459
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:05:24-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional AI team at a SaaS startup, we were asked to build an internal “Model Context Protocol” (MCP) that would let developers reuse prompts and resources across GPT‑style models without duplicating data or violating privacy. The goal was to reduce prompt engineering time by 40 % and cut storage costs by 30 %.

**Action**  
I took full ownership:  

1. **Dive Deep into Requirements** – mapped user personas, identified data sensitivity levels, and defined three difficulty tiers (Basic, Intermediate, Advanced).  
2. **Design the MCP Architecture** – used **Amazon S3** for raw prompt assets, **AWS Glue** to catalog metadata, and **Amazon DynamoDB** as a fast lookup table for context rules.  
3. **Implement Prompt Templates** – stored in **S3 Object Tags**; IAM policies enforce access per tier.  
4. **Automation & Cost Control** – deployed a **Lambda** layer that validates prompt size against a quota; unused templates trigger **S3 Lifecycle Policies** to archive after 90 days, saving ~25 % on storage.  
5. **Monitoring & Feedback Loop** – integrated with **Amazon CloudWatch** and **Athena** queries to generate weekly metrics (prompt reuse rate, latency, cost).  

**Result**  
Within two months:  

* Prompt engineering time dropped from 12 hrs/week to 7 hrs/week (+42 %).  
* Storage costs fell by 28 %.  
* Model inference latency improved by 18 % due to streamlined context retrieval.  

**Reflection**  
The bar‑raiser looked for ownership (I led the initiative), depth (detailed AWS service choices and trade‑offs), quantified impact, and learning—after a failed first attempt where we stored prompts in RDS (high cost & latency), I pivoted to S3+DynamoDB. This experience reinforced that **Ownership** + **Dive Deep** drive sustainable, scalable AI solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
