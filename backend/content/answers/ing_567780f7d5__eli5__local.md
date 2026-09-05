---
qid: ing_567780f7d5__eli5__local
question: 'Explain: Availability patterns — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 252
total_tokens: 446
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:53:54-05:00'
sources: []
---

Imagine you’re running a huge library that must always be open, even when a power outage or a flood hits. In computing, “availability” means the system can keep serving requests no matter what hiccups happen.

**Concrete analogy:**  
Think of a library with several copies of every book (replicas). If one shelf gets flooded (a node fails), patrons still find their books on another shelf. To make sure they’re always there, the library keeps a backup copy in a safe room that can be moved out quickly (data replication). When a reader asks for a book, the system first checks the local shelves; if none are available, it fetches from the backup. This way, no single failure stops service.

**Key terms:**  
- **Replica:** A copy of data on another server.  
- **Partition tolerance:** The system keeps working even when parts can’t talk to each other (network split).  

By combining many replicas and a graceful fallback plan, systems achieve high availability—always ready to answer questions, just like that library never closes its doors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
