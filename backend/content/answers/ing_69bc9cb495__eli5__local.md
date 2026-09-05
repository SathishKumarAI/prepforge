---
qid: ing_69bc9cb495__eli5__local
question: 'Explain: Deployment options ⚓️ — GitHub - langwatch/langwatch: The platform
  for LLM evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 304
total_tokens: 484
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:23:19-05:00'
sources: []
---

Think of the **langwatch** project as a smart robot that can learn new tricks (LLM evaluations) and then try them out in different rooms (AI‑agent tests).  
Deploying it is like choosing where to put this robot:  

* **Local run** – you keep the robot in your own workshop. You install everything on your laptop or server, pull the code from GitHub, run a Docker container or a Python script, and it works just for you.  
* **Cloud service (e.g., AWS, GCP, Azure)** – you let the robot live in a big building with plenty of power. You push the repo to a cloud VM or a managed Kubernetes cluster, then the platform automatically builds the image, starts containers, and scales them if many users want to test different models at once.  
* **Managed hosting (GitHub Actions + GitHub Pages)** – you let GitHub itself run the robot whenever you push changes. It spins up a temporary environment, runs tests, and publishes results as a static website.

Each option trades control for convenience: local gives full command, cloud offers scalability, and GitHub Actions gives quick, cost‑free demos. Choose based on how many users you expect, how fast you need results, and whether you want to keep the robot in your own space or let someone else host it for you.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
