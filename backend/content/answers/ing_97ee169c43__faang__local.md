---
qid: ing_97ee169c43__faang__local
question: 'Explain: Known Biases and Mitigations — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 644
total_tokens: 879
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:38:03-05:00'
sources: []
---

**Clarify**  
The interviewer asks for an explanation of *known biases* that appear when evaluating Retrieval‑Augmented Generation (RAG) systems, and the *mitigation strategies* used to counter them. I’ll assume we’re talking about open‑domain QA or dialogue agents that retrieve documents from a corpus before generating responses, evaluated via standard metrics such as BLEU, ROUGE, or human judgment.

**Approach**  
1. List the most common bias types in RAG evaluation.  
2. For each bias, describe why it arises and its impact on measured performance.  
3. Summarize practical mitigation techniques that have been published or used in industry.  
4. Conclude with a quick note on remaining research gaps.

**Depth**

| Bias | Cause & Effect | Mitigation |
|------|----------------|------------|
| **Retrieval‑over‑generation bias** | The system can “cheat” by pulling exact snippets that match the reference, inflating automatic scores while still producing incoherent text. | Use *retrieval‑only* baselines to set a lower bound; penalize exact copy‐matches in scoring; adopt retrieval‑aware metrics (e.g., BLEURT‑R). |
| **Dataset shift bias** | Training corpus differs from test domain, so the model overfits to frequent topics and underperforms on rare ones. | Domain‑adaptive fine‑tuning; use *in‑context* prompts that include diverse examples; evaluate on held‑out topic splits. |
| **Reference bias** | Human references are often short or paraphrased; automatic metrics treat them as the gold standard, ignoring alternate correct answers. | Deploy *reference‑free* evaluation like BLEURT‑BERTScore or human judgments of factual correctness and relevance. |
| **Length & fluency bias** | Longer generated passages score higher on ROUGE simply because they contain more n‑grams, even if irrelevant. | Length‑normalised metrics; include a fluency sub‑task with crowd workers to rate coherence. |
| **Coverage bias** | Retrieval modules may favor high‑frequency documents, causing repeated answers across queries. | Diversify retrieval (e.g., nucleus sampling over ranked docs); use *coverage* penalties in the loss. |

**Edge cases**  
- Extremely rare entities: ensure retrieval index contains up‑to‑date knowledge.  
- Adversarial prompts that trick the retriever into pulling misleading facts.  
- Multi‑modal RAG systems where image or audio retrieval introduces new biases.

**Optimize & Communicate**  
To improve evaluation, combine *automatic* and *human* metrics: run a lightweight automatic pass (BLEURT‑R + length penalty), then sample 5–10% of cases for detailed human scoring on factuality, relevance, and fluency. Communicate results with confidence intervals to convey uncertainty. In practice, this hybrid pipeline balances scale with quality, which is what FAANG interviewers look for: clear problem framing, systematic mitigation, awareness of edge conditions, and a pragmatic path to robust deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
