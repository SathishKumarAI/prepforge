---
qid: ing_d0ea46ed57__star__local
question: 'Explain: The Anatomy of a Few-Shot Example — Few Shot And Icl'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 328
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:27:21-05:00'
sources: []
---

**Situation:**  
When I joined the NLP team at a fintech startup, our product needed a sentiment‑analysis model that could adapt quickly to new regulatory language without costly retraining. The existing pipeline was slow and required weeks of labeled data.

**Task:**  
I had to demonstrate how few‑shot learning with in‑context prompting could let us build a high‑accuracy classifier using only a handful of examples, cutting deployment time from 4 weeks to days.

**Action:**  
First, I selected an open‑source LLM (GPT‑3.5) and crafted a prompt template that included two labeled examples followed by the new sentence. Using the OpenAI API’s `completions` endpoint, I iterated on token limits and temperature settings to balance precision and speed. I then automated the process in Python with `openai.ChatCompletion`, passing the few‑shot context as part of each request. Finally, I evaluated the model against a held‑out test set, comparing its F1 score to our baseline fine‑tuned BERT model.

**Result:**  
The few‑shot approach achieved an 88 % F1—only 4 points below the fine‑tuned model—while reducing inference time by 70 % and eliminating the need for a separate training phase. I learned that carefully curated prompts can unlock powerful AI capabilities, and this technique became our standard for rapid feature rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
