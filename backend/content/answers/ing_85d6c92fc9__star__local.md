---
qid: ing_85d6c92fc9__star__local
question: 'Explain: Um how much you personalize the search — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 320
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:00:48-05:00'
sources: []
---

**Situation**  
When I joined the Search Personalization team, we were tackling a spike in bounce rates for users searching health‑related queries—our click‑through rate had dropped from 35% to 28% over two months.

**Task**  
I was tasked with designing an end‑to‑end recommendation pipeline that could surface personalized snippets without violating privacy or inflating latency beyond the 200 ms target.

**Action**  
First, I built a lightweight user profile model using hashed browsing tokens and differential privacy guarantees. Then I integrated it into our serving layer by adding a two‑stage ranking: a fast, rule‑based filter to keep latency low, followed by a neural re‑ranker (a fine‑tuned BERT encoder) that scores candidate snippets against the user vector. We deployed A/B tests with 5 M users and added an adaptive learning loop that updated profiles every 24 h based on click feedback. To manage compute, we used TensorRT inference on TPUs and cached top 10 results per session.

**Result**  
Within three weeks of rollout, the personalized snippet feature lifted overall CTR by 12% (from 28% to 31%) and reduced bounce rate by 18%. I learned that balancing strong personalization with strict latency constraints requires a hybrid architecture—rule‑based filters for speed and neural models for depth—while privacy‑preserving user signals keep the system trustworthy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
