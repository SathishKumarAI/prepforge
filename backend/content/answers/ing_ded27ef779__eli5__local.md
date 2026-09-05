---
qid: ing_ded27ef779__eli5__local
question: 'Explain: Layer 2: Data Link — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 229
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:27:34-05:00'
sources: []
---

Think of a library where books are the data packets you want to move from one shelf to another.  
The **Data Link layer (Layer 2)** is like the librarian who checks that each book is on the right shelf and that no two books collide while moving them.

* **MAC address** – the unique “library card” a device holds so the librarian knows which shelf belongs to whom.  
* **Frames** – the wrapped books; they contain the data plus a header (who it’s for, who sent it) and a trailer (a checksum that detects damage).  
* **Error checking** – the librarian reads the checksum before handing the book over, making sure no pages are missing or shuffled.  
* **Flow control** – if one shelf is full, the librarian tells the sender to pause until space frees up.

So Layer 2 guarantees that every piece of data arrives intact and in order, just as a careful librarian ensures each book reaches its destination safely.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
