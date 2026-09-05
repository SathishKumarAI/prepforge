---
qid: ing_3b6c1141b7__eli5__local
question: What is the best chunk size for RAG? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 220
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:10:20-05:00'
sources: []
---

Think of a long book as a huge pizza and each “chunk” is one slice you feed into the AI’s memory.  
If the slices are too small (say, a single sentence), the model gets many pieces but has to juggle them all at once—like trying to remember every bite separately. It can miss the overall flavor of the story.  

If the slices are too big (an entire chapter), each one fits comfortably into the model’s “plate,” but you lose fine detail and may overload its limited memory, forcing it to cut some words out.

The sweet spot is usually about **1–2 pages or 500–1000 characters**—enough for context yet small enough that a handful of slices fit in the model’s attention window. This balance lets the AI see the big picture while still recalling key details when answering questions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
