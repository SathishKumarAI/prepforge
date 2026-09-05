---
qid: ing_109bb2f15c__star__local
question: 'Explain: 🗺️ Integrations — GitHub - langwatch/langwatch: The platform for
  LLM evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 367
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:01:27-05:00'
sources: []
---

**Situation**  
In early 2024 my team was building an internal chatbot that leveraged GPT‑4 to answer product support queries. We needed a reliable way to evaluate model performance and iterate quickly, but our existing test suite only ran unit tests on the prompt generator. The metrics we cared about—answer relevance, hallucination rate, response time—were scattered across multiple scripts.

**Task**  
I was tasked with integrating LangWatch (the open‑source LLM evaluation platform) into our CI pipeline so that every PR would automatically run a full end‑to‑end evaluation against a curated benchmark set and produce a concise report for the reviewers.

**Action**  
First, I cloned `langwatch/langwatch` and forked it to add support for our custom prompt template. Using Docker Compose, I spun up LangWatch alongside our test database, exposing an API that accepted JSON payloads of user questions and model responses. I wrote a Python script in the CI job that sent each new commit’s output to LangWatch, parsed the returned metrics, and pushed them as comments on the PR via GitHub’s REST API. To keep build times short, I cached the benchmark dataset locally and only re‑downloaded it when the version tag changed.

**Result**  
The integration cut evaluation time from 45 minutes to under 12 minutes per run. Our review cycle shortened by 30 %, and we detected a hallucination rate drop from 18 % to 9 % after fine‑tuning prompts based on LangWatch’s feedback. I learned that tightly coupling an LLM testing framework with CI not only accelerates iteration but also builds confidence in model quality across the team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
