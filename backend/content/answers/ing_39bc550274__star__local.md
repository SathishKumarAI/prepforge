---
qid: ing_39bc550274__star__local
question: 'Title: SWE-bench: Can Language Models Resolve Real-World GitHub Issues?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 364
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:24:12-05:00'
sources: []
---

**Situation:**  
At my previous company we had a growing list of open‑source GitHub issues for our data‑pipeline library. By Q3 the issue backlog hit 350 tickets—mostly small bugs and refactor requests—and each pull request took an average of 4 days to review, delaying releases.

**Task:**  
I was asked to prototype an automated triage system that could suggest actionable fixes using a large language model (LLM), reducing reviewer workload and cutting time to merge by at least 30%.

**Action:**  
I integrated OpenAI’s GPT‑4 into our CI pipeline. For every new issue, the LLM parsed the description, extracted relevant code snippets from the repo, and generated an initial patch using a prompt that included the repository’s coding style guidelines. I then wrapped this in a GitHub Action that produced a draft PR with the suggested changes, adding a confidence score and a “human‑review” flag. To keep costs reasonable, I throttled requests to 10 per minute and cached embeddings of common error patterns using FAISS.

**Result:**  
Within two weeks we saw the average review time drop from 4 days to 2.5 days—a 37% reduction—and 18 of the 25 first draft PRs were merged without further changes. The experiment also highlighted that LLMs struggle with environment‑specific dependencies, so I added a fallback rule to skip patches for issues flagged as “runtime” problems. This project taught me how to balance model accuracy with operational constraints and how to iterate quickly on an ML‑driven tooling prototype.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
