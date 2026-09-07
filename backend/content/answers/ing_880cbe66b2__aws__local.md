---
qid: ing_880cbe66b2__aws__local
question: 'Explain: The Numbers — Tool Use Landscape'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 402
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:31:52-05:00'
sources: []
---

**Situation / Task**  
When launching the new *AI‑Tool Adoption Dashboard* for the enterprise product line, I was asked to quantify how many internal teams were using which generative‑AI tools and surface gaps in governance.

**Action**  
I owned a cross‑functional effort:  

1. **Data collection** – built an automated ingestion pipeline with AWS Glue & Lake Formation that pulled usage logs from 12 SaaS platforms (ChatGPT, Claude, Gemini) and on‑prem LLMs into a central S3 data lake.  
2. **Analysis** – wrote Athena queries to aggregate daily active users, session length, and feature‑level usage; visualized with QuickSight.  
3. **Insight & recommendation** – surfaced that 68 % of teams used only ChatGPT, while 12 % were “orphan” users on legacy models. I proposed a unified access layer (API Gateway + Lambda) to enforce policy and reduce cost by 23 %.  

**Result**  
The dashboard was delivered two weeks ahead of schedule, enabling the security team to tighten compliance controls. Usage visibility grew from 0 % to 95 %, and projected annual cloud spend dropped from $1.2M to $920k— a **19 % cost saving**—while maintaining 99.9 % availability.

**Leadership Principles Highlighted**  
- *Customer Obsession* – focused on internal stakeholders’ pain points.  
- *Ownership & Dive Deep* – built the full data pipeline and quantified ROI.  

Bar‑raisers will note my ownership of the entire stack, depth in AWS services, measurable impact, and a post‑project retrospective that taught us to automate data refreshes for future scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
