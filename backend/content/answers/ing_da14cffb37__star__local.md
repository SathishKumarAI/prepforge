---
qid: ing_da14cffb37__star__local
question: 'Explain: ByteDance / TikTok — GitHub - ombharatiya/FAANG-Coding-Interview-Questions:
  A curated List of Coding Questions Asked in FAANG Interviews \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 363
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:44:25-05:00'
sources: []
---

**Situation:**  
During my senior design project I needed to showcase a realistic data‑science interview prep platform for my university’s coding bootcamp. The course instructors wanted an up‑to‑date list of FAANG machine‑learning questions that students could practice on, but the existing resources were scattered across blogs and forums.

**Task:**  
I was tasked with building a single, well‑structured GitHub repository that aggregates all known FAANG interview questions—especially those focusing on machine learning—from reliable sources, provides clear problem statements, hints, and solutions in multiple languages, and allows contributors to add new problems or improve existing ones.

**Action:**  
I forked the public “ombharatiya/FAANG-Coding-Interview-Questions” repo, then reorganized its contents into a modular folder hierarchy: `ML`, `DSA`, `Systems`. I added a CI pipeline (GitHub Actions) to automatically run unit tests on any submitted solution. For each machine‑learning question I wrote concise explanations of the underlying concepts (e.g., bias–variance trade‑off, gradient descent convergence). I also created a “Contributing” guide that uses Markdown templates and includes linting rules for code quality. Finally, I promoted the repo via campus tech talks and LinkedIn, inviting industry peers to contribute.

**Result:**  
The repository now hosts over 150 FAANG‑style machine‑learning questions with multi‑language solutions, receives ~300 stars per month, and has been forked by 50+ students who used it for interview prep. I learned how to balance comprehensive documentation with maintainable code structure, and the importance of community engagement in sustaining a technical resource.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
