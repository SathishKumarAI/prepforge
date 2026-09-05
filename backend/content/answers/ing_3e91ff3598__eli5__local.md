---
qid: ing_3e91ff3598__eli5__local
question: Build RAG over a customer's documents where access control is row- and document-level.
  How do you guarantee a user never sees restricted content in an answer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 327
total_tokens: 505
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:15:14-05:00'
sources: []
---

Imagine your customer’s documents are like a library of books, each book (document) having a few pages (rows).  
You want a robot librarian that can pull out the right page when asked, but it must never hand a reader a page they’re not allowed to see.

**Step 1 – Lock the shelves.**  
Before the robot looks at any book, you give it a *permission key* that tells it exactly which books and which pages it may touch. Think of this as a master list that says “you can read book A, page 3‑10; book B, page 1‑5; no other pages.”  
The robot refuses to open any page outside that list.

**Step 2 – Teach the robot to ask for help only when it’s sure.**  
When a user asks a question, the robot first checks its key: if the answer would need a restricted page, it says “I’m sorry, I don’t have that information.” It never tries to sneak around the lock.

**Step 3 – Keep the keys safe.**  
The permission list is stored in a secure place and only given to the robot’s *session* (the user’s current interaction). If someone else gets hold of it, they can’t ask the robot for the forbidden pages because the key isn’t there.

With these three simple rules—lock shelves, check before pulling, keep keys safe—the robot will never reveal a page a user isn’t allowed to see.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
