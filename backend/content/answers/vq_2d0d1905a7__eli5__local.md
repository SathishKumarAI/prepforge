---
qid: vq_2d0d1905a7__eli5__local
question: What are the nine different types of Indexes?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 428
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:07:10-05:00'
sources: []
---

Imagine a giant library where each book has a card‑catalog card and a quick‑look table inside the spine. In databases, *indexes* are those helpful tools that let you find data fast without reading every page. There are nine common kinds:

| Index type | What it’s like | How it works |
|------------|----------------|--------------|
| **Primary** | The library’s main card catalog – one per table. | Guarantees each row is unique and lets the system locate rows quickly. |
| **Unique** | A special shelf that forbids duplicate titles. | Enforces uniqueness on one or more columns, speeding up searches for those values. |
| **Clustered** | The books are actually arranged by this column’s order. | Data itself is stored in sorted order; the index is the data. |
| **Non‑clustered** | A separate lookup table pointing to book locations. | Keeps a list of keys and pointers, leaving data elsewhere. |
| **Composite (multi‑column)** | A card that lists two words together. | Indexes several columns at once for queries that filter on both. |
| **Full‑text** | A search engine that scans the entire page text. | Lets you find words anywhere inside large text fields. |
| **Spatial** | A map that knows where each building sits. | Optimizes queries involving coordinates or shapes (e.g., GPS). |
| **Bitmap** | A light switch board showing on/off for many rows. | Uses bits to represent column values, great when few distinct values exist. |
| **Hash** | A locker system that uses a key to jump straight to the right drawer. | Quickly finds exact matches by hashing the key value. |

Think of each index as a different kind of “lookup card” that trades storage space for speed, just like choosing the right tool in a bustling library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
