---
qid: ing_d90404079b__eli5__local
question: 'Explain: Versioning — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 215
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:18:22-05:00'
sources: []
---

Think of a library that lends out books (the **server**) to many readers (the **clients**).  
In a “versioning” system each book has an edition number—1st, 2nd, 3rd—so everyone knows exactly which copy they’re reading.  
When a new edition arrives, the librarian updates the catalog but keeps the old copies on hand for people who still prefer them. Readers can request any edition by its number; the server delivers that exact version without mixing in newer changes.

**Versioning** is this practice of labeling every data release (or model) with a clear identifier so clients always get the right one.  
**Client‑Server Architecture** simply means the readers (clients) ask a central place (server) for information, rather than each reader storing all books themselves.  

Together, they let many users safely access stable, labeled models while the system evolves behind the scenes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
