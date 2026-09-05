---
qid: ing_21772a09ec__eli5__local
question: What about initial and ongoing costs? — Use vertical partitioning to scale
  data efficiently in Amazon DynamoDB | AWS Database Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 301
total_tokens: 473
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:29:44-05:00'
sources: []
---

Imagine your data is a big library with many shelves (tables). **Vertical partitioning** is like splitting the library into separate rooms for each subject: one room holds only the book titles and authors, another holds only the pages and chapters. When you need a title, you walk straight to that room; when you need a page, you go to the other room—no wasteful searching.

**Initial costs** are the money you spend setting up these rooms: you pay for the storage space (bytes) you reserve in each room and for the number of read/write “tokens” (write capacity units, WCU; read capacity units, RCUs) that let your applications access them. If you start small—just a few books—you’ll pay less.

**Ongoing costs** are like paying rent for each room every month. As more books arrive or people read faster, you may need to add more tokens (scale up). DynamoDB charges per token per hour, plus the storage price (per GB). Because each room holds only what it needs, you usually use fewer tokens than if all data lived together, so your monthly bill stays lower.

So, start with a modest setup, monitor usage, and adjust tokens as traffic grows—just like adding more shelves or staff to keep the library running smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
