---
qid: ing_a39af89e28__star__local
question: 'Explain: Self-Hosting with Docker Compose (for Local Development & Testing)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 360
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:00:21-05:00'
sources: []
---

**Situation:**  
When my team was prototyping a new AI‑powered recommendation engine, our CI pipeline kept flapping because the GPU‑enabled inference service required a very specific CUDA toolkit and driver stack that only existed on a dedicated server.

**Task:**  
I had to create a reproducible local environment so developers could spin up the entire stack—data ingestion, model training, and inference—without needing an external GPU host, while keeping the setup lightweight enough for laptops with limited resources.

**Action:**  
I designed a `docker-compose.yml` that defined three services: a Postgres database, a Flask API wrapped in Gunicorn, and a TensorFlow serving container. I used build‑args to pin CUDA 11.8 on the inference image and added a conditional `runtime: nvidia` block so the container would fall back to CPU mode if no GPU was detected. For local testing, I exposed the API on port 8000 and mounted a shared volume for model checkpoints. I also created a Makefile target that runs `docker compose up --build` with environment variables sourced from a `.env.dev`, allowing developers to override ports or memory limits on the fly.

**Result:**  
After deployment, each developer could launch the full stack in under 30 seconds on their laptop, and we saw a 40 % drop in merge‑conflict errors related to dependency mismatches. The reproducible setup also cut onboarding time for new hires by roughly two days. I learned that a well‑documented Compose file can bridge the gap between complex GPU workloads and everyday local development without sacrificing performance or consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
