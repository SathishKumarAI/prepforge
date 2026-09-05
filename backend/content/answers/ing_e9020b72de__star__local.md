---
qid: ing_e9020b72de__star__local
question: 'Explain: Amazon — GitHub - ombharatiya/FAANG-Coding-Interview-Questions:
  A curated List of Coding Questions Asked in FAANG Interviews \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 362
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:14:15-05:00'
sources: []
---

**Situation:** In the summer before my first FAANG interview, I realized that my machine‑learning portfolio lacked depth in real‑world problem solving and that the interviewers were asking increasingly specific algorithmic questions.

**Task:** I needed to build a robust set of practice problems that covered both theory and code, while tracking progress across multiple domains (CV, NLP, reinforcement learning) so I could focus on weak spots before the interview window closed.

**Action:** I forked the “ombharatiya/FAANG-Coding-Interview-Questions” repo on GitHub, then curated a personal branch. Using Python notebooks and Docker containers, I added annotated solutions for 45 ML questions, each with unit tests in PyTest and performance metrics (accuracy, F1‑score). I leveraged GitHub Actions to run the test suite on every push and used the repository’s issue tracker to log my own “learning notes”—like trade‑offs between L2 regularization vs. dropout for overfitting. I also set up a simple CI pipeline that deployed a static site via GitHub Pages, so I could review visual summaries of my strengths.

**Result:** By the time of my interviews, I had completed 80% of the curated problems with an average score of 92 % on internal mock tests. The structured repository saved me 30 hours of unstructured searching and gave interviewers concrete code samples to discuss. I learned that version control isn’t just for production code—it’s a powerful learning scaffold when paired with CI/CD and documentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
