---
qid: ing_029224cb37__aws__local
question: Why LLM for Explanation, Not SHAP/LIME? — Fraud Detection
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 495
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:30:08-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I led the fraud‑detection team that needed instant, actionable explanations for every flagged transaction. The existing SHAP/LIME pipeline was *slow* (≈ 5 s per sample) and produced noisy feature attributions that confused analysts.

**Action**  
I proposed replacing post‑hoc explainers with a lightweight **LLM‑based explanation engine** integrated into the fraud model’s inference path.  

1. **Requirements & Design** – The LLM was fine‑tuned on 200k historical fraud cases, outputting concise “why this is suspicious” statements in < 0.5 s.  
2. **AWS Services** –  
   * `Amazon SageMaker Endpoint` (Inference) for real‑time scoring + LLM inference.  
   * `EventBridge` to trigger the explanation pipeline on new predictions.  
   * `Step Functions` orchestrate fallback to SHAP if LLM confidence < 0.7.  
3. **Scalability & Cost** – Using a 2‑node GPU fleet (p4d) with autoscaling kept latency < 1 s for 95th percentile traffic, while cost dropped from $0.12/txn (SHAP) to $0.04/txn (LLM).  
4. **Trade‑offs** – Sacrificed exact feature attribution for speed; mitigated via confidence threshold and human‑in‑the‑loop reviews.

**Result**  
- *Customer Obsession*: Analysts reported a 60 % reduction in review time, improving user trust.  
- *Deliver Results*: Overall fraud detection accuracy rose from **92.3 % to 94.1 %** (precision ↑ 5 %, recall unchanged).  
- *Ownership & Dive Deep*: I iterated on the LLM until loss curves stabilized, and documented failure modes (e.g., “hallucinated” reasons) for future improvements.

**Reflection** – The experiment taught me that **speed + contextual explanations** can outweigh fine‑grained feature importance when end users need rapid decisions. Future work will explore hybrid models combining SHAP for audit trails with LLMs for live ops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
