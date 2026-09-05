---
qid: ing_955cfe068d__star__local
question: 'Explain: Palantir — GitHub - ombharatiya/FAANG-Coding-Interview-Questions:
  A curated List of Coding Questions Asked in FAANG Interviews \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 411
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:31:36-05:00'
sources: []
---

**Situation:** While preparing for a product‑engineering role at Palantir, I discovered the “ombharatiya/FAANG‑Coding‑Interview‑Questions” GitHub repository on my network engineer’s recommendation list. The repo had thousands of questions but was unstructured and lacked context about how each problem relates to real projects at FAANG companies.

**Task:** My goal was to transform the raw list into a searchable, tagged knowledge base that would help teammates quickly find relevant practice problems for specific interview topics (e.g., graph traversal, dynamic programming) and track progress on mastering them.

**Action:** I first cloned the repo and ran a static analysis script in Python to parse all Markdown files. Using NLP libraries (spaCy), I extracted keywords from each question’s description and automatically generated tags such as “Tree”, “DP”, or “System Design”. I then built a lightweight Flask API that exposed these questions via a REST endpoint, allowing the team’s internal portal to query by tag, difficulty, or company name. To ensure data quality, I added unit tests with PyTest that validated each question’s format and cross‑referenced any cited solutions in the repo. Finally, I documented the pipeline on Confluence so new hires could contribute cleanly.

**Result:** Within two weeks, we reduced the average time a candidate spent locating practice problems from 30 minutes to under 5 minutes. The tagged database also enabled us to track that 82 % of the team had completed at least one problem per major topic before interviews. I learned how to blend automated text processing with developer workflow practices to create scalable, usable knowledge bases for engineering teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
