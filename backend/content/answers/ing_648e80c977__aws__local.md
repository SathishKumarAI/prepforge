---
qid: ing_648e80c977__aws__local
question: 'Q: When would you self-host vs use API providers?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 402
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:12:26-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a recommendation engine that had to scale from 10 k users to 1 M+ daily active users while keeping latency under 50 ms. The decision was whether to self‑host the model or rely on an external API (e.g., OpenAI).

**Action**  
I performed a **cost‑benefit dive deep**:  

| Metric | Self‑Host (SageMaker + EFS) | External API |
|--------|-----------------------------|--------------|
| Latency | 30 ms (in‑region) | 70 ms (network hop) |
| Cost / 1M requests | $0.02 | $0.05 |
| Data privacy compliance | Full control | Shared data with vendor |

I built a **serverless inference stack** on SageMaker Edge Manager + Lambda, adding an autoscaling EFS cache to keep warm embeddings. I also added a “fallback” API path for edge cases and ran A/B tests.

**Result**  
- Reduced latency by **43 %**, improving conversion by 3.2 % (≈$12K/month).  
- Cut inference cost from $50k to $20k per month.  
- Maintained GDPR compliance, eliminating vendor‑shared data risk.

**Leadership Principles Highlighted**  
*Customer Obsession*: I chose the option that delivered faster, more reliable recommendations.  
*Ownership & Dive Deep*: I built and iterated on a custom solution rather than settling for a quick API call.

**Bar‑raiser takeaway**  
Show ownership by quantifying impact, dive deep into trade‑offs, and learn from failure (the early prototype had 80 ms latency; we refactored to edge inference).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
