---
qid: vq_fb71f884f8__star__local
question: Types of Prompt Engineering ?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 355
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:27:56-05:00'
sources: []
---

**Situation** – At my previous company we launched a conversational AI that was meant to triage customer support tickets. Early user testing showed the bot’s responses were too generic and often missed key intent, leading to a 35 % drop in first‑contact resolution.

**Task** – I was tasked with redesigning our prompt strategy so the model could reliably identify ticket categories and suggest appropriate solutions, all while keeping latency under 800 ms on our GPU cluster.

**Action** – I applied three main types of prompt engineering:  
1. *Template prompts* that structured input as “Ticket: {description}\nIntent:” to anchor the model’s output.  
2. *Few‑shot prompting* where I inserted 3–4 labeled examples directly in the prompt, showing the mapping from description to intent tags.  
3. *Chain‑of‑thought prompting* for complex tickets; the model first listed relevant facts before producing a final answer, improving reasoning accuracy. I iterated on token limits and used Hugging Face’s `transformers` pipeline with a quantized 4-bit model to stay within latency constraints.

**Result** – The new prompt set raised first‑contact resolution from 65 % to 92 %, cut average response time by 120 ms, and reduced customer follow‑up tickets by 28 %. I learned that blending template, few‑shot, and chain‑of‑thought techniques can dramatically improve a large‑language‑model’s practical performance when tuned for specific business metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
