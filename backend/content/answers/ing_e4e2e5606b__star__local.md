---
qid: ing_e4e2e5606b__star__local
question: 'Explain: Microsoft — GitHub - ombharatiya/FAANG-Coding-Interview-Questions:
  A curated List of Coding Questions Asked in FAANG Interviews \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 374
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:05:31-05:00'
sources: []
---

**Situation** – At my previous company we were preparing a training bootcamp for junior developers who wanted to land roles at FAANG. The first week of the bootcamp had low engagement; participants struggled with finding high‑quality interview questions and often spent hours sifting through unrelated problems.

**Task** – I was asked to create a centralized, searchable resource that mapped real FAANG coding questions to difficulty levels, topics, and solution quality, so that trainees could practice efficiently and instructors could track progress.

**Action** – I forked the *ombharatiya/FAANG-Coding-Interview-Questions* repo on GitHub, cleaned up its README, and added a new `questions.json` file that included metadata (problem statement, tags, difficulty, link to official solution). Using Python’s `pandas` I wrote a script to scrape each question’s page for time‑and‑space complexity annotations from the community wiki. I then built a simple Flask API that served filtered queries by topic and difficulty, and deployed it on Render.com so students could access the catalog via a lightweight web UI. I also set up continuous integration with GitHub Actions to run unit tests against every added solution, ensuring no broken links or mismatched tags.

**Result** – The new resource increased bootcamp participation by 48% within two weeks; trainees reported cutting their preparation time from 8 hours per week down to 3.5 hours. Instructors used the API’s analytics dashboard to identify that “Dynamic Programming” questions were the most requested, guiding future curriculum design. I learned how a well‑structured GitHub repo can scale as an educational tool and how automation (scraping + CI) keeps content accurate and up‑to‑date.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
