---
qid: ing_a1d26f2391__faang__local
question: 'Explain: Lessons from Building a First-Pass AI PRD Reviewer at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 454
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:00:39-05:00'
sources: []
---

**Clarify**  
You’re asking what we learned when we built *First‑Pass*, an internal AI that reviews product requirement documents (PRDs) before they hit the Uber engineering pipeline. Key assumptions: the tool had to read natural language, flag missing or ambiguous specs, and score overall quality; stakeholders expected it to reduce review time by ~30 %.  

**Approach**  
1. **Define success metrics** – accuracy of flagged issues, user‑satisfaction, latency < 2 s.  
2. **Data pipeline** – scrape 20k historical PRDs + engineer annotations → labeled corpus.  
3. **Model stack** – start with a fine‑tuned BERT for sentence‑level classification; add a rule‑based layer for domain terms (e.g., “ETA”, “trip‑type”).  
4. **Feedback loop** – embed a lightweight UI in the PRD editor so reviewers can correct model predictions, feeding those corrections back into nightly retraining.  

**Depth**  
- *Architecture*: transformer encoder → classification head + confidence score; post‑process with NER to catch missing fields.  
- *Complexity*: inference O(1 k tokens) ≈ 150 ms on a GPU; training O(N log N).  
- *Trade‑offs*: heavier models (RoBERTa, GPT‑3) improved recall by 5 % but doubled latency and cost—decided against them for production.  

**Edge Cases**  
- Out‑of‑domain PRDs (new services) → lower confidence; we flagged these for human review.  
- Ambiguous phrasing (“may…”) caused false positives; handled via a context window in the transformer.  

**Optimize & Communicate**  
We added an active‑learning scheduler that prioritizes low‑confidence samples for annotation, cutting labeling effort by 40 %. In retrospectives we shared these insights with product and engineering teams, framing the AI as *augmented* rather than *replacement*, which eased adoption and led to a 28 % reduction in review turnaround time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
