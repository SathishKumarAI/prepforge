---
qid: ing_4170eaf392__star__local
question: 'Explain: Late Days — Stanford CS 224N | Natural Language Processing with
  Deep Learning'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 402
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:39:22-05:00'
sources: []
---

**Situation:**  
During my second semester at Stanford, I was enrolled in CS 224N (Natural Language Processing with Deep Learning). Mid‑term, the class suddenly switched from a single, large assignment to a series of micro‑tasks that had to be submitted daily on the course portal. The deadline window for each task opened at 6 pm and closed at 10 am the next day—essentially giving students “late days” that were automatically penalized after 24 hours.

**Task:**  
I needed to build a lightweight system that would fetch my code, run it locally against the unit tests, and submit it automatically before the deadline, while also logging any failures for quick debugging. The goal was to reduce manual copy‑paste errors and ensure I never missed a late‑day submission.

**Action:**  
Using Python 3.10, I wrote a script that leveraged `subprocess` to run the provided test harness (`pytest`). I stored my credentials in an encrypted `.env` file and used `requests` with session cookies to POST the compiled zip of my source files to the portal’s API endpoint. To guard against network hiccups, the script retried up to three times with exponential back‑off. I added a local SQLite log that recorded timestamped status codes and any error messages. Finally, I scheduled the script via `cron` on macOS to run automatically at 9:30 pm each night.

**Result:**  
Over the semester I submitted all micro‑tasks without a single manual entry, achieving a 100% on-time submission rate. The automated log helped me identify and fix two flaky unit tests that had previously caused last‑minute failures. This experience taught me how to blend simple scripting with robust error handling to meet tight academic deadlines—skills directly transferable to production‑grade CI/CD pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
