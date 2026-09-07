---
qid: ing_3f7fd7cec0__aws__local
question: 'Q: How do you choose between GPT-4o, Claude, and Gemini for a production
  application?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 434
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:49:18-05:00'
sources: []
---

**Situation & Task**  
I led the launch of an AI‑powered recommendation engine for our e‑commerce platform (30 M monthly users). We had to decide between GPT‑4o, Claude, and Gemini before integrating into a real‑time product feed.

**Action – Technical Design**  
1. **Requirements** – Low latency (<200 ms), high throughput (≈10k RPS), strict data privacy, cost ≤$0.03 per inference.  
2. **Evaluation** – Ran 5 k user‑scenario queries on each model, measured accuracy (BLEU), latency, and token cost.  
3. **Architecture** – Chose Gemini for its 1‑token‑per‑ms speed; wrapped it in an AWS Lambda@Edge + API Gateway layer for global edge caching.  
4. **Cost & Scaling** – Estimated $0.025 per inference → ~$75k/month at peak load, versus GPT‑4o’s $0.05 and Claude’s $0.04. Gemini offered 40 % lower cost and 30 % faster latency.

**Result**  
- Deployed Gemini with zero SLA violations in the first month.  
- User engagement rose by **12 %**, AOV increased from $48 to $54 (≈$6M incremental revenue).  
- Saved ~$25k/month on inference costs compared to GPT‑4o, freeing budget for UX research.

**Leadership Principles Reflected**  
- **Customer Obsession** – Chose the model that delivered fastest, most accurate recommendations.  
- **Ownership & Dive Deep** – Conducted end‑to‑end benchmarks, cost modeling, and built a resilient edge architecture.  

Bar‑raiser takeaway: demonstrate ownership by quantifying trade‑offs (latency vs cost), dive deep into data, and show tangible business impact while learning from prior failures (e.g., earlier trials with GPT‑4o that exceeded budget).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
