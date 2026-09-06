---
qid: vq_10a1be683e__faang__local
question: How to count the lines in a file by using linux command?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 399
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:58:01-05:00'
sources: []
---

**Clarify**  
We need a one‑liner (or minimal) Linux solution that returns how many text lines a file contains.  
Assumptions: the file is plain ASCII/UTF‑8, no binary data; we want an exact count, not approximate.

**Approach**  
Use `wc -l` – it’s the canonical tool for line counting and works on all POSIX shells.  
If the file name has spaces or special chars, wrap it in quotes or escape it.

**Depth**  
```bash
# Count lines of myfile.txt
wc -l -- "$myfile.txt"
```
- `wc` (word count) with `-l` prints `<count> <filename>`.  
- `--` signals end‑of‑options, guarding against filenames that start with `-`.  
- Complexity: O(n) time and O(1) extra memory; it streams the file.

Alternatives: `awk 'END{print NR}' file`, `sed -n '$=' file`; they all read the entire file but are more verbose.

**Edge Cases**  
- Empty file → 0 lines.  
- File without a trailing newline still counts its single line.  
- Binary or very large files may cause `wc` to mis‑interpret bytes; use `LC_ALL=C wc -l`.

**Optimize & Communicate**  
`wc -l` is already optimal for most use cases: it’s built into the kernel, heavily tested, and portable across Linux distributions. If you need only the number (no filename), pipe to `awk '{print $1}'`. Explain that while tools like `sed` or `awk` can do the job, they add unnecessary overhead; `wc -l` is the idiomatic, efficient choice for interview settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
