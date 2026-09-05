---
qid: ing_25099e8fb7__star__local
question: 'Explain: Automatic Prompt Design — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 367
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:43:04-05:00'
sources: []
---

**Situation:**  
During my senior thesis at university we were building a conversational AI for a local museum that could answer visitors’ questions about exhibits. The user‑feedback loop was slow because each new exhibit required us to hand‑craft dozens of prompts, and the QA team complained that our prompt library was growing out of control.

**Task:**  
I had to automate the generation of effective prompts so we could scale to 200+ exhibits while keeping response quality above a 4.2/5 user satisfaction score.

**Action:**  
I implemented an automatic prompt‑design pipeline using OpenAI’s GPT‑4 and our own curated “prompt templates.” First, I built a data‑pipeline that extracted exhibit metadata (title, artist, period) from the museum’s CMS into JSON. Then I wrote a Python script that fed this JSON into a fine‑tuned GPT‑3.5 model to produce multiple prompt variants per exhibit. Next, I integrated a reinforcement learning loop: each prompt was tested against a small human‑annotated validation set, and the best performing prompts were logged back into our prompt repository. Finally, I added an A/B testing framework in Flask so new prompts could be rolled out gradually.

**Result:**  
Prompt generation time dropped from 2 days per exhibit to under 30 minutes, allowing us to cover all exhibits within a month. User satisfaction rose to 4.6/5, and the prompt library grew by 350% without increasing manual effort. I learned that coupling NLP models with automated pipelines can turn a tedious engineering chore into a scalable system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
