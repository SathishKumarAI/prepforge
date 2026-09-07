---
qid: ing_a39af89e28__faang__local
question: 'Explain: Self-Hosting with Docker Compose (for Local Development & Testing)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 555
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:05:21-05:00'
sources: []
---

**Clarify**  
You want to run an AI stack locally—data ingestion, model serving, inference—using Docker Compose so developers can spin up the entire environment quickly and tear it down after testing.

Assumptions:  
* All containers share a common network; data persistence is required for training artifacts.  
* You’ll need GPU support (nvidia‑docker) or CPU fallback.  
* The stack includes at least one model server (e.g., TorchServe), a database, and a frontend UI.

**Approach**  
1. Define each service in `docker-compose.yml`.  
2. Use volume mounts for code and model checkpoints so changes propagate instantly.  
3. Bind GPU devices via the `deploy.resources.devices` section or the NVIDIA runtime.  
4. Expose ports only needed locally (e.g., 8501 for UI, 8080 for REST).  

**Depth**  
```yaml
services:
  torchserve:
    image: pytorch/torchserve:latest
    volumes:
      - ./models:/models
      - ./config:/config
    command: ["torchserve", "--start", "--model-store", "/models"]
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu]
  db:
    image: postgres:13
    environment: {POSTGRES_DB: ai, POSTGRES_USER: user, POSTGRES_PASSWORD: pass}
    volumes: [db_data:/var/lib/postgresql/data]
  ui:
    build: ./ui
    ports: ["8501:8501"]
volumes: { db_data: {} }
```
*Time‑to‑spin:* ~30 s; *Memory footprint:* ~4–8 GB (GPU).  
Trade‑off: Docker networking adds latency to inter‑service calls; mitigated by using `network_mode: bridge`.

**Edge Cases**  
* GPU driver mismatches → container fails to start. Test with `nvidia-smi`.  
* Volume permission errors when editing models from host. Verify UID/GID mapping.  
* Port conflicts on CI runners—use dynamic port allocation.

**Optimize & Communicate**  
Add a `.env` file for secrets, enable `depends_on` to control startup order, and expose healthchecks (`healthcheck: test: ["CMD-SHELL", "curl -f http://localhost:8080/health"]`). Explain these choices in an interview as evidence of production‑ready thinking: clear service boundaries, GPU awareness, data persistence, and robust testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
