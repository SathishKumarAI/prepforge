---
qid: ing_693d71494e__eli5__local
question: 'Explain: Serverless on AWS — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 211
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:22:27-05:00'
sources: []
---

Think of a **serverless** app like ordering food from a restaurant instead of cooking it yourself.  
You (the developer) write the recipe – the code that does something useful, such as sending an email or analyzing data. You hand that recipe to AWS, and when someone “orders” it (a user clicks a button or a timer fires), AWS brings out a fresh kitchen (a container or tiny VM), cooks just enough for that request, then cleans up automatically.  

You never pay for the stove when no one is eating, nor do you worry about the fridge staying on.  
In AWS terms: your code runs in **AWS Lambda**; AWS handles scaling, patching, and availability. You simply deploy functions and set triggers (HTTP, S3 events, etc.). The “serverless” name comes from the fact that servers stay hidden – you only pay for the actual time the function runs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
