---
qid: ing_9ff6b52413__eli5__local
question: You have a 200k-token context with instructions and 50 documents. Where
  do you put what, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 218
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:51:08-05:00'
sources: []
---

Think of the model’s memory like a tidy notebook.  
First write the **instructions** at the top—just as you would jot down the “rules for the day.” They’re the most important because they tell the AI what to do and how to behave.  

Below that, add the **50 documents** in order. If one document is too long, break it into smaller pages (chunks) so each stays under the 200‑k‑token limit. Keep them grouped together; this keeps related ideas close, just like keeping all notes on a single topic in one section of your notebook.  

Why? The model reads from top to bottom. It will first see the instructions and then scan the documents for answers. Placing everything in one continuous stream lets it “glance” over all the material without skipping any part, ensuring it can answer correctly while staying within the token budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
