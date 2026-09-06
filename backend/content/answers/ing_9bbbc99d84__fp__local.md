---
qid: ing_9bbbc99d84__fp__local
question: 'Explain: Parse JSON — JSON And BSON | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 526
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:36:34-05:00'
sources: []
---

## Why MongoDB parses **JSON → BSON** (and vice‑versa)

MongoDB stores documents as **BSON**—a binary format that extends JSON by adding typed fields (`Date`, `ObjectId`, `Binary`, …).  
When an application sends a JSON payload, it must be translated into BSON so that the server can index, query, and persist it. The reverse happens when data is read back to the client.

### Fundamental problem

A database engine needs *efficient storage* and *fast indexing*.  
- **JSON** is text‑based; its representation of numbers, dates, or binary blobs is ambiguous (e.g., `"2015‑01‑01"` could be a string or a date).  
- **BSON** stores values with explicit type tags and fixed‑length headers, allowing the engine to skip over fields in O(1) time and to perform range queries directly on typed data.

### The conversion pipeline

1. **Lexical analysis**: parse JSON into an abstract syntax tree (AST).  
2. **Type inference**: map each AST node to a BSON type according to MongoDB’s schema‑free rules (e.g., numbers become `int32`/`double`; strings remain UTF‑8; ISO‑8601 dates become `Date`).  
3. **Binary encoding**: serialize the typed tree into BSON, prepending field names and lengths.

The reverse is symmetrical: BSON bytes are decoded back to JSON, losing type information that cannot be represented in plain JSON (e.g., an `ObjectId` becomes a hex string).

### Deeper principle

This is an instance of **information‑theoretic compression**: BSON packs the same semantic data into fewer bytes by exploiting known field types. The engine can thus index on *type* and *value* simultaneously, achieving sub‑linear lookup times.

### Non‑obvious insight

Most developers treat JSON as “plain text,” but its lack of type guarantees forces MongoDB to **infer** types at parse time. This inference is not deterministic for numbers (int vs. double) or dates; the engine chooses a default that may later require an explicit cast (`$type` operator). Consequently, two identical-looking JSON documents can end up with different BSON representations and query semantics—something hidden until you experiment with `$type` filters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
