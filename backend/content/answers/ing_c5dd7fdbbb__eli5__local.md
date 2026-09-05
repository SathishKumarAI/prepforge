---
qid: ing_c5dd7fdbbb__eli5__local
question: 'Explain: Database Design — How to Ace System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 259
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:49:35-05:00'
sources: []
---

Think of a database as a **library** that must answer questions fast and keep books safe.  
In an interview you’re asked to design this library: how many shelves (tables), what labels (indexes) on each book, and how people move between sections (queries).  

**Tables** are like the library’s rooms; each holds a specific type of book (data).  
**Columns** are the book’s details (title, author, ISBN).  
**Primary keys** are unique barcodes that let you find any book instantly.  
**Indexes** are the quick‑look maps on the shelves—if someone asks for “all books by Tolkien,” an index lets the librarian skip to those spots instead of scanning every shelf.  

You must also decide **normalization** (splitting information so each fact lives in one room, preventing duplicate copies) and **sharding** (dividing a huge library into smaller branches that work together).  

During the interview explain how these choices speed up searches, reduce storage waste, and keep data consistent—just like a well‑organized library keeps readers happy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
