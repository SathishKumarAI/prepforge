---
qid: ing_a7e50b78ff__star__local
question: 'Explain: NVIDIA — GitHub - ombharatiya/FAANG-Coding-Interview-Questions:
  A curated List of Coding Questions Asked in FAANG Interviews \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 332
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:08:51-05:00'
sources: []
---

**Situation**  
During my senior design project, I was tasked with building a public‑facing web app for a university research group that needed to showcase the most frequently asked machine‑learning interview questions from FAANG companies. The team had no curated list and we were on a tight two‑month deadline.

**Task**  
I had to gather, verify, and organize a comprehensive set of coding problems, ensuring each was tagged with difficulty, topic, and company origin, then host it on an accessible platform for students and recruiters.

**Action**  
I discovered the NVIDIA GitHub repository *omhbariyya/FAANG-Coding-Interview-Questions*, which already contained a meticulously curated list. I cloned the repo, parsed its JSON metadata, and wrote a Python script to cross‑reference each problem against company interview archives (Glassdoor, LeetCode). I added missing tags, updated links to official solutions, and integrated a simple React UI that fetched the data via GitHub’s REST API. Throughout, I used Git for version control, Docker for containerization, and continuous integration with GitHub Actions to run unit tests on the dataset.

**Result**  
The final web app hosted 250+ questions with accurate difficulty levels, reducing student prep time by 40%. The repo gained over 1,200 stars within a month, and I received an internship offer from NVIDIA for their AI research team. This experience taught me how to leverage community resources efficiently while ensuring data integrity through automated pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
