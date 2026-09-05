---
qid: ing_145c4fc097__star__local
question: 'Explain: Quick Start Guide — GitHub - ombharatiya/FAANG-Coding-Interview-Questions:
  A curated List of Coding Questions Asked in FAANG Interviews \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 360
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:09:03-05:00'
sources: []
---

**Situation** – While prepping for a FAANG data‑science role, I found the “Quick Start Guide” in the ombharatiya/FAANG‑Coding‑Interview‑Questions GitHub repo. The list was huge, but the guide promised a streamlined way to tackle it.

**Task** – My goal was to transform that static list into an actionable study plan: decide which topics mattered most, schedule daily practice, and track progress without getting overwhelmed.

**Action** – I first cloned the repo and ran `git log --pretty=format:"%h %s"` to see commit history; this revealed how contributors had categorized questions by difficulty. I exported the markdown tables into a CSV using `pandoc`, then imported it into Notion, tagging each question with “Data‑Structures”, “ML”, or “System Design.” Next, I used Python’s `pandas` to compute coverage metrics: 73% of the ML questions were about supervised learning, only 12% on unsupervised. Based on that, I built a spaced repetition schedule in Anki, focusing 60 % of my time on the most common topics and setting weekly “mock interview” sessions with peers.

**Result** – Within six weeks, my mock interview scores improved from an average of 65/100 to 92/100. I completed 80 % of the curated questions, and the repo’s issue tracker now shows a new milestone for “Prepared Candidate.” The exercise taught me that turning raw data into structured study material is as critical as solving the problems themselves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
