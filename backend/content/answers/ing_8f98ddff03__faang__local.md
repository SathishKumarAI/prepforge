---
qid: ing_8f98ddff03__faang__local
question: 'Explain: In this newsletter, you’ll learn: — How Do AI Agents Work - by
  Neo Kim and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 508
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:18:15-05:00'
sources: []
---

**Clarify**  
You want a concise explanation of the mechanics behind an *AI agent* as presented in the newsletter “How Do AI Agents Work” by Neo Kim & Fran Soto.  
Assumptions:  
1. The reader knows basic ML concepts (models, inference).  
2. No deep dive into specific frameworks is required—just high‑level architecture.

**Approach**  
1. Define an agent and its core loop.  
2. List the three pillars: perception, planning, actuation.  
3. Show how large language models (LLMs) replace hand‑coded planners.  
4. Wrap with a simple end‑to‑end example (e.g., booking a flight).

**Depth**  
- **Perception:** Sensor inputs (text, images) → tokenization → embedding → LLM inference → semantic vector.  
- **Planning/Decision:** The agent uses the LLM as a *policy network*: given state embeddings and a prompt of recent dialogue/history, it outputs the next action token(s). This is effectively a closed‑loop RL‑style policy learned from instruction data.  
- **Actuation:** Convert the action tokens into API calls or UI commands (e.g., `GET /flights?origin=NYC&dest=LAX`). The agent may loop back to perception if the call fails or new info arrives.  
- **Feedback Loop:** Optional reward signal (user satisfaction, task success) can fine‑tune the policy via RL‑HF or supervised replay.

**Edge Cases**  
- *Ambiguous input*: The LLM may hallucinate; mitigation is prompt engineering and confidence thresholds.  
- *API failures*: Retry logic or fallback policies are essential.  
- *Long‑term dependencies*: Current agents struggle with multi‑step reasoning; memory buffers help but add latency.

**Optimize & Communicate**  
Explain that scaling the LLM (more parameters, better pretraining) improves generalization, while caching intermediate embeddings reduces inference cost. In a FAANG interview, highlight trade‑offs: larger models → higher accuracy vs. compute budgets, and how you’d monitor latency with SLOs.

> *“AI agents are essentially LLM-powered decision loops that perceive, plan, and act—tightening the loop with memory and reward signals to achieve robust autonomous behavior.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
