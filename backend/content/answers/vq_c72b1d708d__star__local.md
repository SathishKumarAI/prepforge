---
qid: vq_c72b1d708d__star__local
question: Prompt Engineering ?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 315
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:19:07-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were launching an automated credit‑scoring chatbot that used GPT‑4 to answer user queries about loan eligibility. Early beta tests showed the bot frequently misunderstood eligibility criteria, giving users incorrect advice and causing a 12% drop in conversion rates.

**Task** – I was tasked with redesigning the prompt architecture so the model consistently applied our scoring logic while staying conversational, all within a two‑week sprint to meet the next release deadline.

**Action** – First, I mapped out the core business rules into a structured JSON schema. Then I crafted a multi‑step prompt: (1) a “system” message that defined the bot’s role and constraints, (2) a “user” input template with placeholders for user data, and (3) a “function calling” instruction that forced the model to output eligibility in the predefined JSON format. I used OpenAI’s function‑calling API to validate responses against our rule engine before presenting them to users. I also introduced few‑shot examples showing correct and incorrect reasoning paths, which dramatically reduced hallucinations.

**Result** – After deployment, conversion rates rose from 78% to 92%, a 14‑point lift. The prompt’s error rate dropped below 1%. I learned that embedding business logic directly into the prompt—combined with function calling—creates reliable, auditable AI behavior without sacrificing user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
