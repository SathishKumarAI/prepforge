---
qid: ing_91c6e44dee__eli5__local
question: 'Explain: Stop stuffing the context window. (Newsletter partner).'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 197
total_tokens: 357
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:28:45-05:00'
sources: []
---

**Stop stuffing the context window** means don’t cram too much text into the small “memory box” that a language model can read at once.  
Imagine a teacher’s desk that holds only a handful of books. If you pile 100 books on it, the teacher can’t see any one clearly and will miss key details. A language model works the same way: its *context window* is the limited space (often a few thousand words) where it keeps information while answering a question.  
If you give it more than that—like dumping an entire novel into the box—the model loses track of what’s important, leading to vague or wrong answers. So keep each prompt concise and focused; let the model “look” at only the most relevant part, just as a teacher would pick the right book from a tidy shelf.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
