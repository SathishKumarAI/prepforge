---
qid: ing_b52ce35339__star__local
question: 'Explain: Availability Numbers — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 369
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:33:57-05:00'
sources: []
---

**Situation:**  
While leading a fraud‑detection pipeline for a fintech client, the business required 99.9% uptime during peak trading hours to avoid loss of revenue and regulatory penalties.

**Task:**  
I had to estimate the system’s availability using a quick back‑of‑the‑envelope calculation that could guide architecture choices—whether to add redundancy or accept a single point of failure.

**Action:**  
First, I broke the stack into three tiers: data ingestion, model inference, and post‑processing. For each tier, I logged historical MTBF (mean time between failures) from our ops dashboards: ingestion ≈ 720 h, inference ≈ 480 h, post‑proc ≈ 840 h. Assuming independence, I computed the overall availability \(A = 1 - \prod(1 - \frac{MTBF_i}{MTBF_i + MTTR})\), using an estimated MTTR of 30 min for each tier. Plugging in the numbers gave an approximate uptime of 99.73%. To hit 99.9%, I identified inference as the bottleneck and proposed a dual‑replica model serving cluster with health checks, reducing its MTBF to 1,200 h.

**Result:**  
After implementing the replica and updating our monitoring, real‑time availability rose to 99.92% over the next quarter—saving an estimated $1.2 M in avoided downtime costs. I also learned that even a simple back‑of‑the‑envelope can pinpoint architectural trade‑offs before investing in costly infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
