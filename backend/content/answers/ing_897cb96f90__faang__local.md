---
qid: ing_897cb96f90__faang__local
question: 'Explain: Act I — Chatbots (when AI answers) — That Is Embarrassing: Why
  Frontier AI Still Makes Things Up, and What to Do About It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 418
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:04:25-05:00'
sources: []
---

**Clarify**  
You’re asking why early chatbots (“frontier AI”) often hallucinate facts and how we can mitigate that. I’ll assume the goal is a reliable conversational agent, not just a witty one.

**Approach**  
1. Diagnose hallucination sources (data noise, training objective).  
2. Propose concrete fixes: better data curation, alignment, verification layers.  
3. Outline deployment safeguards (confidence thresholds, user prompts).

**Depth**  
Frontier models are trained with maximum‑likelihood on large corpora; the loss only rewards *syntactic* plausibility, not factuality. This leads to “made‑up” answers when the model interpolates between noisy signals or extrapolates beyond its training distribution. Solutions include:  
- **Data filtering** (remove low‑quality or contradictory facts).  
- **Retrieval‑augmented generation** (fetch evidence from a vetted knowledge base before answering).  
- **Reinforcement learning with human feedback (RLHF)** tuned for factual correctness.  
- **Confidence scoring** that flags uncertain responses and defers to external lookup or prompts the user for clarification.  

Complexity: Retrieval adds O(log N) lookups; RLHF incurs extra training passes but yields ~30% reduction in hallucination rates in benchmarks.

**Edge Cases**  
- Rare queries with no evidence → model still fabricates.  
- Adversarial phrasing that tricks retrieval.  
- Over‑confidence calibration errors leading to silent misinformation.

**Optimize & Communicate**  
Iteratively evaluate on a held‑out factuality benchmark, adjust the evidence threshold, and layer in a “safe completion” filter that truncates unverified claims. In an interview I’d explain this pipeline as a *hybrid reasoning stack*—generation + retrieval + alignment—highlighting trade‑offs between latency and truthfulness, and concluding with the importance of continuous monitoring once deployed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
