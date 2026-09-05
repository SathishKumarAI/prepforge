---
qid: vq_49dd5b516f__fp__local
question: What are unpickling and pickling?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 322
total_tokens: 490
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:34:01-05:00'
sources: []
---

**Pickling** is the process of converting a live Python object into a byte stream that can be stored or transmitted. Think of it as *serialization*: you flatten an in‑memory data structure into a compact representation so that the same logical state can later be reconstructed.  
**Unpickling** reverses this: the byte stream is parsed and a new Python object graph is built, exactly mirroring the original.

The fundamental problem is **state transfer**—you want to preserve arbitrary complex objects (lists, dicts, custom classes) across program boundaries or time without re‑computing them. Pickle solves it by recursively walking an object’s `__dict__`, handling references and cycles, then emitting a tag‑based binary format that encodes type information and data.

Why must it be *binary*? Because Python objects contain pointers, memory addresses, and types that cannot be expressed textually without ambiguity or huge verbosity. Binary tags allow constant‑time lookups during unpickling and keep the payload size minimal.

A non‑obvious insight: pickles are **not** a generic data interchange format; they embed Python’s runtime semantics (e.g., class names, module paths). Thus, an attacker can inject code by crafting a pickle that instantiates arbitrary classes or calls `__reduce_ex__`. This is why unpickling untrusted data is dangerous—Python’s type system and object model are implicitly encoded in the stream.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
