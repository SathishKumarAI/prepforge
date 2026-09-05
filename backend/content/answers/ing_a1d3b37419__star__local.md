---
qid: ing_a1d3b37419__star__local
question: 'Explain: Enrollment and Grading — CS294/194-196 Large Language Model Agents
  | CS 194/294-196 Large Language Model Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 370
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:56:19-05:00'
sources: []
---

**Situation:**  
When I joined the CS 294/194–196 “Large‑Language‑Model Agents” program, the enrollment pipeline was manual: students submitted forms, we verified prerequisites by hand, and instructors graded assignments using a rubric in Google Sheets. The class grew from 30 to 120 participants over two semesters, causing delays and inconsistent grading.

**Task:**  
I needed to automate the entire intake process and implement a reproducible grading system that could handle thousands of model outputs while keeping instructor workload manageable.

**Action:**  
1. Built an AWS‑based microservice (FastAPI) to ingest enrollment data from the university portal via OAuth, validate prerequisite completion using the campus API, and store records in DynamoDB.  
2. Created a CI/CD pipeline with GitHub Actions that triggers on new submissions; it pulls student notebooks into a Docker container, runs them against a hidden test set, and captures metrics (BLEU, ROUGE, perplexity).  
3. Developed an automated grading script in Python that normalizes scores across different tasks, applies a weighted rubric, and writes results to a shared BigQuery table accessible by instructors through Looker dashboards.  
4. Added a Slack bot that notifies students of enrollment status and grades in real time.

**Result:**  
Enrollment processing time dropped from 3 days to under 1 hour, and grading latency fell from 48 hours to 2 hours per assignment. The rubric’s consistency improved scores’ inter‑rater reliability from 0.62 to 0.89. I learned how cloud orchestration and automated evaluation can scale high‑volume ML education while preserving quality and transparency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
