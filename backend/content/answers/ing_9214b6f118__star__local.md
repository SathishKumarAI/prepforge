---
qid: ing_9214b6f118__star__local
question: 'Explain: Dockerfile — Top 8 Must-Know Docker Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 512
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:25:19-05:00'
sources: []
---

**Situation**  
When launching a production‑grade recommendation system for an e‑commerce client, the dev‑ops team struggled with inconsistent model deployments across staging and production. The ML engineers kept shipping new TensorFlow models but each environment had different CUDA drivers and library versions, causing hard‑to‑debug failures.

**Task**  
I was asked to build a reproducible deployment pipeline that isolated every model version, documented best practices, and reduced “works on my machine” incidents by at least 90 %.

**Action**  
I created a multi‑stage Dockerfile and wrote an internal cheat‑sheet covering the top eight concepts:  
1. **Base images** – using `nvcr.io/nvidia/tensorflow:22.12-py3` to lock CUDA/CUDNN.  
2. **Layer caching** – separating requirements installation from code copy so pip installs only when `requirements.txt` changes.  
3. **WORKDIR & COPY** – keeping the container filesystem minimal and readable.  
4. **ARG vs ENV** – passing runtime flags (e.g., batch size) without rebuilding images.  
5. **Health‑check** – a lightweight `/health` endpoint that pings the inference model.  
6. **Multi‑stage builds** – compiling C++ extensions in one stage and stripping them out of the final image to keep size < 400 MB.  
7. **Entrypoint vs CMD** – using `ENTRYPOINT ["python", "-m"]` for flexibility while keeping default command as the inference server.  
8. **Image tagging & versioning** – semantic tags (`model‑v1.2.0`, `sha256:…`) and automated Docker Hub promotion via GitHub Actions.

I also added a `docker-compose.override.yml` for local debugging with GPU passthrough, ensuring parity between dev and prod.

**Result**  
The new pipeline cut deployment time from 30 minutes to under 5 minutes, reduced environment‑related failures by 93 %, and lowered image size from 1.2 GB to 380 MB. The team now routinely publishes immutable model images, and I documented the process in a playbook that has been adopted across all ML projects in the organization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
