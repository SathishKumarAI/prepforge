---
qid: ing_6e63bcc6e7__star__local
question: 'Explain: Installation — GitHub - microsoft/semantic-kernel: Integrate cutting-edge
  LLM technology quickly and easily into your apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 337
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:08:14-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, we were building an automated compliance chatbot that needed instant access to the latest LLM models without long training cycles. Our existing stack was Python‑based with Docker and CI/CD on GitHub Actions.

**Task:**  
I had to integrate Microsoft’s Semantic Kernel into our product within two weeks so we could prototype intent extraction and knowledge retrieval from regulatory documents, while keeping deployment automated and secure.

**Action:**  
First, I cloned the `microsoft/semantic-kernel` repo and followed the README to set up a virtual environment (`python -m venv .venv`). Using `pip install -r requirements.txt`, I pulled in the kernel SDK and its dependencies. I then added a Dockerfile that installed the kernel via pip, copied our custom prompt templates, and exposed port 8000 for FastAPI. In GitHub Actions, I scripted a workflow (`semantic_kernel_ci.yml`) to run unit tests against the kernel API, build the image, and push it to Azure Container Registry. For authentication with the OpenAI endpoint, I stored the key in GitHub Secrets and used `AZURE_OPENAI_API_KEY` env variable during container runtime.

**Result:**  
Within ten days we had a fully functional LLM‑powered chatbot running on Kubernetes. Response latency dropped from 3 s to under 0.8 s, and our compliance coverage score rose by 12% in the pilot test. I learned how Semantic Kernel abstracts model management, allowing rapid iteration without managing large GPU clusters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
