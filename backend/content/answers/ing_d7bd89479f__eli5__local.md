---
qid: ing_d7bd89479f__eli5__local
question: 'Explain: 4.4 Media Storage — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 259
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:16:27-05:00'
sources: []
---

Think of Instagram’s photo‑storage system like a giant, well‑organized library that holds millions of books (pictures and videos).  
When you upload an image, it first goes into a *“bookcase”* called a **Content Delivery Network (CDN)**—a fast, global cache so people can view your post instantly. The original file is then copied to a secure, durable **object storage** (think of a vault that keeps the exact copy safe forever).  
Because every picture has many sizes (thumbnail, medium, high‑res), we run an *image‑processing service* that cuts the book into smaller sections and stores each one in its own “shelf” inside the vault.  
When someone scrolls through Instagram, the app asks the CDN for the right shelf; if it’s missing, the system pulls the file from the vault, creates the needed size on the fly, saves it back to the vault, and serves it—just like a librarian finding a copy in the vault, printing it quickly, and handing it to you.  
This layered approach keeps storage cheap, reliable, and fast for millions of users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
