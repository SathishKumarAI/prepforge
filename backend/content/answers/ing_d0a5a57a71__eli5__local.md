---
qid: ing_d0a5a57a71__eli5__local
question: 'Explain: Content delivery network — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 224
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:05:53-05:00'
sources: []
---

Imagine you’re baking a pizza and want to serve it everywhere at the same speed. If every customer had to wait for the pizza to travel from your single kitchen, some would get cold or late. A **content delivery network (CDN)** solves this by setting up tiny “pizza kitchens”—called edge servers—in many cities around the world. When someone asks for a webpage, the CDN routes that request to the nearest kitchen so the page loads quickly and reliably.

In large‑scale systems design, you’d use a CDN to cache static files (images, videos, scripts) on these edge servers. If a user requests a file already stored locally, it’s served instantly; if not, the CDN pulls it from your main server, stores a copy, and then delivers it. This keeps traffic low for your origin, reduces latency for users, and scales effortlessly as demand grows—just like having many pizza kitchens keeps every customer happy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
