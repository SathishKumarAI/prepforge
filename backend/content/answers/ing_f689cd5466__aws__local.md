---
qid: ing_f689cd5466__aws__local
question: 'Explain: LinkedIn — GitHub - ombharatiya/FAANG-Coding-Interview-Questions:
  A curated List of Coding Questions Asked in FAANG Interviews \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 444
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:34:19-05:00'
sources: []
---

**Behavioral (STAR)**  
*Situation*: While building an internal hiring analytics tool I needed a ready‑made set of coding challenges to benchmark our engineering talent.  
*Task*: Curate a repository that aggregates the most frequently asked FAANG questions, ensuring relevance and up‑to‑date coverage.  
*Action*: I discovered **ombharatiya/FAANG-Coding-Interview-Questions** on GitHub—a community‑driven list of over 300 problems spanning data structures, algorithms, and system design. I forked the repo, added a `README.md` with categories (e.g., *LinkedIn*, *GitHub*), tagged each question by difficulty, and wrote unit tests for 10 sample solutions in Python/Java. I also set up GitHub Actions to run linting and static analysis nightly, keeping the code quality high.  
*Result*: Within two weeks the repo had 1 200 stars and 350 contributors; our hiring pipeline cut interview prep time by **35%**, measured via reduced average candidate interview duration (from 90 min to 60 min).  

**Technical/System Design**  
The repository is a static site powered by GitHub Pages + Jekyll, ensuring zero infrastructure cost and high availability (99.99%). For scalability I use content‑delivery via CloudFront; for cost control, all assets are stored in an S3 bucket with lifecycle rules that archive old tags after 90 days.  

**Leadership Principles Highlighted**  
- **Customer Obsession**: Tailored the repo to meet engineers’ real interview needs.  
- **Ownership**: Took end‑to‑end responsibility for quality, CI/CD, and community engagement.  

A bar‑raiser would listen for evidence of *ownership*, a *dive deep* understanding of GitHub workflows, quantifiable impact (35% time savings), and lessons learned when a pull request was rejected due to missing tests—prompting the addition of automated linting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
