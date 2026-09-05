---
qid: ing_1b8156fa46__star__local
question: 'Explain: The guides — Role Guides'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 366
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:24:19-05:00'
sources: []
---

**Situation** – In my last role as a product manager for an enterprise chatbot, we were tasked with expanding the bot’s domain from customer support to onboarding new hires. The existing model was fine‑tuned on general QA data, but it struggled with company‑specific policies and terminology.

**Task** – I had to design a system that would allow our team of content writers and legal reviewers to create “Role Guides” for each persona the bot could assume (e.g., HR recruiter, IT helpdesk). These guides needed to be easy to author, versioned, and directly feed into the fine‑tuning pipeline without requiring data science intervention.

**Action** – I spearheaded a lightweight JSON schema where writers could define:
1. **Persona traits** (tone, formality level)  
2. **Domain knowledge chunks** (policy excerpts, FAQ tables)  
3. **Response templates** with placeholders for dynamic data.  

We integrated the schema into our internal CMS and built an automated script that extracted the JSON, converted it to a prompt‑engineering format, and triggered a scheduled fine‑tuning job on Hugging Face’s hosted API. I also set up CI checks to validate that each guide met quality thresholds (e.g., no duplicate policy references).

**Result** – Within two sprints we rolled out five new role guides. The bot’s first‑contact resolution rate for onboarding queries jumped from 58 % to 84 %, and average response time dropped by 30 %. I learned that giving domain experts a structured, low‑friction way to inject knowledge dramatically shortens the AI development cycle and improves user trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
