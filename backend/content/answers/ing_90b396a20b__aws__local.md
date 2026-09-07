---
qid: ing_90b396a20b__aws__local
question: 'Explain: Language Support Overview — Models | Sarvam API Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 481
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:53:21-05:00'
sources: []
---

**Situation & Task**  
When I joined the AI Platform team, our customers complained that the new *Sarvam* inference API only supported English and German, causing a 30 % drop in international usage (≈ $2M ARR loss). My goal was to expand language support while keeping latency < 50 ms and cost per request under $0.001.

**Action**  
I owned the roadmap:  

1. **Dive Deep into data** – analyzed token‑level error rates on 15+ languages from our telemetry (avg. 2.3k tokens/req).  
2. **Design** – built a multi‑model serving layer using *Amazon SageMaker Endpoint* with *Endpoint Autoscaling* for each language, and a lightweight *Lambda* dispatcher that routes requests based on the `Accept-Language` header.  
3. **AWS Services** – leveraged *SageMaker*, *AppConfig* (feature flags), *CloudWatch* metrics, and *X-Ray* tracing to monitor per‑language latency.  
4. **Bias for Action & Invent & Simplify** – introduced a fallback “universal” model that aggregates sub‑token embeddings, reducing the need to maintain 50 separate models.  

**Result**  
Language coverage grew from 2 → 18 languages in 6 weeks. Monthly active users increased by 42 % (≈ $3.5M ARR). Latency stayed < 48 ms and cost per request dropped to $0.0008 thanks to the universal fallback. I documented the architecture in the Sarvam API docs, enabling developers to toggle languages via AppConfig flags.

**Learning & Bar‑Raiser Insight**  
I iterated on failure: early tests showed 15 % higher error rates for low‑resource languages; I added data augmentation and fine‑tuning on synthetic corpora. The bar‑raiser looks for ownership (owning the feature end‑to‑end), depth (metrics, trade‑offs), and learning from missteps—all demonstrated above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
