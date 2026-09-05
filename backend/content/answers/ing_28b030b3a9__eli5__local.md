---
qid: ing_28b030b3a9__eli5__local
question: 'Explain: override and delete one at position in — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 282
total_tokens: 456
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:40:09-05:00'
sources: []
---

Imagine a long sentence written on a whiteboard that several friends can edit at the same time.  
Each friend writes a new word or erases an existing one by pointing to a **position** on the board – the place between two letters or words.

* **Override** means “replace” – you pick a spot and write a different letter there, wiping what was already there.  
  In a document, if two people type at the same position, the system decides whose text stays (often the one that arrived first) and replaces the other’s character with its own.

* **Delete** means “erase” – you point to a spot and remove the letter or word that is currently there, leaving nothing in its place.  
  If two people delete at the same position, the result is simply an empty space; if one deletes while another types, the system must reconcile by keeping the new character and discarding the erase.

Operational Transformation (OT) keeps a list of these *operations* (override or delete with a position).  
When changes arrive from different users, OT reorders and adjusts them so that every copy of the document ends up exactly the same—just like all friends eventually see the same final sentence on the whiteboard, no matter who wrote what first.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
