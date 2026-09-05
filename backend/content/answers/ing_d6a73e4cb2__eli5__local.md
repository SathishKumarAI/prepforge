---
qid: ing_d6a73e4cb2__eli5__local
question: 'Explain: Data types supported — Elasticsearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 342
total_tokens: 497
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:14:41-05:00'
sources: []
---

Think of Elasticsearch as a giant library that can hold books, photographs, and even videos, but it wants each item sorted into the right “shelf” so readers (your queries) can find them fast.  
In machine‑learning projects you’ll feed this library with **data types**—the kinds of information it stores:

| Type | What it looks like | Where it lives in the library |
|------|--------------------|--------------------------------|
| **text** | Long paragraphs, product reviews, or tweets | The “essay” shelf; searchable but not sorted numerically |
| **keyword** | Exact strings such as IDs, tags, or country codes | The “index card” shelf; exact matches only |
| **numeric** (int, long, float, double) | Numbers like prices, counts, or temperatures | The “price list” shelf; good for calculations and ranges |
| **date** | Timestamps in ISO format or epoch milliseconds | The “calendar” shelf; supports sorting by time |
| **boolean** | `true` / `false` flags (e.g., “isActive”) | A simple “yes/no” drawer |
| **geo_point** | Latitude/longitude pairs | The “map” shelf for distance queries |

When you create a machine‑learning model, Elasticsearch first reads these shelves, knowing exactly how to treat each value—whether to tokenize text into words or keep numbers intact for statistics. That way the learning algorithm can pick up patterns correctly without guessing what kind of data it’s looking at.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
