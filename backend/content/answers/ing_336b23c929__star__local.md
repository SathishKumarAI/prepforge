---
qid: ing_336b23c929__star__local
question: A Copilot chat feature has a p95 latency budget of 3 seconds to first useful
  content. Where does the time go, and how do you cut it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 317
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:11:28-05:00'
sources: []
---

**Situation:**  
I was on the backend team for our new AI‑powered Copilot chat in a SaaS product that serves 120 k concurrent users. The engineering manager set a strict p95 latency budget of 3 seconds to first useful content, but initial tests were hitting 4.2 seconds.

**Task:**  
Reduce the latency to meet the 3‑second target while keeping response quality and system stability intact.

**Action:**  
1. Instrumented every stage: request routing (NGINX), load balancer health checks, model inference pipeline, and response formatting.  
2. Identified that 60 % of the delay came from the language‑model API call—our GPU pool was oversubscribed and the batch size was too large for real‑time requests.  
3. Implemented a hybrid strategy: (a) added a lightweight “fallback” model with a 0.8 s inference time for low‑complexity prompts, and (b) reconfigured the primary GPU scheduler to use dynamic batching based on request queue depth.  
4. Optimized serialization by moving from JSON to MessagePack, cutting payload parsing time by ~150 ms.

**Result:**  
Latency dropped to 2.6 seconds p95, a 38 % improvement. User satisfaction scores rose from 82 % to 94 %. Learned that profiling each hop and selectively offloading simpler tasks can deliver big gains without sacrificing model quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
