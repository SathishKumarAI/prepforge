---
qid: ing_8b7e135268__faang__local
question: 'Explain: Defining Hallucinations — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 511
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:08:38-05:00'
sources: []
---

**Clarify**  
The question asks for a concise definition of *hallucination* in the context of large‑language models (LLMs), with an example from BigLaw Bench (Harvey). I’ll assume the interviewer wants to know: 1) what constitutes a hallucination, 2) why it matters for legal NLP, and 3) how we might detect or mitigate it.

**Approach**  
1. Define hallucination formally.  
2. Explain its impact on legal outputs (accuracy, liability).  
3. Cite the Harvey benchmark example.  
4. Mention detection/mitigation strategies.

**Depth**  
In LLMs, a *hallucination* is any generated token sequence that the model presents as factual but diverges from truth—i.e., it invents entities, dates, statutes, or citations that do not exist or are misattributed. In legal NLP, hallucinations can produce false case law references or fabricated statutes, jeopardizing client trust and compliance.

The **BigLaw Bench** benchmark (Harvey) tests LLMs on legal reasoning tasks. One common hallucination example: the model claims “In *Smith v. Jones*, 2021 U.S.C. § 1234, the court held…”, yet no such case or statute exists. This synthetic citation demonstrates how models can conflate real statutes with invented ones, a critical failure mode for law‑tech products.

**Edge Cases**  
- Near‑duplicate citations that exist in different jurisdictions.  
- Models citing internal corporate policies (non‑public).  
- Low‑frequency statutes that are legitimately obscure but may be misremembered.

Testing should involve cross‑referencing generated citations against authoritative legal databases (Westlaw, LexisNexis) and flagging mismatches.

**Optimize & Communicate**  
To mitigate hallucinations:  
1. **Retrieval‑augmented generation**—feed the model with verified legal documents.  
2. **Post‑generation verification**—automated checks against a legal knowledge graph.  
3. **Fine‑tuning on curated corpora** to reduce over‑confidence in invented facts.

When explaining this, emphasize that hallucinations are not bugs but artifacts of probabilistic decoding; thus, robust pipelines must combine model outputs with deterministic validation steps. This balanced strategy satisfies both performance and compliance requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
