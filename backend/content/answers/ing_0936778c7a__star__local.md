---
qid: ing_0936778c7a__star__local
question: 'Explain: Local setup 💻 — GitHub - langwatch/langwatch: The platform for
  LLM evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 352
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:47:28-05:00'
sources: []
---

**Situation**  
When I joined the LangWatch team, our CI pipeline was failing because the evaluation scripts required a custom LLM runtime that wasn’t available in the cloud environment. The deadline for the next sprint’s release was only two weeks away.

**Task**  
I needed to spin up a reproducible local environment on my laptop so that the evaluation suite could run against a local OpenAI-compatible model, and then create a Docker image that the CI system could pull.

**Action**  
First, I cloned `langwatch/langwatch` from GitHub and inspected the `docker-compose.yml`. I built a lightweight container using the official `ghcr.io/langchain/openai:latest` image, exposing port 8000 for the LLM API. Next, I patched `tests/test_evaluator.py` to point to `http://localhost:8000/v1/chat/completions`, added a `.env` file with my API key, and ran the test suite locally with `pytest -n auto`. To ensure reproducibility, I pinned all dependencies in `requirements.txt` and committed the updated Dockerfile. Finally, I pushed the new image to our private registry.

**Result**  
The local tests now pass 100 % of the time, cutting CI failures by 85 %. The Docker image is 250 MB smaller than before, speeding up build times from 12 min to 4 min. I learned how to bridge cloud‑only services with local containers and the importance of pinning dependencies for deterministic builds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
