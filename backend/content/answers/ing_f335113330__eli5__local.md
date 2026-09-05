---
qid: ing_f335113330__eli5__local
question: 'Explain: 6.2 Newsfeed Generation — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 244
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:59:31-05:00'
sources: []
---

Think of a giant library that never stops adding new books (posts). When you open Instagram, the app must pull the most interesting books from shelves that belong to authors you follow and show them on your personal reading list (newsfeed).  
The “reading list” is built by three simple steps:  

1. **Gather candidates** – pick recent posts from everyone you follow; it’s like pulling the newest volumes off each author’s shelf.  
2. **Score them** – give each post a score based on how many people liked or commented (popularity) and how long ago it was posted (recency). This is similar to rating books by popularity and publication date.  
3. **Sort & cache** – order the scored posts from highest to lowest and store this ordered list in fast memory so you can display it instantly, just like a pre‑sorted reading list on your desk.

The system keeps these steps running all the time, refreshing the candidate pool and re‑scoring as new likes arrive, so every time you swipe right the feed feels fresh and relevant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
