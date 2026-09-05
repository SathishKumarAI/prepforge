---
qid: ing_1800f2eeac__eli5__local
question: 'Explain: Time-Based Data — Time-Based Data | Elasticsearch: The Definitive
  Guide [2.x] | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 259
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:13:40-05:00'
sources: []
---

Imagine a library that keeps every book you ever read, but instead of sorting them by author or title, it arranges them by the exact date and time you finished reading each one. In this “time‑based” library, new books are always added to the end, and older books can be quickly found by looking at their timestamps.

In Elasticsearch, a **time-based index** works the same way. A *timestamp* is simply a moment in time (e.g., 2024‑09‑05T12:00:00Z). When you store data that naturally grows over time—like logs, metrics, or social media posts—you create an index whose name includes the date, such as `logs-2024.09`. Each new day gets a fresh index, so queries for recent data hit only today’s tiny index instead of scanning a huge pile.

This strategy keeps searches fast and writes efficient: adding a new log entry is just inserting into the current daily index, while older indices can be archived or deleted without affecting performance. It’s like a never‑ending bookshelf that stays organized by when each book was added.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
