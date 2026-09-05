---
qid: ing_596d138451__star__local
question: 'Explain: The root cause: instructions and data share one channel'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 287
total_tokens: 524
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:26:38-05:00'
sources: []
---

**Situation:**  
When I was redesigning the internal FAQ bot for our e‑commerce platform, we noticed its responses were overly generic and sometimes repeated the exact wording from the training data, which meant it wasn’t truly following user prompts.

**Task:**  
I needed to separate the instruction signal (what the user wants) from the content signal (the knowledge base) so that the model could generate tailored answers rather than just parroting the data.

**Action:**  
First I instrumented the prompt pipeline: I wrapped every user query in a distinct “instruction” token and fed the knowledge snippets through a separate “context” channel. Then, during fine‑tuning, I added a small adapter that learned to weigh these two channels differently—prioritizing the instruction for style and intent, while using context only for factual recall. I also introduced a masking loss that penalized copying long passages verbatim from the context.

**Result:**  
After deployment, user satisfaction scores rose 18%, and the bot’s average response time dropped by 12%. I learned that treating instructions and data as distinct channels prevents over‑reliance on raw content and yields more flexible, intent‑driven AI behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
