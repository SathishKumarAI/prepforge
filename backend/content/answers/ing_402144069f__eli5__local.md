---
qid: ing_402144069f__eli5__local
question: 'Explain: High-Level Architecture — Content Moderation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 265
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:17:36-05:00'
sources: []
---

Think of a big library that receives millions of books every day.  
The **high‑level architecture** for content moderation is like the system the librarian uses to keep only good books on the shelves.

1. **Front desk (Ingestion layer)** – Every book (user post) comes in here first. The librarian checks it’s not a duplicate and gives it a quick label (“new”, “review needed”).

2. **Sorting room (Filtering layer)** – A team of workers looks for obvious problems: banned words, hate symbols, or illegal images. Those that fail this check are sent to the **black‑list**.

3. **Review desk (Human review layer)** – Books that slip past the first pass but still look suspicious go here. Experienced reviewers decide if they’re truly safe.

4. **Final shelf (Publication layer)** – Only books that clear all checks are placed on the public shelves for everyone to read.

This flow—automatic filtering followed by human judgment—keeps the library safe and welcoming, just as an AI‑driven moderation system protects online communities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
