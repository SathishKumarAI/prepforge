---
qid: vq_8ec9ee2fbc__faang__local
question: How to delete a file in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 481
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:22:22-05:00'
sources: []
---

**Clarify**  
> “Delete a file in Python” – do we mean *remove a single file* or *recursively delete a directory tree*?  
> Assume the target exists, is not open elsewhere, and we have write permissions.  

**Approach**  
1. Import the built‑in `os` module (or `pathlib`).  
2. Resolve the absolute path.  
3. Call `os.remove()` for files or `shutil.rmtree()` for directories.  
4. Wrap in a try/except to catch `FileNotFoundError`, `PermissionError`, etc.

**Depth**  
```python
import os, shutil

def delete_path(path: str) -> None:
    abs_path = os.path.abspath(path)
    if not os.path.exists(abs_path):
        raise FileNotFoundError(f"{abs_path} does not exist")

    try:
        if os.path.isfile(abs_path) or os.path.islink(abs_path):
            os.remove(abs_path)          # O(1)
        else:  # directory
            shutil.rmtree(abs_path, ignore_errors=False)  # O(n) over contents
    except PermissionError as e:
        raise RuntimeError(f"Permission denied while deleting {abs_path}") from e
```
*Complexity*: file deletion is constant‑time; recursive removal traverses the tree once.  
*Trade‑offs*: `shutil.rmtree` copies all paths into memory for safety – use `ignore_errors=True` only if you want silent failure.

**Edge Cases**  
- Symlinks pointing outside the target directory: `os.remove()` handles them safely.  
- Read‑only files: need to change mode or set `onerror` callback in `shutil.rmtree`.  
- Files in use by another process: raises an OS error – test on Windows vs Unix.

**Optimize & Communicate**  
Explain that using `pathlib.Path.unlink()` gives a more Pythonic API, but the underlying system call is identical. Mention safety: always verify path existence and permissions before deletion; consider logging for audit trails in production systems. This shows clear reasoning, depth, and awareness of real‑world pitfalls—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
