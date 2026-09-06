---
qid: vq_33b5eefff0__faang__local
question: How can you tell the difference between.py and.pyc files?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 468
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:05:18-05:00'
sources: []
---

**Clarify**  
The interview asks how one distinguishes a Python source file (`*.py`) from its compiled byte‑code counterpart (`*.pyc`). Assume the environment is CPython and we’re dealing with files on disk, not in memory.

**Approach**  
1. Inspect the file extension and path.  
2. If ambiguous (e.g., same name but no extension), read a few bytes to identify magic numbers or header format.  
3. Verify that `*.pyc` contains a valid Python marshal header (`magic number`, timestamp, source size) while `*.py` is plain UTF‑8 text.

**Depth**  
- **Extension & directory**: `.py` → source; `.pyc` → compiled cache (usually in `__pycache__`).  
- **Header check**: The first 4 bytes of a `.pyc` file are the *magic number* (e.g., `0x42 0x0d 0x0d 0x0a` for CPython 3.10). Following that is a 4‑byte timestamp and optional source size before the marshalled code object.  
- **Content validation**: Attempt to `marshal.load()` after skipping header; if it succeeds, it’s a valid `.pyc`. A `.py` file will fail this binary read but pass as UTF‑8 text.  
Complexity is O(1) I/O per file.

**Edge Cases**  
- Files without extensions (e.g., scripts executed via shebang).  
- Corrupted or manually edited `.pyc` files that still start with the magic number.  
- Non‑CPython bytecode formats (PyPy, Jython). Test by creating a `.py`, compiling it (`python -m py_compile`), and verifying both paths.

**Optimize & Communicate**  
A lightweight utility can cache known magic numbers per Python version to avoid repeated lookups. In production, fall back to reading the file as text if header parsing fails, then classify by content heuristics. Explain that this method is deterministic, fast, and aligns with CPython’s own import machinery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
