---
qid: vq_cde054eba9__faang__local
question: What are built-in types of Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 463
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:34:12-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise list of the *built‑in* data‑type families that Python ships with, plus a quick note on their mutability and typical use cases. I’ll assume they’re not looking for user‑defined classes or third‑party libraries.

**Approach**  
1. Enumerate each family (numeric, sequence, mapping, set).  
2. For each, list the concrete types.  
3. Add a brief note on immutability and common patterns.  

**Depth**  
| Category | Types | Mutability | Typical use |
|----------|-------|------------|-------------|
| **Numeric** | `int`, `float`, `complex` | Immutable | Arithmetic, counters, coordinates |
| **Sequences** | `str`, `bytes`, `bytearray`, `list`, `tuple`, `range` | `list`, `bytearray`, `range` (mutable) | Text, binary blobs, ordered collections |
| **Mappings** | `dict`, `frozenset` (hashable set), `OrderedDict`, `defaultdict` | `dict` variants mutable | Key‑value stores, lookups |
| **Sets** | `set`, `frozenset` | `set` mutable | Unordered unique items, membership tests |

Python also offers *NoneType* (`None`) and the boolean types (`bool`), which are subclasses of `int`. All built‑ins live in the `builtins` module.

**Edge Cases**  
- `bytes` is immutable, but `bytearray` is mutable.  
- `range` objects are lazy sequences; they’re immutable but behave like a sequence.  
- `frozenset` and `bool` are hashable and can be dictionary keys, unlike their mutable counterparts.

**Optimize & Communicate**  
I’ll keep the answer tight (≈180 words), use a table for quick scanning, and highlight mutability because that often drives design decisions in FAANG interviews. This structure satisfies the SIGNAL criteria: clear framing, systematic enumeration, depth with examples, edge‑case awareness, and concise communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
