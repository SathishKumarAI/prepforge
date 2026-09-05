---
qid: ing_4126c26d84__fp__local
question: 'Explain: Other agents ship a demo. Remy ships an app.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 372
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:23:15-05:00'
sources: []
---

In the **agent‑centric** view of machine learning systems, *demonstrations* and *applications* are two distinct artifacts that serve different stages of the development pipeline.

| Artifact | Purpose | Typical content | Deployment context |
|----------|---------|-----------------|--------------------|
| **Demo** | Show a proof‑of‑concept (PoC) to stakeholders. | Trained model weights, inference code, a minimal UI or API endpoint, and a few curated inputs. | Often run in isolated sandboxes (e.g., Docker containers) for quick feedback loops. |
| **App** | Deliver a production‑ready product that users interact with daily. | Full stack: user interface, back‑end services, data pipelines, monitoring hooks, and deployment scripts. | Hosted on scalable cloud platforms; requires observability, fault tolerance, and compliance guarantees. |

The key insight is that *demonstrations* are **evaluation‑centric**—they answer “Does the model work?” while *applications* are **operations‑centric**—they answer “Can we run this reliably at scale?”. This distinction emerges from the underlying optimization principle: a demo minimizes cost (time, compute) to validate objective functions; an app maximizes utility under constraints (latency, availability, security).  

Non‑obvious point: Many teams mistakenly treat demos as production code. The resulting “demo‑app” inherits brittle data pipelines and untested scaling logic, leading to costly rewrites once the product goes live. By treating them as separate stages, you preserve modularity and reduce technical debt.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
