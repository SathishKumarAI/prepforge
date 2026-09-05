---
qid: ing_3b3793bf33__eli5__local
question: 'Explain: correctOffset — Tokenizer (Lucene 7.3.1 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 257
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:10:04-05:00'
sources: []
---

**CorrectOffset in a Lucene tokenizer**

Think of the tokenizer as a chef chopping up a long sentence into bite‑size pieces (tokens).  
While chopping, the chef keeps track of where each piece comes from in the original recipe (the “offset”).  

Sometimes the chef adds or removes punctuation to make the bite easier to eat – for example, turning “well-known” into two tokens: *well* and *known*. The raw offsets still point at the original text positions, but because we removed a hyphen, the second token’s starting spot is now one character later than it would have been if we had kept the hyphen.

`correctOffset` fixes that mismatch. It takes the offset that the tokenizer recorded before any such changes and adjusts it to match the actual position in the original text after the changes. In other words, it “corrects” the starting point of a token so that downstream processes (like highlighting or error reporting) can refer back accurately to the source document.

So, just as a chef updates the label on each bite to reflect where it came from, `correctOffset` updates token positions after text edits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
