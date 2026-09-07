---
qid: ing_9bbbc99d84__faang__local
question: 'Explain: Parse JSON — JSON And BSON | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 452
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:46:10-05:00'
sources: []
---

**Clarify**  
You’re asking how a driver (e.g., the MongoDB C++/Python driver) turns a JSON document into a BSON object that Mongo stores, and vice‑versa. Key assumptions: we’re dealing with UTF‑8 text, no schema enforcement, and the target is a `BSON::Document` in memory.

**Approach**  
1. **Tokenize** the JSON string using a streaming lexer (e.g., RapidJSON).  
2. **Build a BSON tree** by mapping each token to its BSON counterpart (`Object`, `Array`, `String`, `Number`, etc.).  
3. **Handle type promotion**: integers → 64‑bit, floats → double; detect ISO dates and convert to BSON `Date`.  
4. **Encode** the tree into a binary buffer with length prefixes and null terminators.  
5. For parsing back, read the binary header, walk the buffer, and reconstruct JSON text or an in‑memory object.

**Depth**  
- *Parsing*: O(n) time, O(n) space; streaming avoids loading entire JSON if huge.  
- *Encoding*: Each field writes a type byte + key + value; BSON requires 4‑byte length prefix at start.  
- *Edge Cases*: Unquoted keys (invalid JSON), numbers outside 64‑bit range, nested arrays with mixed types, and `NaN/Infinity` values which BSON cannot represent directly.  
- *Testing*: Round‑trip tests on all BSON primitive types, deeply nested structures, and edge values; benchmark against native drivers.

**Optimize & Communicate**  
Use a single pass lexer+builder to reduce allocations. Cache string keys to avoid duplicate copies. Expose API callbacks for custom type handlers (e.g., `ObjectId`). When explaining, emphasize the streaming approach’s linearity, how BSON’s binary format saves space on integers, and why we must validate during parsing to prevent injection attacks. This narrative showcases structured reasoning, depth, and awareness of production concerns—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
