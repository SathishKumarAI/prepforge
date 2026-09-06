---
qid: ing_945b60080b__think__local
question: Our chatbot gives a different answer every time. How do you test something
  non-deterministic?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 430
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:54:05-05:00'
sources: []
---

### 1. Clarify the problem and set assumptions  
- **What is “different”**: Randomness in wording, content, or structure?  
- **Scope of nondeterminism**: Is it only surface‑level variation (synonyms) or deeper logical differences?  
- **Testing goals**: Do we want to validate that outputs are *acceptable* rather than identical?

### 2. Adopt a statistical/coverage framework  
Treat the chatbot as a stochastic generator; use **sampling, hypothesis testing, and coverage metrics** instead of exact matches.

### 3. Step‑by‑step reasoning  

1. **Define success criteria**: e.g., response relevance, grammar, safety, length constraints.  
2. **Generate a large sample** (hundreds or thousands) for each prompt to capture distribution.  
3. **Apply automated checks**:  
   - *Unit tests* for invariants (no profanity, no policy violations).  
   - *Similarity metrics* (BLEU, ROUGE, cosine similarity of embeddings) to ensure semantic consistency.  
4. **Statistical analysis**:  
   - Use confidence intervals or bootstrap methods to see if variation falls within acceptable bounds.  
5. **Human evaluation**: Randomly pick subsets for rating on a Likert scale; compute inter‑rater agreement.

### 4. Common traps to avoid  

- **Over‑focusing on exact string matches** → false negatives.  
- **Insufficient sample size** → misleading statistics.  
- **Ignoring context drift** (prompt variations) → conflating prompt‑dependent variation with randomness.  
- **Neglecting policy checks** → safety violations slip through.

### 5. Sanity‑check & communicate  

- Verify that *most* responses satisfy the success criteria; flag only outliers.  
- Present results as “percentage of acceptable outputs” and confidence intervals, not raw counts.  
- Explain to stakeholders that nondeterminism is intentional for user experience but controlled via statistical guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
