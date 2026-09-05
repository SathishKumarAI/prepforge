---
qid: ing_d2d0111802__eli5__local
question: 'Explain: Amazon API Gateway — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 194
total_tokens: 358
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:09:08-05:00'
sources: []
---

Imagine you run a café that only opens when customers order coffee. You don’t need to keep the kitchen busy all day; you just have a barista ready whenever someone taps “Order” on a tablet.  
Amazon API Gateway is like that smart tablet for your web services. It receives requests (the “orders”) from users or apps, forwards them to the right AWS backend—such as a Lambda function, which runs your code without needing any servers—and then returns the answer.  

**Serverless computing** means you don’t provision or manage physical machines; AWS starts and stops tiny compute units automatically.  
So API Gateway + Lambda lets you build APIs that scale instantly, pay only for actual requests, and keep your focus on business logic rather than infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
