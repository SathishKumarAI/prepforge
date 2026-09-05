---
qid: ing_4f17000293__eli5__local
question: 'Explain: What is a CDN? Why should we — What Is A CDN? How Does It Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 251
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:42:28-05:00'
sources: []
---

Imagine you’re hosting a huge library of books on a single shelf in the middle of a city. Every reader who wants a book has to walk all the way there, even if they live on the opposite side of town. A **Content Delivery Network (CDN)** is like turning that one shelf into dozens of mini‑shelves scattered around the city.

**What it is:**  
A CDN is a network of servers placed in many locations (data centers) worldwide. It stores copies of your website’s files—images, videos, code—so users can fetch them from the server nearest to them.

**How it works:**  
When someone visits your site, their request first finds the closest CDN server. That server sends the requested file directly to them. If that copy isn’t there yet, the CDN pulls it from your main server and caches it for future visitors.  

So a CDN shrinks travel distance, speeds up loading times, and reduces strain on your original host—just like having local book copies makes reading faster and easier for everyone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
