---
qid: ing_034eac5c9f__faang__local
question: Models hallucinate. How do you design the product around that, not just
  the prompt?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 475
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:51:34-05:00'
sources: []
---

**Clarify**  
The problem: *AI models can produce inaccurate or fabricated (“hallucinated”) content.*  
Assumptions I’d confirm:  
1. What user personas rely on the output (e.g., researchers, casual users)?  
2. Is correctness more critical than fluency?  
3. Are there regulatory constraints (medical, legal) that mandate verifiability?  

**Approach**  
1. **Detect & flag** – add a confidence score or hallucination detector to every response.  
2. **Human‑in‑the‑loop** – route low‑confidence outputs to a review queue before publishing.  
3. **Explainability layer** – expose source snippets or citations so users can verify.  
4. **Iterative refinement** – allow users to flag errors and feed back into the model for continuous improvement.  

**Depth**  
- *Detection*: fine‑tune a lightweight classifier on hallucination-labeled data; compute an uncertainty metric (e.g., entropy of token probabilities).  
- *Human review*: use a tiered workflow—first AI triage, then subject‑matter experts; latency ~5 s for critical domains.  
- *Citation*: integrate retrieval‑augmented generation to anchor facts in indexed documents; complexity O(log N) per lookup.  
- *Feedback loop*: store flagged instances and retrain monthly with active learning; reduces hallucination rate by ~30 %.  

**Edge Cases**  
- Ambiguous queries → high uncertainty, default to “I’m not sure.”  
- Low‑resource domains → fallback to external knowledge bases.  
- Adversarial prompts → hardened preprocessing filters.  

**Optimize & Communicate**  
- Reduce false positives by calibrating thresholds via A/B testing; aim for 95 % precision at 80 % recall.  
- Communicate transparently: show confidence bars, source links, and a “Check this fact” button.  
- Iterate: monitor user corrections to refine the hallucination detector and citation quality continuously.  

This design balances trustworthiness with usability, ensuring that hallucinations are surfaced early, verified, and corrected in a structured, scalable way.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
