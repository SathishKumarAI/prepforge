---
qid: ing_95016462ee__star__local
question: 'Explain: Research and application — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 354
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:30:52-05:00'
sources: []
---

**Situation**  
During my senior thesis at university I was tasked with building an adaptive flashcard system for medical students. The goal was to reduce the time they spent reviewing while maintaining a 90 % retention rate on key concepts.

**Task**  
I needed to design and implement a spaced‑repetition algorithm that could automatically schedule review intervals based on each student’s performance, then integrate it into a web app using Python and Flask.

**Action**  
I started by studying the classic SM-2 algorithm from Wikipedia and the research literature on inter‑spacing effects. I translated the algorithm into a Python module, exposing an API that accepted a learning item, the current interval, and the user’s recent response (correct/incorrect). For each item I calculated the next review date using the formula:  
`new_interval = old_interval * EF`, where `EF` is the easiness factor adjusted by the user’s answer.  

I stored items in a PostgreSQL database and used Celery to enqueue review reminders. To validate the model, I ran an A/B test with 200 students over four weeks, comparing my spaced‑repetition version against a fixed‑interval baseline. I logged recall accuracy and total study time.

**Result**  
The spaced‑repetition cohort improved their recall from 75 % to 92 %, while average study time dropped by 28 %. The project was later adopted by the university’s online learning platform, and I published a short paper outlining the algorithmic choices. From this experience I learned how theoretical research can be distilled into practical, data‑driven features that directly benefit users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
