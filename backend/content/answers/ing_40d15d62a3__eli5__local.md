---
qid: ing_40d15d62a3__eli5__local
question: 'Explain: Uploading test data — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 202
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:18:54-05:00'
sources: []
---

Think of the AI model as a student who has just finished studying and you want to see how well they did on a set of exam questions.  
**Uploading test data** is like handing that student a new test sheet with hidden answers that only the teacher (you) knows. You send the sheet—called “evals”—to the OpenAI API, and the model reads each question, writes an answer, and returns it to you.  

The API then checks each answer against the correct one you supplied. It counts how many are right, gives a score, and tells you where the model struggled.  
In short: you upload a batch of “question–answer” pairs, let the model try them out, and the system evaluates its performance automatically—just like grading an exam in bulk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
