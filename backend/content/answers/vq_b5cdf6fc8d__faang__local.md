---
qid: vq_b5cdf6fc8d__faang__local
question: What are the different types of Scala literals?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 564
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:29:32-05:00'
sources: []
---

**Clarify**  
The interviewer asks for *Scala literal types*. I’ll confirm they mean “literals that can appear directly in source code” (numeric, character, string, boolean, null, etc.) and not user‑defined or contextual literals.

---

**Approach**  
1. Enumerate the built‑in literal categories.  
2. For each, list concrete syntax forms (decimal, hex, binary, octal).  
3. Mention type inference rules that Scala applies to each literal.  

---

**Depth**

| Literal | Syntax examples | Inferred type | Notes |
|---------|-----------------|--------------|-------|
| **Integer** | `42`, `0x2A`, `0b101010`, `0o52` | `Int` (unless out of range → `Long`) | Octal (`0o…`) added in Scala 3. |
| **Floating‑point** | `3.14`, `1e10`, `5.0f`, `2.71D` | `Double`; suffix `f/F` ⇒ `Float`, `d/D` ⇒ `Double` | Trailing zeros or exponent accepted. |
| **Character** | `'a'`, `'\n'`, `'\u1234'` | `Char` | Must be a single character (including escape). |
| **String** | `"hello"`, `"""multi\nline"""` | `String` | Triple quotes allow raw multiline strings. |
| **Boolean** | `true`, `false` | `Boolean` | Case‑sensitive (`True` is invalid). |
| **Null** | `null` | `Null` | Only assignable to nullable reference types. |
| **Unit** | `()` | `Unit` | Represents “no value” (void). |

Scala also allows *numeric suffixes* (`L`, `l`, `F`, `f`, `D`, `d`) and *type‑ascribed literals* like `42: Long`.  

---

**Edge Cases**

- Literals exceeding the bounds of their inferred type cause a compiler error.  
- Octal notation is only in Scala 3; older versions don’t support it.  
- Character escape sequences must be valid Unicode or standard escapes.

---

**Optimize & Communicate**  
I’d explain that understanding literal types helps with implicit conversions, numeric promotion, and avoiding overflow bugs. I’d also note that the compiler’s inference can be overridden with type ascriptions for clarity. This structured answer shows quick recall, depth of knowledge, and awareness of version nuances—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
