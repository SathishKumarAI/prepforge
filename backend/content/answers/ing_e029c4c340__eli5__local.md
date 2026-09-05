---
qid: ing_e029c4c340__eli5__local
question: 'Explain: Post Service — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 290
total_tokens: 453
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:30:36-05:00'
sources: []
---

**Imagine a giant photo‑sharing library that lives on the cloud.**  
When you tap *Post* on Instagram, your picture and caption travel through three main steps:

1. **Upload & Store** – The photo is first sent to a fast “upload server” that checks its size, turns it into a few thumbnail versions, then hands it over to a storage bucket (think of it as a massive digital filing cabinet).  
2. **Metadata Service** – A small database keeps the story of the post: who posted it, when, what tags, and where in the file cabinet it lives.  
3. **Feed Engine** – When friends open Instagram, this engine pulls the newest posts from the metadata database, orders them by time or relevance, and streams just those images back to each user’s screen.

*Key terms*:  
- **Bucket**: a cloud storage area that holds files (photos).  
- **Metadata**: information about a photo (author, timestamp, tags) stored in a database.  
- **Feed Engine**: the part of the system that decides which posts show up for each user and when.

This simple flow lets millions of users post, store, and view photos quickly, just like a well‑organized digital library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
