---
qid: ing_5f28af9110__eli5__local
question: 'Was DynamoDB the right choice? — From Zero to 50 Million Uploads per Day:
  Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 290
total_tokens: 465
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:07:25-05:00'
sources: []
---

Imagine your photo library is a giant library that keeps growing every day.  
You need a way to store each picture’s “label” (who uploaded it, when, where) and then find it instantly, no matter how many books you add.  

**DynamoDB** is like a super‑fast index in that library:  
- **NoSQL database** – it stores data as simple key/value pairs instead of rigid tables, so adding new fields (e.g., tags or geolocation) is painless.  
- **Scalable throughput** – you can tell it to handle thousands of “check‑outs” per second; if traffic spikes, you simply bump the capacity up in seconds, not months.  
- **Managed service** – Amazon runs the hardware, backups and patches for you, so your team can focus on building features.

Canva’s upload system grew from a few thousand to 50 million pictures a day. With DynamoDB they could keep each picture’s metadata available instantly while letting the storage grow horizontally—exactly what a library needs when it suddenly receives millions of new books overnight.  

So yes, for Canva’s use case—high‑volume, real‑time access with minimal operational overhead—DynamoDB was a good fit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
