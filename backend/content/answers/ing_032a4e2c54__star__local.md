---
qid: ing_032a4e2c54__star__local
question: 'Explain: About This Repository — Faang Coding Interview Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 343
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:34:37-05:00'
sources: []
---

**Situation**  
When I joined the Data Science team at a mid‑size fintech, we had a recurring problem: new hires were spending weeks hunting for high‑quality interview questions to practice before their internal coding rounds. The existing public repos were either too generic or missing domain‑specific ML challenges.

**Task**  
I was tasked with creating an internal “Faang Coding Interview Questions” repository that would be concise, well‑structured, and focused on machine learning concepts most relevant to our hiring pipeline—everything from feature engineering tricks to model explainability questions.

**Action**  
Using GitHub Actions I set up a CI workflow that automatically pulls the latest question sets from the public Faang repo, filters them through a custom script written in Python (pandas + regex) to keep only ML‑centric items, and then formats each entry into Markdown with code snippets in Jupyter notebooks. I added tags for difficulty, topic, and runtime complexity, and integrated a small Flask API so interviewers could query questions by keyword or skill level directly from the IDE.

**Result**  
Within two weeks, the new repo was adopted by 80 % of hiring managers. Candidates reported a 30 % faster ramp‑up on interview prep, and our internal metrics showed a 15 % reduction in average interview time for ML roles. I learned how to combine automation with domain knowledge to create a living resource that scales with the team’s needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
