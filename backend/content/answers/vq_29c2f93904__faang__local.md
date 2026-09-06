---
qid: vq_29c2f93904__faang__local
question: WHAT IS THE DIFFERENCE BETWEEN CHAR AND VARCHAR?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 502
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:03:23-05:00'
sources: []
---

**Clarify**  
The interview asks for the difference between `CHAR` and `VARCHAR`. We’ll assume a relational‑database context (e.g., MySQL, PostgreSQL). I’d confirm whether the focus is on storage, performance, or application behavior.

**Approach**  
1. Define each type.  
2. Compare storage & padding.  
3. Discuss performance implications.  
4. Mention use‑case guidelines and pitfalls.  

**Depth**  
| Aspect | `CHAR(n)` | `VARCHAR(n)` |
|--------|-----------|--------------|
| **Storage** | Fixed length *n* bytes + 1–2 byte overhead for length. Pads unused space with spaces (MySQL) or zeros (PostgreSQL). | Variable length up to *n* bytes + 1–2 byte overhead that stores actual length. |
| **Performance** | Faster seeks and cache locality due to fixed width; no need to read length prefix. Ideal for short, constant‑size fields (e.g., country code). | Slightly slower reads because of length prefix, but saves space when values vary widely. Better for longer or sparse data. |
| **Memory/IO** | Uses more storage if most rows are shorter than *n*. Can waste I/O bandwidth on disk/network. | Stores only what’s needed; efficient for large tables with variable strings. |
| **Indexing** | Indexes have predictable size, can be more compact. | Index entries may grow with string length, affecting cache misses. |
| **Nullability & Trimming** | Leading/trailing spaces are preserved (unless trimmed by DB). | No padding; values are stored exactly as supplied. |

**Edge Cases**  
- Extremely long strings: `CHAR(n)` may truncate or error if *n* is too small.  
- Padding differences can cause equality comparisons to fail (`'abc '` ≠ `'abc'`).  
- Collation/locale can affect storage size (multibyte characters).  

**Optimize & Communicate**  
For most applications, use `VARCHAR` for variable data and reserve `CHAR` for fixed‑width codes or flags. Highlight that modern engines mitigate many performance gaps, so choosing based on semantic intent often outweighs micro‑optimizations. Always profile with realistic data; explain trade‑offs to stakeholders clearly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
