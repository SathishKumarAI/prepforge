---
qid: ing_f460b921a0__eli5__local
question: 'Explain: 4.3 Search Indexes — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 236
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:01:25-05:00'
sources: []
---

Think of Instagram’s search as a giant library where every photo is a book and the tags (like “sunset”, “cat”) are its subjects. A *search index* is the librarian’s card catalogue that tells you exactly which shelves hold books on each subject, so you don’t have to sweep through the whole library.

**How it works for Instagram**

1. **Index building** – When a user uploads a photo and adds tags, the system writes an entry into a fast lookup table: *tag → list of photo IDs*.  
2. **Query time** – A user types “sunset” in search. The system looks up that tag in the table, instantly pulls the list of relevant photo IDs, then fetches those photos from storage and shows them.

Because the index is tiny compared to all photos, searching is lightning‑quick, just like a librarian pulling out the right books without rummaging through every shelf. This simple “card catalogue” keeps Instagram’s search snappy even with billions of posts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
