---
qid: ing_acb0252778__star__local
question: 'Explain: Use .dockerignore — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 334
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:17:46-05:00'
sources: []
---

**Situation**  
I was building a production‑ready container for a PyTorch inference service that bundled over 2 GB of pretrained model weights and a large data science stack (NumPy, pandas). Every time I pushed a new code change, the image build took 45 minutes and hit the registry quota.

**Task**  
Reduce build time and image size without losing reproducibility or missing dependencies. The goal was to get CI pipeline times under 10 minutes while keeping the container functional for downstream deployments.

**Action**  
I created a `.dockerignore` file that excluded everything except the `src/`, `requirements.txt`, and minimal test data. I added patterns like `*.pth`, `data/`, and `logs/`. Then I updated the Dockerfile to copy only those whitelisted items, install dependencies in a virtualenv layer, and copy the model weights from an external artifact store at runtime using an entrypoint script that pulls the latest checkpoint via S3. I also used multi‑stage builds so that the heavy training environment existed only in the builder stage.

**Result**  
Build times dropped from 45 minutes to 8 minutes, and the final image shrank from 2.4 GB to 350 MB—a 85% reduction. The service still launched instantly, and we could roll out new versions every hour during A/B testing. I learned that a disciplined `.dockerignore` is as critical for ML pipelines as version control is for code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
