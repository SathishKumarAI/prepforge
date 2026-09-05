---
qid: ing_a91df5fd0c__eli5__local
question: 'Q: Why do we use NF4 instead of standard Float4 for QLoRA?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 256
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:06:03-05:00'
sources: []
---

**Why NF4 over normal Float4 in QLoRA?**

Think of a library that stores books on shelves.  
A *Float4* book is written in a fancy font: every page uses 32 bits (the whole “float” word) even if most letters are just blank space. It’s easy to read but takes up a lot of shelf space.

An *NF4* book, on the other hand, keeps only the essential letters—just 4 bits per number—by packing them tightly and letting the library guess the missing blanks with a simple rule (quantization). The shelves shrink, so you can store more books in the same room. When someone pulls out an NF4 book, the library’s decoding trick turns those 4‑bit snippets back into usable numbers, just close enough for most reading tasks.

In QLoRA, we compress neural‑network weights to save memory and speed up inference. Using NF4 instead of Float4 means each weight takes only a quarter of the space while still preserving enough precision for good performance. It’s like fitting more useful information into a smaller box without losing the story.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
