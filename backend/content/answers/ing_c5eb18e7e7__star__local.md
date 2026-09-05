---
qid: ing_c5eb18e7e7__star__local
question: How do you decide when to stop prompt engineering and fine-tune instead?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 311
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:05:47-05:00'
sources: []
---

**Situation:** In a recent project building an internal chatbot for our sales team, the initial prompts were producing relevant answers 68% of the time, but we needed consistent accuracy for compliance questions.

**Task:** I had to decide whether to keep tweaking prompts or move to fine‑tuning the model so that it would reliably handle regulatory queries without human oversight.

**Action:** First, I ran a prompt‑engineering sprint: iterated over 12 different phrasings, added context tokens, and used few‑shot examples. Performance plateaued at 72% accuracy after three rounds. Next, I gathered a curated dataset of 4,500 compliance Q&A pairs, balanced across product lines. Using the OpenAI Fine‑Tune API, I trained a custom model for two epochs with a learning rate of 3e-5, monitoring loss on a validation split. Parallelly, I set up A/B tests comparing the fine‑tuned model against the best prompt version.

**Result:** The fine‑tuned model achieved 92% accuracy on our compliance test set, a 20 percentage point lift over prompts alone. Deployment reduced support tickets by 35%, and we cut manual review time from 2 hours to 15 minutes per week. I learned that when prompt tweaks no longer yield measurable gains, it’s efficient to invest in fine‑tuning—especially for domain‑specific, high‑stakes content.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
