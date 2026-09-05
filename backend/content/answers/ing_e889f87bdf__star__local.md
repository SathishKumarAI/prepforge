---
qid: ing_e889f87bdf__star__local
question: 'Explain: Docker Run vs Docker Compose — DevOps-SRE/1_Containers/Docker/Readme.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 337
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:13:14-05:00'
sources: []
---

**Situation:** In my last role, our team was launching a new micro‑service stack for a real‑time analytics platform. The CI pipeline had to spin up multiple containers—API, worker, Redis, and PostgreSQL—for integration tests on every commit.

**Task:** I needed a reliable way to orchestrate these services locally and in the build environment while keeping the configuration DRY and versionable.

**Action:** First, I used `docker run` scripts for quick one‑off launches during debugging. However, scaling to five containers quickly became error‑prone, so I switched to Docker Compose. In the `docker-compose.yml`, I defined service dependencies, network aliases, environment variables, and persistent volumes. I leveraged Compose’s `depends_on` and healthchecks to ensure order of startup, and used named volumes for PostgreSQL data persistence across runs. For CI, I added a `--quiet` flag and a custom compose file that swapped in test‑specific images (`api:test`, `worker:test`). This allowed us to run `docker-compose up --abort-on-container-exit -d` inside the pipeline, capturing logs with `docker-compose logs`.

**Result:** Switching to Compose cut our local dev setup time from 12 minutes (with multiple `docker run` commands) to under 3 minutes. In CI, test failures dropped by 40% because services were consistently started in the right order. I learned that while `docker run` is great for ad‑hoc debugging, Docker Compose brings declarative orchestration and reproducibility essential for modern DevOps workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
