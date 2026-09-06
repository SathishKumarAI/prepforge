---
qid: ing_f9bf29950b__think__local
question: 'Q73: How would you design a semantic routing system that dynamically selects
  the cheapest model that can handle a query with acceptable quality?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 482
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:28:07-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- *What is “semantic routing”*? We’re mapping a user query → an LLM (or other AI model).  
- *Cost vs. quality*: Each model has a per‑token cost and a measurable performance metric (e.g., perplexity, BLEU, task‑specific accuracy).  
- *Dynamic selection*: At runtime we must pick the cheapest model that still meets a minimum quality threshold for the given query type.

**2️⃣ Mental model / framework**  
Treat it as a **multi‑objective optimization**: minimize cost while satisfying a quality constraint.  
Use a lightweight *policy network* or rule‑based selector that, given query features (length, intent, domain), outputs the minimal acceptable model index.  

**3️⃣ Step‑by‑step reasoning**  
1. **Collect data**: Benchmark all candidate models on representative queries; record cost per token and quality scores.  
2. **Build a lookup table** mapping query feature vectors → “acceptable” models (those whose quality ≥ threshold).  
3. **Rank models by cost** within each bucket.  
4. **At runtime**, extract features from the incoming query, look up the bucket, pick the cheapest model in that bucket, and route.  
5. **Fallback & learning loop**: If the chosen model fails (e.g., returns low‑confidence answer), trigger a re‑route to a higher‑quality model and log the outcome for future retraining.

**4️⃣ Common traps to avoid**  
- *Assuming static thresholds*: Quality can vary with context; use adaptive thresholds or confidence estimates.  
- *Ignoring latency*: A cheaper model might be slower; include latency in the cost function if needed.  
- *Overfitting the lookup*: Too fine a feature granularity leads to sparse data; start coarse and refine.  

**5️⃣ Sanity‑check & communicate**  
Run unit tests on synthetic queries to verify that: (a) the selector never picks a model below the quality bar, and (b) it always chooses the cheapest eligible one. Explain the pipeline as: *Feature extraction → Policy lookup → Model selection → Execution*, highlighting how cost/quality trade‑offs are encoded in the lookup table.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
