---
qid: ing_0a1f8d16e0__fp__local
question: How would you evaluate multilingual retrieval quality - a customer's employees
  query in French and Korean over mostly-English documents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 372
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:27:09-05:00'
sources: []
---

**From the ground up**

The core problem is *information loss* when a user speaks in language L while the corpus is predominantly English.  
To quantify retrieval quality we must measure how much relevant content is still reachable, and how much noise is introduced.

1. **Define relevance in the target space** – for each query \(q_L\) construct an ideal set of documents \(\mathcal{R}\) by translating \(q_L\) to English (or using a multilingual embedding).  
2. **Information‑theoretic precision** – let \(P(q_L)=|\text{retrieved}\cap\mathcal{R}|/|\text{retrieved}|\). This is the probability that a random retrieved doc contains useful information.  
3. **Recall as entropy reduction** – \(\Delta H = H(\mathcal{D})-H(\mathcal{D}\mid q_L)\) measures how much uncertainty about relevant documents drops after the query.  
4. **Cross‑lingual ranking consistency** – compute Kendall‑τ between rankings of a bilingual test set and its English counterpart; high τ means the model preserves relative relevance across languages.

**Non‑obvious insight:** The *entropy reduction* is sensitive to the distribution of topical coverage in the corpus. If most documents are English but only a few cover French‑specific terms, \(\Delta H\) will be low even if precision is high. Thus, an evaluation that mixes precision with entropy gives a fuller picture: it rewards systems that not only surface relevant docs but also broaden the user’s informational horizon across languages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
