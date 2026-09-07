---
qid: ing_b1c9c62bb5__faang__local
question: 'Can we catch it in production? — That Is Embarrassing: Why Frontier AI
  Still Makes Things Up, and What to Do About It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 396
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:37:16-05:00'
sources: []
---

**Clarify**  
We’re asked whether an AI model that “still makes things up” (hallucination) can be caught in production and what mitigation steps are viable. Key assumptions: the system is a deployed LLM serving user queries, we have monitoring, logging, and limited computational budget for real‑time checks.

**Approach**  
1. Instrument every request/response pair.  
2. Run lightweight sanity filters (e.g., factuality score, entity overlap with knowledge base).  
3. If flagged, either surface a disclaimer or route to human review.  
4. Continuously retrain on flagged samples (“self‑supervised hallucination detection”).

**Depth**  
- **Detection:** Use a secondary model that predicts hallucination probability based on token patterns and external QA pairs; complexity O(n) per token but can be batched.  
- **Mitigation:** Prompt engineering (add “source: …” instructions), fine‑tune with retrieval‑augmented generation to anchor outputs in known facts.  
- **Monitoring:** Aggregate flag rates over time; alert when spikes exceed threshold.  
Trade‑off: Extra latency vs. safety; we keep detection lightweight so latency < 100 ms.

**Edge Cases**  
- Rare, domain‑specific terminology may be misclassified as hallucination.  
- Over‑censoring can degrade user experience.  
Testing: synthetic queries with known truths/falsehoods and real traffic A/B splits.

**Optimize & Communicate**  
Start with a “safe‑by‑default” policy: auto‑flag low‑confidence answers, then progressively lower thresholds as the model matures. Explain to stakeholders that hallucination detection is an ongoing loop—monitor → retrain → deploy. This showcases structured reasoning, clear trade‑offs, and depth expected by FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
