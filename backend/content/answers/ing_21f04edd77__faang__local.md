---
qid: ing_21f04edd77__faang__local
question: 'Explain: Tell me about a time you owned a customer-facing problem end to
  end.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 442
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:03:33-05:00'
sources: []
---

**Clarify**  
I’ll share an instance where I led the redesign of our AI‑powered recommendation engine that directly impacted user engagement on a streaming platform. The goal was to reduce friction in content discovery and increase average watch time by at least 15 % over six months.

*Assumptions:*  
- We have production data pipelines, A/B testing framework, and a cross‑functional team (engineering, product, analytics).  
- Stakeholders expect measurable lift in key metrics (CTR, session length).  

**Approach**  
1. **Stakeholder alignment:** mapped business goals to technical requirements.  
2. **Data audit:** identified gaps in user interaction logs; added missing clickstream events.  
3. **Model refresh:** trained a new hybrid content‑based + collaborative filter model using PyTorch, evaluated offline with precision@k and NDCG.  
4. **Infrastructure upgrade:** migrated inference to a low‑latency serving layer (TensorRT) on GPU instances.  
5. **Rollout strategy:** staged A/B rollout with 1 % traffic, monitoring for latency or error spikes before scaling to 100 %.  

**Depth**  
- Offline metrics: NDCG@10 improved from 0.32 to 0.45.  
- Live A/B: CTR up 18 %, average session time +16 %.  
- Latency target <50 ms; achieved 38 ms on average.  
- Cost per inference reduced by 22 % through model pruning.

**Edge Cases**  
- Cold‑start users → hybrid fallback to popularity baseline.  
- API failures → graceful degradation to cached recommendations.  
- Data drift → scheduled re‑training every 30 days.

**Optimize & Communicate**  
I presented weekly dashboards to executives, highlighting lift and cost savings. Post‑launch, I instituted a feedback loop: log anomalies, run monthly model health checks, and plan incremental feature expansions (e.g., contextual embeddings). This end‑to‑end ownership ensured measurable business impact while maintaining system reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
