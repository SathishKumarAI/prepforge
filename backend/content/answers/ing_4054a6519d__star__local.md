---
qid: ing_4054a6519d__star__local
question: What are the disadvantages of SSDs? — What is an SSD (Solid-State Drive)?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 333
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:36:53-05:00'
sources: []
---

**Situation:**  
During a data‑center migration project for our SaaS platform, we were replacing aging spinning disks with SSDs to cut query latency. The team was excited but the cost budget was tight, and I had to justify any potential trade‑offs.

**Task:**  
My job was to evaluate whether SSDs would introduce hidden disadvantages that could impact long‑term reliability or operational costs, and propose mitigation steps so we wouldn’t overpay for performance alone.

**Action:**  
I ran a series of write‑intensity benchmarks on our OLTP workloads, monitoring write amplification and IOPS degradation over time. Using SMART metrics and controller firmware logs, I identified that after ~3 TB written per drive the SSDs hit 70 % wear‑leveling saturation, causing an average drop in sustained writes from 500 IOPS to 300 IOPS. I compared this with a hybrid tier: keep hot data on SSDs but move cold, write‑heavy logs to HDDs, and implemented automated tiering via our storage orchestration layer (using Ceph’s RADOS). I also factored in the higher upfront cost (~$150/GB) versus projected maintenance savings.

**Result:**  
The hybrid approach cut total storage spend by 25 % while maintaining <10 ms latency for hot queries. We avoided premature SSD failure and kept our SLA intact, learning that performance gains can be offset by wear‑out costs if write patterns aren’t considered.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
