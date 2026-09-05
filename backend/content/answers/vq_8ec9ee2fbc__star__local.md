---
qid: vq_8ec9ee2fbc__star__local
question: How to delete a file in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 336
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:09:31-05:00'
sources: []
---

**Situation:**  
In my last role as a data engineer at FinTechCo, we automated nightly ETL jobs that produced intermediate CSVs in a shared staging folder. One day the folder started filling up because old files weren’t being cleaned out, causing disk usage to hit 90% and slowing down downstream analytics.

**Task:**  
I was tasked with implementing an automatic cleanup routine that would delete any file older than seven days without affecting the current job’s output or other users’ data.

**Action:**  
Using Python 3.10, I wrote a small script that leveraged `pathlib` for platform‑independent paths and `os.remove()` to delete files. I first listed all `.csv` files with `Path.glob("*.csv")`, then compared each file’s `stat().st_mtime` against the current epoch time minus seven days. For safety, I wrapped deletions in a try/except block to log any permission errors and used the `logging` module to record which files were removed. The script was scheduled via Airflow every midnight as part of the ETL DAG.

**Result:**  
After deployment, disk usage dropped from 90% to 45% within two days, eliminating job timeouts. The cleanup routine ran in under a second for up to 2000 files, and I added unit tests with `pytest` that verified no unintended deletions occurred. This experience taught me the importance of safe file handling and automated housekeeping in data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
