---
qid: ing_61b461e701__faang__local
question: 'Explain: Sign up at langwatch.ai or run self-hosted Docker'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 548
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:30:58-05:00'
sources: []
---

**Clarify**  
You’re asked to explain how a user can access LangWatch.ai: either by creating an account on the public site or by deploying it locally with Docker. I’ll assume the user wants to start monitoring language models, not that they need enterprise licensing.

**Approach**  
1. Outline the two onboarding paths.  
2. Detail the steps for each path.  
3. Highlight trade‑offs (speed vs control).  

**Depth**  
- **Sign‑up flow:**  
  1. Visit `langwatch.ai`.  
  2. Click *Create account* → enter email, password, optional SSO.  
  3. Verify email, log in.  
  4. On first launch, the SaaS backend auto‑provisions a workspace, configures API keys for your target LLMs, and streams metrics to the dashboard.  
  5. You’re ready in ~2 min; no infrastructure management required.

- **Self‑hosted Docker:**  
  1. Install Docker CE (≥20.x).  
  2. Pull image: `docker pull langwatch/langwatch:latest`.  
  3. Run container with env vars for LLM API keys and DB creds, e.g.:  
     ```bash
     docker run -d \
       --name=langwatch \
       -p 8080:80 \
       -e LANGWATCH_API_KEY="…" \
       -v /var/langwatch/data:/data \
       langwatch/langwatch:latest
     ```  
  4. Inside the container, LangWatch starts a Flask/Node backend and an InfluxDB instance (or you can mount your own DB).  
  5. Access UI at `http://localhost:8080`.  
  6. You control scaling, data residency, and can patch the image.

**Edge Cases**  
- SaaS: Limited customisation; billing may be a blocker for high‑volume usage.  
- Docker: Requires local resources; need to manage updates, backups, and network security manually.

**Optimize & Communicate**  
For most users, sign‑up is fastest—ideal for prototypes or small teams. For regulated industries or when data must stay on-premises, Docker gives full control at the cost of ops overhead. I’d recommend a hybrid: start with SaaS to validate use‑case, then migrate to self‑hosted if compliance demands it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
