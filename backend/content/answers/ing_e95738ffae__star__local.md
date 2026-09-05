---
qid: ing_e95738ffae__star__local
question: 'Explain: Exercise: Level 1 — GitHub - Asabeneh/30-Days-Of-Python: The 30
  Days of Python programming challenge is a step-by-step guide to learn the Python
  programming language in 30 days. This challenge may take more than 100 days. Follow
  your own pace. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 326
output_tokens: 421
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:14:45-05:00'
sources: []
---

**Situation**  
When I first joined the ML internship, my mentor assigned me a foundational exercise: clone Asabeneh’s *30‑Days‑of‑Python* repo on GitHub and run through the Level 1 lessons. The repo had 100+ days of code, but the challenge was to get up to speed in just two weeks while keeping the learning pipeline clean.

**Task**  
I needed to understand each day’s script, document the core Python concepts (lists, functions, file I/O), and build a small CLI that would let me test snippets locally. The goal was to finish Level 1 with a working knowledge of basic syntax and a reproducible environment.

**Action**  
First, I forked the repo and set up a virtualenv (`python3 -m venv py30`). Using `pip install -r requirements.txt`, I ensured all dependencies were available. I then wrote a `run_day.py` script that accepted a day number, imported the corresponding module, and executed its demo code. To validate, I ran unit tests I added for each lesson (`pytest test_day*.py`). Whenever an exercise failed (e.g., missing imports), I debugged with `pdb`, logged the issue to a GitHub issue, and pushed a fix back to my fork. I also maintained a Markdown log summarizing key takeaways after each day.

**Result**  
By Day 30 I had a fully automated test harness that ran all lessons in under 5 seconds, and I earned a personal score of 98/100 on the self‑quiz. The exercise sharpened my Git workflow, reinforced Python fundamentals, and gave me confidence to tackle more complex ML pipelines later in the internship.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
