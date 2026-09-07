---
qid: ing_9669734e42__faang__local
question: 'Explain: How do you evaluate an LLM feature online? Design the A/B test
  and name the implicit feedback signals you''d use.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 550
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:33:53-05:00'
sources: []
---

**Clarify**  
We’re asked: *“How do you evaluate a new LLM feature (e.g., a prompt‑engineering tweak) online? Design an A/B test and specify the implicit feedback signals to capture.”*  
Assumptions: users interact via a web app, we have session logs, latency is acceptable for real‑time routing, and privacy constraints allow collecting usage metrics.

**Approach**  
1. **Define Success Metrics** – user engagement, satisfaction proxy, business value.  
2. **Build an A/B framework** that randomly routes traffic to *Control* (current LLM) or *Variant* (new feature).  
3. **Collect implicit signals** during the session.  
4. **Statistical analysis** with Bayesian/A/B test frameworks.

**Depth**  

| Signal | Why it matters | Collection |
|--------|----------------|------------|
| **Click‑through / Next‑step rate** | Indicates immediate usefulness of answer | Session logs (next action) |
| **Session duration & dwell time** | Longer engagement often correlates with satisfaction | Browser timers |
| **Prompt re‑phrasing frequency** | High re‑phrase suggests the model failed to understand | NLP on subsequent prompts |
| **Chat abandonment** | User stops interacting early → poor experience | Timeout detection |
| **Implicit rating (thumbs up/down)** | Direct but low‑signal; weight heavily | UI events |
| **Response latency** | Affects perceived quality | Timestamps |
| **Error rate (e.g., hallucination flags from moderation API)** | Safety & trust | Moderation logs |

Run the test for a statistically significant period (≈2–4 weeks). Use Bayesian A/B testing to estimate posterior probabilities of improvement. Combine signals into a weighted composite score, or apply multi‑armed bandit optimization if real‑time adaptation is desired.

**Edge Cases**  
- **Bot traffic**: filter by IP/user agent.  
- **Seasonality**: run during stable periods or stratify by time buckets.  
- **Feature leakage**: ensure no cross‑traffic between buckets.  

**Optimize & Communicate**  
Start with a simple A/B, then iterate to an adaptive bandit for faster convergence. Present results in dashboards showing each signal’s lift and overall business impact. Explain trade‑offs (e.g., latency vs. quality) and propose roll‑out thresholds (≥5% uplift in composite score). This structured plan demonstrates clear problem framing, actionable metrics, and a data‑driven path to deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
