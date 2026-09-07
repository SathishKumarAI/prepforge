---
qid: ing_965f955e47__faang__local
question: 'Explain: LLM-as-judge, properly — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 492
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:33:36-05:00'
sources: []
---

**Clarify**  
The interviewer asks how a large language model (LLM) can act as an adjudicator—evaluating other models’ outputs and providing observable, trustworthy metrics. I’ll assume we’re dealing with *open‑ended* tasks (e.g., text generation or code synthesis), that the judge LLM has access to the same prompt and candidate output, and that we want transparent auditability.

**Approach**  
1. **Define a formal scoring rubric** (fluency, factuality, relevance).  
2. **Prompt‑engineer the judge LLM** to produce a structured JSON score plus an explanation.  
3. **Collect provenance data**: timestamps, model IDs, prompt hashes.  
4. **Validate outputs** via external oracle checks or cross‑model consensus.  
5. **Publish audit logs** in a tamper‑evident ledger (e.g., blockchain or immutable DB).

**Depth**  
The judge LLM is given the prompt *P* and candidate answer *A*. It outputs:

```json
{
  "score": {
    "fluency": 0.87,
    "factuality": 0.71,
    "relevance": 0.92
  },
  "explanation": "...",
  "metadata": { ... }
}
```

Complexity is *O(L)* in token length, but we can cache embeddings for repeated prompts. Trade‑offs: higher model size → better judgment but more cost and latency; smaller models risk bias.

**Edge Cases**  
- **Hallucinations**: judge misclassifies factual errors if it shares the same hallucination pattern.  
- **Adversarial inputs**: crafted to trick the judge into high scores.  
- **Non‑determinism**: different runs yield varying scores—mitigate with fixed seeds or ensembling.

**Optimize & Communicate**  
We can ensemble multiple judge LLMs, weighted by calibration against human data, to reduce variance. Explainability is key: expose the rubric and show how each metric was computed. In an interview, I’d emphasize that observability comes from immutable logs and reproducible scoring scripts—ensuring stakeholders can audit decisions post‑hoc. This balances automation with trustworthiness, a core FAANG concern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
