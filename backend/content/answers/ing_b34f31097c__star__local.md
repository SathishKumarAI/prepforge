---
qid: ing_b34f31097c__star__local
question: 'Explain: Lessons Learned — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 372
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:30:30-05:00'
sources: []
---

**Situation:**  
At a fintech startup, we were launching an automated loan‑approval chatbot that leveraged GPT‑4 for natural language interactions. Our risk team flagged inconsistent sentiment scores across different user demographics during internal testing.

**Task:**  
I needed to design a robust evaluation pipeline that could surface bias, latency issues, and hallucinations before production, while keeping costs manageable for the limited compute budget.

**Action:**  
1. Integrated **LangWatch** to stream real‑time inference logs from our FastAPI service into a lightweight dashboard; it automatically tagged requests by user segment, detected slow responses (>200 ms), and highlighted confidence drops.  
2. Configured **Langfuse** as the evaluation backend: defined a suite of 120 test prompts (including edge cases for protected classes), set up scoring metrics (accuracy, hallucination rate, latency SLA), and scheduled nightly runs on our GPU pool.  
3. Used LangWatch’s alerting to trigger re‑training when hallucinations exceeded 2 % in any segment; leveraged Langfuse’s comparison API to benchmark new checkpoints against the baseline.  
4. Added a “bias audit” report that surfaced distributional differences and fed them into our model card.

**Result:**  
The combined pipeline reduced hallucination rates from 7 % to <1 %, cut average latency by 35 ms, and caught a subtle gender bias before launch—saving an estimated $150k in potential regulatory fines. I learned that coupling live observability (LangWatch) with structured evaluation (Langfuse) turns raw logs into actionable insights, ensuring both safety and performance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
