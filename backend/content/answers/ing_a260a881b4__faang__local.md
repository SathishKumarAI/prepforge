---
qid: ing_a260a881b4__faang__local
question: 'Explain: Measuring Hallucinations — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 511
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:01:55-05:00'
sources: []
---

**Clarify**  
We’re asked how a legal‑tech firm (“BigLaw Bench”) can **measure hallucinations**—i.e., false or fabricated outputs—from an LLM used in legal research (Harvey).  
Assumptions to confirm:  

1. The system logs every user query and the model’s response.  
2. There is a ground‑truth dataset of verified legal facts or expert‑annotated answers.  
3. Hallucinations are defined as statements that *appear factual* but are incorrect or unsupported by evidence.

**Approach**  
1. **Ground‑truth alignment** – create a benchmark corpus (case law, statutes, annotated FAQs).  
2. **Automated fact‑checking** – use a secondary model to score each response against the corpus.  
3. **Human validation loop** – flag low‑confidence outputs for expert review and add back into training data.  
4. **Metrics & dashboards** – track hallucination rate per query type, document, and over time.

**Depth**  
- *Fact‑checking model*: a retrieval‑augmented system (e.g., BM25 + transformer) that returns top‑k documents; the LLM’s answer is compared to the extracted evidence via overlap and semantic similarity.  
- *Score* = α·(exact match) + β·(semantic similarity) – tuned on validation set.  
- Hallucination rate = (# responses with score < τ)/total queries.  
- Complexity: retrieval O(N log N), scoring linear in answer length; overall near‑real‑time.

**Edge Cases**  
- Ambiguous or multi‑document answers may get low scores despite being correct.  
- Novel legal developments not in corpus → false positives.  
- Users may ask open‑ended questions where no definitive “ground truth” exists.

**Optimize & Communicate**  
- Incrementally update the corpus with new case law to reduce blind spots.  
- Implement confidence‑based routing: auto‑accept high‑score answers; flag others for human review.  
- Present dashboards with trend lines, per‑document hallucination heatmaps, and a “confidence score” badge in the UI.  
- Communicate that this hybrid approach balances scalability (automated checks) with reliability (human oversight), ensuring legal practitioners trust Harvey’s outputs while continuously improving the model’s factuality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
