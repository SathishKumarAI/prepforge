---
qid: ing_a39af89e28__aws__local
question: 'Explain: Self-Hosting with Docker Compose (for Local Development & Testing)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 555
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:37:02-05:00'
sources: []
---

**Situation / Task**  
I was tasked to give the new data‑science team a reliable way to spin up their ML pipeline locally so they could iterate faster before pushing code to SageMaker. The goal: 95 % of test runs should finish in under 10 min and cost < $0.05 per run.

**Action**  
I introduced **Docker Compose** as the local orchestration layer, mirroring our production architecture (SageMaker training jobs → ECR images).  

1. **Containerization** – Built lightweight Dockerfiles for each component: Jupyter, data‑prep script, model trainer, and a Postgres dev DB.  
2. **Compose file** – Defined services with `depends_on`, shared volumes (`/data`), and environment variables from `.env`.  
3. **AWS integration** – Pulled the same ECR image tags locally via `docker pull <ecr‑uri>:<tag>`, ensuring parity.  
4. **Metrics** – Instrumented each container with Prometheus exporters; logged CPU/memory usage to Grafana dashboards.  
5. **CI hook** – Added a GitHub Action that runs `docker compose up --abort-on-container-exit` on every PR, capturing logs and generating a JUnit report for SonarQube.

**Result**  
Local test throughput rose from 4 min per run (single‑process) to 2.8 min with Compose—**30 % faster**. Test coverage increased by **12 %** as developers could iterate on data pipelines without waiting for cloud provisioning. Cost per run dropped to <$0.02 because we reused the same container images.

**Leadership Principles & Bar‑raiser signals**  
- *Ownership*: I owned the end‑to‑end local dev workflow and maintained its documentation in Confluence.  
- *Dive Deep*: I analyzed resource usage logs, identified a 20 % memory over‑commit for the trainer container, and tuned the Dockerfile accordingly.  
- *Bias for Action*: Rolled out Compose within two sprints instead of waiting for an AWS‑only solution.  

The bar‑raiser would note my quantitative impact (speed & cost), depth of troubleshooting, and how I turned a local bottleneck into a scalable, cloud‑compatible pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
