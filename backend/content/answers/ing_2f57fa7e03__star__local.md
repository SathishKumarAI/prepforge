---
qid: ing_2f57fa7e03__star__local
question: 'Explain: The Workflow — AI Coding Workflow - by Neo Kim and Louis-Fran\u00e7ois
  Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 403
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:03:22-05:00'
sources: []
---

**Situation:**  
During a sprint at my previous company, we had to prototype a chatbot that could answer customer support queries in real time. The product owner wanted a working demo within two weeks, but the team was split between data scientists and software engineers, and there were no clear guidelines on how to integrate the model into production.

**Task:**  
I needed to design an end‑to‑end AI coding workflow that would let us iterate quickly on both the NLP model and the deployment pipeline while keeping everyone aligned on version control, testing, and monitoring.

**Action:**  
I adopted Neo Kim’s “AI Coding Workflow” framework. First, I set up a GitHub repo with separate branches for “data”, “model”, and “app”. For each iteration, data scientists pushed cleaned datasets to the “data” branch, triggering an automated CI job that ran unit tests on preprocessing scripts. The model branch housed a lightweight PyTorch script wrapped in Docker; each push fired a container build and ran integration tests against a mock API. Finally, the app branch contained FastAPI code that pulled the latest model artifact from S3. I used GitHub Actions to orchestrate the pipeline: linting, static analysis, unit tests, and deployment to a staging Kubernetes cluster. We also added Prometheus metrics for inference latency and accuracy scores, feeding back into the next iteration.

**Result:**  
The demo launched on day 12 with an average response time of 120 ms and a BLEU score improvement of 8% over the baseline after just two iterations. The workflow cut our cycle time from 4 days to 1 day per model release, and it became the company standard for all future AI projects. I learned that treating data, code, and deployment as separate but tightly coupled stages—each with its own CI pipeline—makes rapid, reliable AI delivery possible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
