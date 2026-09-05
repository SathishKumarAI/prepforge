---
qid: ing_cc09720a7b__eli5__local
question: How do images become tokens, and why does image resolution drive inference
  cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 181
total_tokens: 343
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:58:26-05:00'
sources: []
---

Think of an image like a giant picture book that a robot wants to read.  
The robot can’t look at every single pixel; it first cuts the book into small squares—like cutting a quilt into patches—and then turns each patch into a “token,” a simple number that tells the model what that patch looks like.  

Higher‑resolution images mean more pixels, so the robot has to cut the book into many more patches. Each extra patch is another token for the model to process, and every token forces the computer to do additional math—just as adding more words in a sentence makes a human read longer.  
Thus, finer resolution gives richer detail but also multiplies the number of tokens, driving up inference time and memory use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
