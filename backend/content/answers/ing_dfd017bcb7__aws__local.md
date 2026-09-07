---
qid: ing_dfd017bcb7__aws__local
question: 'Explain: Self-host an open-weights model or call a provider API - walk
  me through the decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 444
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:45:39-05:00'
sources: []
---

**Situation / Task**  
I was leading a new recommendation feature for our e‑commerce app that required real‑time text classification. The team had to decide whether to self‑host an open‑weights model (e.g., Hugging Face) or use a managed provider API (AWS Bedrock).

**Action**  
*Customer Obsession & Ownership* – I gathered customer‑impact data: latency tolerance (≤ 200 ms), daily inference volume (~1M requests), and budget constraints ($15k/month).  
*Dive Deep* – I benchmarked an open‑weights transformer on a single **g4dn.xlarge** vs. Bedrock’s `anthropic.claude-3-haiku-20240307`.  
  * Self‑host: 120 ms avg, 0.5 % CPU idle, $1.2k compute/month.  
  * Provider API: 80 ms avg, $10k/month, zero ops overhead.  

*Bias for Action & Deliver Results* – I built a cost‑vs‑performance curve and presented it to leadership. The model’s accuracy difference was < 0.3 %—negligible compared to the 7× cost differential.  
I chose Bedrock, added a **Lambda** edge cache layer (TTL 10 s) to shave API latency by ~15 ms, and set up CloudWatch metrics for real‑time monitoring.

**Result**  
Launch succeeded with < 90 ms average inference latency, 99.9% availability, and a $3k/month saving over the first year. The decision was validated when user engagement rose 12% after deployment.  

**Bar‑raiser cues** – I demonstrated full ownership (budget & performance), deep technical dive (benchmarks + cost model), quantified impact (latency, cost, engagement), and learned from a prior misstep where we underestimated provider latency during a pilot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
