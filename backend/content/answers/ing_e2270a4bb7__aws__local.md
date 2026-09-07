---
qid: ing_e2270a4bb7__aws__local
question: 'Explain: You always have to go ask the — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 385
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:50:54-05:00'
sources: []
---

**Situation / Task**  
When I joined Google Cloud’s ML platform team, the goal was to move from a monolithic training pipeline to a modular, reusable “build‑and‑go” system that could serve dozens of internal products. The challenge: make it fast enough for data scientists and robust enough for production workloads.

**Action**  
I owned the redesign, driving a **Customer Obsession** mindset by interviewing 12 teams to surface pain points (slow job turnaround, brittle dependency handling). I applied **Dive Deep** to the existing codebase: traced latency spikes in the training orchestrator, uncovered a single‑point failure in the artifact registry, and quantified that 30 % of failures came from stale dependencies.  
The solution was a container‑based microservice architecture on Kubernetes, with an immutable image store (Artifact Registry) and a lightweight job scheduler (Kubeflow Pipelines). I introduced **AWS S3**‑compatible storage for artifacts to enable cross‑region replication, and used **CloudWatch** metrics to auto‑scale workers.  
To keep costs in check, I implemented spot‑instance pooling and set a budget guardrail that reduced training spend by 22 % while maintaining SLA of <5 min job start time.

**Result**  
Within three months the platform handled 4× more jobs, cut failure rates from 12 % to 2.3 %, and saved $1.8M annually. The team adopted a “build‑once‑use‑many” culture that continues to drive innovation across Google Cloud ML services.

*Bar‑raiser notes*: clear ownership of metrics, deep technical dive, quantified business impact, and learning loop (continuous monitoring & iteration).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
