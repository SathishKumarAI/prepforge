---
qid: ing_60bf1fb1d3__star__local
question: 'Explain: Machines (ATS) — Software Engineer Resume - by Austen McDonald
  and Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 324
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:41:44-05:00'
sources: []
---

**Situation:** In my last role at a recruiting tech startup, we noticed that our automated screening system was misclassifying over 30% of high‑quality software engineer resumes as irrelevant because the parser struggled with unconventional formatting and domain jargon.

**Task:** I was tasked to redesign the resume ingestion pipeline so it could accurately extract skills, experience, and project details, boosting match accuracy by at least 20% while keeping processing time under 500 ms per document.

**Action:** First, I built a labeled dataset of 10k resumes using crowd‑sourced annotations. Then I trained a BERT‑based sequence labeling model to detect skill spans and role titles, fine‑tuned on our corpus. For formatting variations, I added a rule‑based fallback that normalizes headings and bullet lists. I integrated the model into our microservice stack with Docker/K8s, using GPU inference via ONNX Runtime to meet latency goals.

**Result:** After deployment, match accuracy improved from 68% to 89%, and we reduced false negatives by 22%. The system processed resumes in an average of 320 ms, enabling real‑time candidate ranking. I learned that combining deep learning with lightweight rule engines often yields the best trade‑off between precision and speed in production ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
