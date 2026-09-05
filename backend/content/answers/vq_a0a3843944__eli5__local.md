---
qid: vq_a0a3843944__eli5__local
question: what is the text inputformat?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 206
total_tokens: 361
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:22:33-05:00'
sources: []
---

**TextInputFormat – the “text‑file reading machine”**

Imagine you have a giant notebook filled with lines of plain writing, and you want a robot that can hand each line to a worker one by one. *TextInputFormat* is that robot for Hadoop: it opens any text file (plain `.txt`, CSV, log files, etc.), reads it line‑by‑line, and gives each line as a single key/value pair to the Map step.  
- **Key** – the byte offset where the line starts in the file (think of it like a page number).  
- **Value** – the entire text of that line.

Because every line is treated independently, you can process large files in parallel without worrying about splitting words or sentences across chunks. It’s the simplest, most common way to feed raw text into a MapReduce job.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
