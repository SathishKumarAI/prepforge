---
qid: ing_144afcd588__eli5__local
question: 'Explain: 4 System Design - Types of Databases — 15 Types of Databases and
  When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 398
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:07:35-05:00'
sources: []
---

Think of a database like a toolbox for storing information.  
Each tool in the box is built for a specific job—just as each database type is tuned to certain data patterns and tasks.

| Tool | What it’s good at |
|------|-------------------|
| **Relational (SQL)** | Precise, structured tables with clear relationships – like a filing cabinet where every file has a label. |
| **Document** | Flexible, nested records – think of a notebook where each page can have its own layout. |
| **Key‑value** | Fast look‑ups by a single key – like a dictionary index. |
| **Graph** | Heavy relationships (friends, links) – imagine a social network map. |
| **Column‑family** | Wide tables with many optional columns – like a spreadsheet where most rows have only a few filled cells. |
| **Time‑series** | Data that changes over time – think of a thermometer log. |
| **Object** | Stores complex objects directly – similar to saving whole photos as single files. |
| **Search** | Full‑text search and relevance scoring – like a library catalog with powerful filters. |
| **Spatial** | Geographic coordinates – imagine a GPS map storing roads and landmarks. |
| **Multi‑model** | Combines several of the above in one system – like a Swiss army knife that can cut, pry, and screw. |

When picking a database, match its “tool” to your data shape and workload: if you need strict tables and ACID guarantees, choose relational; for quick key look‑ups use key‑value; for highly connected data go graph; for massive logs use time‑series; etc. Each type is just a different way to keep your information organized so it’s easy to find and fast to use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
