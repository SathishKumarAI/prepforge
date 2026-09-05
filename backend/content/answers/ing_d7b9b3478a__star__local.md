---
qid: ing_d7b9b3478a__star__local
question: 'Explain: When would you decompose a task into multiple prompts instead
  of one? Explain least-to-most prompting.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 347
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:40:13-05:00'
sources: []
---

**Situation** – At my previous startup we were building an internal chatbot to triage support tickets. The bot needed to first classify the ticket type, then extract key details, and finally generate a response. Running everything in one long prompt caused slow inference times and frequent mis‑classifications because the model got overwhelmed by multiple objectives.

**Task** – I had to redesign the workflow so that each step was handled efficiently while still producing coherent end‑to‑end answers for users.

**Action** – I decomposed the task into three separate prompts, feeding the output of one as context to the next. First, a prompt asked “What category does this ticket belong to?” and returned a short label. Second, with that label added to the prompt, I asked “Extract the critical fields for a {category} ticket.” Third, using both the category and extracted fields, I prompted the model to “Draft a concise response.” This is least‑to‑most prompting: we start with the simplest sub‑task (least information) and progressively add context so each subsequent prompt has only what it needs. I used OpenAI’s API with temperature set low for classification and higher for drafting, and cached intermediate results to reduce latency.

**Result** – Inference time dropped from ~1.2 s per ticket to under 0.5 s, accuracy of category detection improved by 18%, and user satisfaction scores rose from 4.2 to 4.7/5. I learned that breaking complex queries into a chain of specialized prompts not only speeds up processing but also makes debugging and fine‑tuning far easier.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
