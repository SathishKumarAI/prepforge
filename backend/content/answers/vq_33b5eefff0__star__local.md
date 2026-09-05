---
qid: vq_33b5eefff0__star__local
question: How can you tell the difference between.py and.pyc files?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 361
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:54:33-05:00'
sources: []
---

**Situation**  
During a migration of our data‑pipeline from Python 2.7 to Python 3.9, the build server was generating an unexpected number of .pyc files in the deployment package, inflating the artifact size by ~15 %. The QA team flagged it as a potential security risk because compiled bytecode could expose internal logic.

**Task**  
I needed to audit the repository, identify which files were plain source (.py) and which were compiled (.pyc), and devise a cleanup script that preserved only necessary .py files for the Docker image.

**Action**  
I started by inspecting file extensions and using `file -b` on a sample set: `.py` reported “Python source” while `.pyc` returned “Python bytecode”. Then I leveraged `python -m dis` to disassemble a .pyc file, confirming it contained opcode listings. For automation, I wrote a Bash script that recursively scans for files ending in `.pyc`, verifies their timestamps against the corresponding `.py`, and deletes stale ones. The script logs each deletion so we can audit changes.

**Result**  
The cleanup reduced the deployment image from 120 MB to 103 MB, cutting load time by 12 %. I learned that distinguishing source from bytecode is as simple as inspecting file signatures and opcodes, but automating the process ensures consistency across environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
