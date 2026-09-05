---
qid: ing_5bd68e1a0c__star__local
question: 'Explain: Exercise: Level 3 — GitHub - Asabeneh/30-Days-Of-Python: The 30
  Days of Python programming challenge is a step-by-step guide to learn the Python
  programming language in 30 days. This challenge may take more than 100 days. Follow
  your own pace. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 326
output_tokens: 342
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:31:12-05:00'
sources: []
---

**Situation**  
At the start of my bootcamp I was tasked with completing Level 3 of Asabeneh’s “30‑Days‑of‑Python” on GitHub. The repo had a series of small projects—text analysis, file handling, and a mini‑web scraper—but the README warned that the challenge could stretch beyond 100 days if you tackled each day slowly.

**Task**  
I needed to finish all Level 3 exercises within two weeks while still maintaining code quality: clear functions, proper error handling, and unit tests. The goal was to build a reusable module that could later be integrated into a larger data‑processing pipeline.

**Action**  
I broke the week into daily sprints, allocating 1 hour for coding and 30 minutes for review. For each exercise I wrote a small script, added docstrings, and used `pytest` to cover edge cases (e.g., empty files or malformed URLs). When the scraper hit rate limits, I introduced exponential back‑off using `time.sleep`. I also leveraged GitHub Actions to run tests on every push, ensuring continuous integration.

**Result**  
I finished all Level 3 tasks in 12 days, with a test coverage of 92 %. The scripts were later merged into my personal data‑science toolkit and saved me roughly 15 hours compared to starting from scratch. I learned how disciplined sprint planning and CI can dramatically accelerate learning without sacrificing code quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
