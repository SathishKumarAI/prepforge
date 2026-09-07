---
qid: ing_d5f1cc62eb__faang__local
question: 'Q: Why use Continued Pretraining instead of just putting domain data in
  the SFT set?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 538
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:56:47-05:00'
sources: []
---

**Clarify**  
The interviewer asks why we pre‑train a model *continuously* on new domain data rather than simply appending that data to the supervised fine‑tuning (SFT) set.  
Key assumptions:  

1. The base LLM already has broad knowledge and fluent generation.  
2. Domain data is large, diverse, and contains high‑value style or terminology.  
3. We want to preserve generality while quickly adapting to domain specifics.

**Approach**  
Compare two pipelines: (A) *Continued Pretraining* (CPT) on the domain corpus, then SFT; (B) a single SFT pass that mixes base and domain data. Evaluate downstream task metrics, inference latency, and catastrophic forgetting.

**Depth**  

| Aspect | CPT + SFT | Single‑shot SFT |
|--------|-----------|-----------------|
| **Representation shift** | Gradual fine‑tuning of the transformer’s embedding & attention weights on in‑domain tokens, preserving upstream knowledge. | Sudden exposure to domain data can overwrite useful priors. |
| **Training dynamics** | Uses masked language modeling (MLM) loss → learns syntax/semantics; SFT then aligns with task labels. | Direct supervised loss may not capture latent structure of new vocabulary. |
| **Data efficiency** | MLM leverages unlabeled data, scaling to millions of tokens cheaply. | Requires labeled examples for every domain nuance. |
| **Catastrophic forgetting** | Smaller learning rates & layer‑wise decay mitigate drift from base knowledge. | Higher risk; model may “forget” general language patterns. |

Complexity: CPT is *O(N\_domain)* with a lightweight MLM objective, while single‑shot SFT needs *O(N\_base + N\_domain)* supervised steps—often more expensive.

**Edge Cases**  

- Very small domain corpora → CPT may overfit; prefer direct SFT.  
- Domain data containing adversarial or noisy content → pre‑filter before CPT.  
- Rapidly changing domains (e.g., news) → schedule periodic CPT cycles.

**Optimize & Communicate**  
Explain that CPT acts like a *domain‑specific language “warm‑up”*, letting the model internalize new terminology and style while keeping its global capabilities intact. This yields higher downstream accuracy, lower overfitting risk, and efficient use of unlabeled data—exactly what a FAANG team would prioritize when scaling models to thousands of niche domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
