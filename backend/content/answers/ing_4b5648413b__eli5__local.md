---
qid: ing_4b5648413b__eli5__local
question: 'Explain: Sources: — tech-prep-jeremy.io/systems-design/topics/cdns.md at
  master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 209
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:36:21-05:00'
sources: []
---

Imagine you’re hosting a blockbuster movie online, and viewers are scattered all over the world. If every person had to stream the film from a single studio in New York, the road would get clogged, and people would see buffering or never finish watching.

A **Content Delivery Network (CDN)** solves this by creating many tiny “movie theaters” (servers) around the globe. When someone asks for your video, the CDN automatically sends it from the nearest theater instead of the original studio.  

**How it works:**  
1. Your site’s files are copied to these edge servers.  
2. The CDN keeps a map of where each server is located.  
3. A user’s request is routed to the closest server by the CDN’s smart traffic‑routing system.

The result? Faster loading, less strain on your main server, and happier viewers everywhere.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
