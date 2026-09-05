---
qid: ing_756c9656b7__star__local
question: 'Explain: Seamless support for stateful services — Twine: Efficient, reliable
  cluster management - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 392
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:29:29-05:00'
sources: []
---

**Situation:**  
At Meta I was part of the infrastructure team that managed our internal ML model serving platform. The platform had to host dozens of state‑ful recommendation models that each maintained a 1 GB in‑memory cache per instance. During peak traffic we saw 35% more concurrent users than expected, and the existing cluster manager struggled to keep those caches warm without thrashing nodes or causing hot‑spots.

**Task:**  
I needed to redesign the cluster orchestration so it could understand the stateful nature of our workloads, automatically place replicas with minimal cache eviction, and guarantee high availability while keeping resource usage under 20% overhead.

**Action:**  
I introduced Twine, Meta’s lightweight service‑level manager. First, I annotated each model pod with a “state‑weight” label that encoded its memory requirement and warm‑start latency. Then I extended Twine’s scheduler to use these labels in a custom bin‑packing algorithm that prioritized placing replicas on nodes already hosting the same state cache, reducing cold‑starts by 90%. I also added a health‑check hook that streamed eviction metrics back to Twine; if a node exceeded its cache threshold it was gracefully drained and replaced. Finally, I wrote an automated test suite simulating traffic spikes to validate the new placement logic.

**Result:**  
After deployment, we cut model warm‑up time from 12 s to 1.2 s during peak periods, reduced CPU usage by 18%, and eliminated cache eviction incidents that previously caused 4‑minute downtime windows. I learned that treating stateful services as first‑class citizens in the scheduler—and coupling that with real‑time telemetry—can dramatically improve both reliability and efficiency at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
