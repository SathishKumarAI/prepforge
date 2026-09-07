---
qid: vq_da821dfcb6__aws__local
question: When do you get a .PLL extension ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 533
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:17:59-05:00'
sources: []
---

**Situation (S)**  
While leading the migration of our legacy on‑premise search service to a micro‑service architecture on AWS, I discovered that we were still using proprietary **PL/SQL packages** that generated `.pll` files for dynamic procedure loading. These files were critical for runtime compilation but caused cold‑start delays and made CI/CD pipelines brittle.

**Task (T)**  
I was tasked with modernizing the code base so that the service could run natively on AWS Lambda, reduce deployment time, and eliminate manual pre‑compilation steps—all while keeping SLA guarantees (< 2 s latency for 99.9% of queries).

**Action (A)**  
1. **Dive Deep** into the PL/SQL engine to understand when a `.pll` file is produced: it occurs only when a stored procedure contains dynamic SQL that cannot be resolved at compile time, forcing the database to generate a runtime‑linkable library.  
2. Refactored the offending procedures to use static SQL or bind variables, removing the need for dynamic compilation.  
3. Replaced the PL/SQL layer with **AWS RDS Aurora PostgreSQL** and migrated stored logic to **PostgreSQL functions** (no `.pll` equivalent).  
4. Implemented a CI pipeline using **GitHub Actions → AWS CodePipeline → Lambda Layers**, ensuring zero‑touch deployments.  
5. Benchmarked performance: cold start dropped from 1.8 s to < 0.3 s; throughput increased by 35% (10k QPS vs 7.6k). Cost per query fell from $0.00012 to $0.00007.

**Result (R)**  
By eliminating `.pll` files, we achieved a 45% reduction in deployment time and a 30% cost savings on compute resources while maintaining SLA compliance. The team now follows a “no‑runtime‑linking” policy, and the migration has become a repeatable pattern for other services.

**Leadership Principles Highlighted**  
- **Ownership** – Took full responsibility for the end‑to‑end modernization.  
- **Dive Deep & Bias for Action** – Investigated low‑level PL/SQL behavior and acted swiftly to refactor.  

This example demonstrates my ability to translate a technical nuance (when `.pll` files are generated) into a scalable, cost‑effective solution that directly benefits customers and the business.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
