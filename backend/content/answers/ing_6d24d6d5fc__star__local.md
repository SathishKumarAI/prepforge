---
qid: ing_6d24d6d5fc__star__local
question: How would you A/B test an LLM-powered feature, and how does it differ from
  testing a ranking-model change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 473
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:05:32-05:00'
sources: []
---

**Situation**  
At my last company we launched an LLM‑powered “write‑a‑reply” assistant for customer support tickets. The team was worried that the new model might slow response time or produce less relevant answers compared to our rule‑based system.

**Task**  
I had to design an A/B test that measured both qualitative quality and latency, while ensuring we didn’t expose customers to obvious failures. I also needed to contrast this with how we’d test a ranking‑model tweak in the recommendation engine.

**Action**  
1. **Traffic routing** – 70 % of tickets went to the baseline, 30 % to the LLM, using feature flags so we could roll back instantly.  
2. **Metrics** – Primary KPI: “average time to first response” (ms) and secondary: “customer satisfaction score” (CSAT). I added a post‑response survey for a random 5 % of users to capture perceived relevance.  
3. **Statistical plan** – Powered the test to detect a 10 % latency increase at 95 % confidence, using an online Bayesian sequential test to stop early if results were clear.  
4. **Logging & monitoring** – Captured token usage and error rates; set up alerts for spikes in failed completions.

For a ranking‑model change, I would instead route users to two ranking pipelines but keep the same downstream LLM (or rule engine). The key difference is that ranking tests focus on *ordering* relevance metrics like click‑through rate or dwell time, and we can run them offline with simulated user interactions. The LLM test requires live human feedback because language generation quality isn’t fully captured by click data.

**Result**  
The A/B test ran for 3 weeks; the LLM improved CSAT by 12 % (from 4.2 to 4.6) while latency increased only 8 %. We rolled out the model company‑wide and reduced average ticket volume by 18 % over six months. I learned that combining live human feedback with automated metrics is essential for evaluating generative features, whereas ranking changes can rely more on click‑based signals and offline simulation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
