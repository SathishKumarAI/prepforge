---
qid: vq_9c8de9b972__eli5__local
question: what is role of job Tracker?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 161
total_tokens: 316
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:21:55-05:00'
sources: []
---

Think of a big library that needs to catalogue thousands of books at once. The **JobTracker** is the librarian who first receives a list of what needs cataloguing (the job). It splits the job into smaller tasks—like handing out individual books to different staffers (TaskTrackers)—and keeps track of everyone’s progress. If a staffer drops a book or gets stuck, the librarian re‑assigns that book to someone else. The JobTracker also decides when all the books are finished and reports back that the job is done. In short, it schedules tasks, monitors their health, reallocates failed ones, and finally declares success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
