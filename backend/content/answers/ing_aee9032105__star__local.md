---
qid: ing_aee9032105__star__local
question: 'Explain: Uber — GitHub - ombharatiya/FAANG-Coding-Interview-Questions:
  A curated List of Coding Questions Asked in FAANG Interviews \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 355
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:22:02-05:00'
sources: []
---

**Situation**  
During my senior year I was preparing for FAANG interviews and kept missing the exact type of questions they asked on data‑structures and algorithms. My notes were scattered across PDFs, blogs, and YouTube playlists.

**Task**  
I needed a single, up‑to‑date source that catalogued real interview problems with clear solutions so I could practice systematically and track progress.

**Action**  
I discovered the Uber‑GitHub repo “ombharatiya/FAANG-Coding-Interview-Questions.” I forked it, cloned locally, and used VS Code’s GitLens to review commit history. The repository is organized by company (Uber, Google, Amazon, etc.) and difficulty level. I added a script that parsed the Markdown files into a SQLite DB, tagging each problem with “time complexity,” “space complexity,” and “topic” tags. Then I wrote unit tests in Python to verify my own solutions against the reference ones, ensuring correctness while learning trade‑offs (e.g., iterative vs recursive BST traversal). I scheduled weekly sprints: one sprint for 10 medium problems, then a mock interview session with peers.

**Result**  
Within three months I solved over 200 curated problems, improving my average solution runtime by 35 % and reducing my interview preparation time from 6 weeks to 3 weeks. The process taught me how to leverage community resources efficiently, automate problem tracking, and measure algorithmic performance rigorously.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
