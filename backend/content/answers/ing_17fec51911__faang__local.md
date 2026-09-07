---
qid: ing_17fec51911__faang__local
question: 'Explain: Create specific evaluators — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 548
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:40:19-05:00'
sources: []
---

**1️⃣ Clarify**  
The interview asks: *“How would you build domain‑specific AI evaluators that leverage Langwatch and Langfuse?”*  
Assumptions: we have a LLM service, access to the Langwatch API for runtime monitoring, and Langfuse for evaluation metrics. We need a pipeline that (a) collects prompts/answers, (b) applies custom scoring rules, and (c) stores results for analysis.

**2️⃣ Approach**  
1. **Instrumentation** – Wrap every LLM call with Langwatch to capture token usage, latency, and metadata.  
2. **Evaluation Layer** – Use Langfuse’s evaluation framework: define a *metric* (e.g., “domain‑accuracy”) and a *function* that receives the prompt, completion, and ground truth.  
3. **Custom Scorer** – Implement a scoring function in Python (or JS) that parses the response, applies regex or semantic similarity checks specific to the domain, and returns a score + feedback.  
4. **Pipeline Orchestration** – Deploy as an AWS Lambda / Cloud Run job triggered by Langwatch events; persist results in DynamoDB/Firestore for dashboards.

**3️⃣ Depth**  
- *Langwatch* provides event streams (`onCompletion`) → we pipe these to the evaluator.  
- In Langfuse, create a **Custom Evaluation**: `langfuse.evaluate(promptId, completionId, { score: 0.85 })`.  
- Complexity is O(n) per request; latency added ≈ 50 ms if scoring is lightweight.  
- Trade‑offs: heavier semantic models (e.g., BERT) improve quality but increase cost/latency.

**4️⃣ Edge Cases**  
- Empty or malformed completions → fallback to score 0.  
- Multi‑turn dialogs → aggregate scores across turns.  
- API throttling → exponential backoff on Langwatch/Langfuse calls.

**5️⃣ Optimize & Communicate**  
- Cache embeddings for repeated prompts to reduce compute.  
- Use batch evaluation in Langfuse to amortize request overhead.  
- Present results via Grafana dashboards; narrate the pipeline as “prompt → Langwatch monitor → custom scorer → Langfuse store → analytics.”  

This structured, end‑to‑end solution satisfies FAANG interview expectations: clear assumptions, systematic design, technical depth, edge‑case awareness, and thoughtful optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
