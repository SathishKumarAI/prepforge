---
qid: ing_03f2bd0d74__star__local
question: 'Explain: Test a prompt with your eval — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 343
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:36:36-05:00'
sources: []
---

**Situation** – In my last role as a data scientist for a fintech startup, we were rolling out an AI‑powered customer support chatbot. Early user testing showed that the bot’s responses to “refund request” queries were too vague, hurting satisfaction scores.

**Task** – I had to design a systematic way to evaluate and refine the prompt so that it produced clear, actionable instructions for users while keeping latency under 500 ms.

**Action** – I set up an OpenAI Eval script using the `openai/evals` framework. First, I created a test harness that generated 200 real‑world “refund” prompts from our logs and paired each with a gold standard answer written by senior support staff. Then I built a custom metric: a weighted Jaccard similarity that penalized missing key terms like “deadline,” “verification code,” or “email.” The eval was run against three prompt variants—plain instruction, a few‑shot example set, and a chain‑of‑thought version—to see which yielded the highest score. I iterated the chain‑of‑thought prompt, adding intermediate reasoning steps, until the metric plateaued at 0.87.

**Result** – Deploying the optimized prompt reduced average response time from 650 ms to 470 ms and increased user satisfaction by 18% on refund queries. The exercise taught me that automated evals can surface subtle prompt deficiencies quickly, turning qualitative feedback into quantifiable improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
