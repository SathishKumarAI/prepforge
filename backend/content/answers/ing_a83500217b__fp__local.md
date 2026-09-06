---
qid: ing_a83500217b__fp__local
question: 'Explain: Every assertion in a Harvey answer needs to link back to a specific
  passage. Design the grounding system, and tell me how you would measure the unsupported-claim
  rate.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 472
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:03:18-05:00'
sources: []
---

### Grounding System

1. **Assertion Tokenization**  
   *Each sentence in a Harvey answer is parsed into atomic claims (subject‑verb‑object triples).*

2. **Passage Indexing**  
   *All source passages are pre‑indexed with TF‑IDF vectors and stored in an Elasticsearch cluster.*

3. **Relevance Scoring**  
   For every claim, the system runs a semantic similarity query against the index.  
   *Score(c,p) = cos(emb(c), emb(p)) + λ·(len(c)/len(p))*  
   where `emb` is a transformer‑based sentence embedding and `λ` balances brevity.

4. **Threshold & Alignment**  
   If `max_p Score(c,p)` ≥ τ (empirically 0.68), the claim is *grounded* to passage `p`.  
   Otherwise it is flagged as *unanchored*.  
   The alignment is stored in a JSON trail: `{claim_id, passage_id, score}`.

5. **Audit Trail**  
   Every claim’s grounding record is appended to the final answer as a footnote link (`[↩︎]`).

### Measuring Unsupported‑Claim Rate

Define:
- \( U = \{c \mid c\text{ has no passage with } Score(c,p) ≥ τ\} \)
- \( A = \{c \mid c\text{ is an assertion in the answer}\} \)

Then  
\[
\text{Unsupported‑Claim Rate} = \frac{|U|}{|A|}
\]

This fraction can be monitored per user session, per model version, and aggregated across a dataset. An auxiliary *confidence* metric averages the top‑score of all grounded claims to detect borderline cases where low scores hint at implicit grounding.

**Non‑obvious insight:**  
The λ term in the scoring formula is critical: it penalizes overly long passages that match trivially because they contain many tokens, ensuring that only genuinely relevant evidence survives. Without this geometric correction, the system would inflate the grounded claim count and understate the unsupported‑claim rate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
