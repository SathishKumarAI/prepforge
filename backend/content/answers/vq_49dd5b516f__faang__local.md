---
qid: vq_49dd5b516f__faang__local
question: What are unpickling and pickling?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 459
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:09:02-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question:* “What are unpickling and pickling?”  
Assumptions: The interviewee is expected to explain Python’s serialization mechanism, its purpose, security concerns, and typical use‑cases (e.g., caching, RPC). No code writing required.

**2️⃣ Approach**  
- Define *pickling* (serialization) and *unpickling* (deserialization).  
- Explain the `pickle` module, object graph handling, and why it’s Python‑centric.  
- Mention safety pitfalls (arbitrary code execution).  
- Touch on alternatives (`json`, `marshal`, `dill`) for context.

**3️⃣ Depth**  
Pickling is converting a Python object hierarchy into a byte stream that can be stored or transmitted. The `pickle` module recursively writes the object's type, state, and references so that the exact structure can later be reconstructed. Unpickling reads that byte stream and re‑creates the original objects in memory.

Key points:
- **Handles complex graphs** (lists of dicts, custom classes, circular refs).  
- **Binary format** – not human‑readable; version‑dependent.  
- **Security risk:** `pickle.loads()` can execute arbitrary code if fed a malicious payload. Use only trusted data or safer formats (`json`, `msgpack`).  

**4️⃣ Edge Cases**  
- Objects with non‑serializable attributes (open file handles, sockets).  
- Pickle version incompatibilities across Python releases.  
- Cyclic references – handled automatically but can bloat the stream.

**5️⃣ Optimize & Communicate**  
When discussing, highlight trade‑offs: speed vs safety, binary size vs readability. For production, recommend using `json` or `msgpack` unless you need full object fidelity. If pickling is required (e.g., joblib for ML models), wrap unpickling in a sandbox or validate the source.  

*Wrap‑up:* Pickle = Python’s built‑in serialization; unpickle = its reverse. Use with caution, prefer safer formats when possible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
