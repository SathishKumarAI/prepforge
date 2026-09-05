---
qid: ing_5e496c7c60__eli5__local
question: How do you build a golden evaluation set for RAG without months of labelling?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 248
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:05:50-05:00'
sources: []
---

Imagine you’re teaching a student to write essays using a library. Instead of having the teacher read every single book and hand‑write perfect answers, you give the student a “cheat sheet” that lists the best paragraphs for each topic—just enough examples so they can learn what good looks like.

For RAG, build this cheat sheet by:

1. **Collect a small, high‑quality pool** – grab a few dozen passages that are truly relevant to your domain (e.g., medical FAQs).  
2. **Use expert crowdworkers for quick checks** – ask them to mark whether each passage answers the question; they can do this in minutes per item.  
3. **Apply a simple quality filter** – keep only those passages with 80 %+ agreement, discarding ambiguous ones.  
4. **Create pairs** – link each question to its top‑scoring passages.

The result is a compact “golden evaluation set” that lets you test RAG models fast and reliably, without months of hand‑labeling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
