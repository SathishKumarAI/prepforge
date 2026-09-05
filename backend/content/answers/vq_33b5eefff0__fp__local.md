---
qid: vq_33b5eefff0__fp__local
question: How can you tell the difference between.py and.pyc files?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 529
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:30:31-05:00'
sources: []
---

In Python the **source** (`.py`) and the **compiled byte‑code** (`.pyc`) are two sides of the same equation:  
```
source  →  compile()  →  byte‑code  →  interpreter
```

*Why a separate file?*  
The interpreter must execute machine‑neutral code that can be run on any platform. Compiling to *byte‑code* (a sequence of opcodes understood by the CPython virtual machine) is cheaper than parsing and interpreting source every time, yet still portable. Storing this byte‑code in a separate file allows reuse across runs without recompilation.

**Key differences**

| Feature | `.py` | `.pyc` |
|---------|-------|--------|
| **Contents** | UTF‑8 (or other) text of the program | Binary header + marshalled code object |
| **Header** | None | 4‑byte magic number, 4‑byte timestamp (PEP 552: 4‑byte hash in newer versions), optional source size |
| **Recompilation trigger** | If file’s mtime differs from `.pyc`’s timestamp → recompile | Only when the interpreter decides it is stale or a hash mismatch occurs |

The header’s magic number guarantees that a `.pyc` compiled for one CPython version cannot be misinterpreted by another. The timestamp (or hash) lets the runtime check whether the byte‑code still matches its source.

**Non‑obvious insight**  
A `.pyc` file can *exist* without an accompanying `.py`—for example, when a module is distributed only in compiled form or generated on-the-fly by tools that embed Python code. In such cases the `.pyc`’s header contains either a dummy timestamp or a hash of the original source, ensuring that the byte‑code remains self‑valid even without the text file.

Thus, by inspecting the magic number and timestamp/hash you can programmatically distinguish between a source file (`.py`) and its compiled counterpart (`.pyc`).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
