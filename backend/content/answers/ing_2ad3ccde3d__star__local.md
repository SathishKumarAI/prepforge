---
qid: ing_2ad3ccde3d__star__local
question: 'Explain: Walk me through your process for systematically improving a prompt
  that''s underperforming.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 330
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:53:41-05:00'
sources: []
---

**Situation** – In my last role as an NLP engineer at a fintech startup, we launched a customer‑service chatbot that relied on GPT‑4 prompts to triage user queries. Within the first week, our ticket resolution time was 35% higher than the SLA and the bot’s accuracy dropped to 68%.  

**Task** – I needed to diagnose why the prompt wasn’t delivering the expected precision, streamline it, and bring resolution time back under 10 minutes while keeping model costs low.

**Action** – First, I logged every user utterance that led to a failure and performed a qualitative audit: many prompts were too generic and mixed intent categories. I re‑engineered the prompt hierarchy into three focused sub‑prompts (intention detection, context extraction, response generation) using few‑shot examples that reflected our most common query types. I added explicit temperature control (0.2) and a “confidence threshold” flag to trigger human handoff when uncertainty exceeded 30%. Then, I A/B tested the revised prompt set against the original for two weeks, collecting metrics on accuracy, latency, and cost per token.

**Result** – The new prompts lifted accuracy to 92%, cut average resolution time from 35 minutes to 8.4 minutes, and reduced token usage by 18%. I also documented a reusable prompt‑tuning playbook that the team now uses for any new feature launch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
