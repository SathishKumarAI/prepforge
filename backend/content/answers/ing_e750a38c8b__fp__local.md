---
qid: ing_e750a38c8b__fp__local
question: 'Explain: Q28: Explain the RAGAS evaluation framework'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 486
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:11:11-05:00'
sources: []
---

### Why we need a *new* retrieval‑augmented generation metric

When a language model fetches documents and then generates an answer, the **joint task** is not “generation” or “retrieval” alone but the *interaction* between them. Traditional ROUGE/BLEU only look at the final text; they ignore whether the model used the right evidence or mis‑used it. Conversely, pure retrieval scores (recall@k) ignore the downstream quality of the generated answer.

#### The RAGAS idea from first principles

1. **Information fidelity** – an answer should contain *exact* facts that appear in the retrieved set.  
2. **Coverage** – the answer must draw on a broad slice of evidence, not just one snippet.  
3. **Coherence & consistency** – contradictions across snippets are harmful.  

RAGAS formalises these by building three sub‑metrics:

| Sub‑metric | What it measures | Why it matters |
|------------|------------------|----------------|
| *Relevance* | Jaccard overlap between answer tokens and tokenised evidence (follows Shannon’s mutual information). | Guarantees the answer is grounded. |
| *Coverage* | Proportion of distinct source passages referenced by the answer (entropy‑based). | Penalises cherry‑picking; encourages comprehensive synthesis. |
| *Consistency* | Pairwise contradiction score across evidence sentences (probability of logical conflict). | Ensures the model does not hallucinate contradictory facts. |

The final **RAGAS score** is a weighted harmonic mean of these three, mirroring the *F1* trade‑off between precision and recall but extended to a multi‑dimensional space.

#### Non‑obvious insight

A high *relevance* alone can be misleading: a model might copy a single sentence verbatim (high overlap) while ignoring other crucial evidence. RAGAS’s *coverage* component forces the model to integrate multiple sources, mirroring how human experts synthesize knowledge. Thus, RAGAS not only penalises hallucination but also promotes **knowledge integration**, a property many downstream tasks require but most metrics miss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
