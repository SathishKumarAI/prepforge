---
qid: ing_ffe1bd2362__eli5__local
question: 'Explain: 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 487
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:20:07-05:00'
sources: []
---

Imagine you’re a librarian with different shelves for different kinds of books. Each shelf (database type) is built to hold certain stories efficiently.

| Shelf | What it stores | When to use it |
|-------|----------------|----------------|
| **Relational** | Books with clear chapters and tables of facts | Need exact, structured queries – e.g., banks or inventories |
| **NoSQL‑Document** | Recipe cards (JSON) that vary in format | Flexible data that changes shape often – web apps, content sites |
| **Key‑Value** | Index cards where a key gives one value | Fast look‑ups of simple items – caches, session storage |
| **Column‑Family** | Large spreadsheets where many columns are empty for most rows | Wide tables with sparse data – analytics, log storage |
| **Graph** | Books linked by characters and events | Relationships matter – social networks, recommendation engines |
| **Time‑Series** | Diary entries sorted by date | Continuous streams like sensor readings or stock prices |
| **Object‑Store** | Pictures, videos, PDFs stored as blobs | Large unstructured files – media libraries |
| **Search Engine (Full‑Text)** | Index of every word in all books | Quick text search across many documents |
| **In‑Memory** | Books kept on a hot desk for instant access | Real‑time analytics or gaming where speed is critical |
| **Embedded** | Tiny shelf inside another book | Mobile apps that need local data without internet |
| **Distributed Ledger (Blockchain)** | Immutable chain of blocks | Auditable records, cryptocurrencies |
| **Spatial** | Maps with coordinates | GIS, location services |
| **Hierarchical** | Files and folders in a tree | Legacy systems like Windows registry |
| **Object‑Relational** | Objects stored in tables | Mixing OOP languages with SQL databases |
| **Multi‑Model** | One shelf that can be relational, document, graph, etc. | Projects that need several data models without multiple systems |

Pick the shelf that matches how you’ll read and write your data: structured and strict, flexible and unstructured, fast single look‑ups, or richly connected stories. The right choice keeps your “library” organized, efficient, and ready for visitors (applications).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
