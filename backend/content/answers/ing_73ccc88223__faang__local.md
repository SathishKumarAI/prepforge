---
qid: ing_73ccc88223__faang__local
question: What is agentic RAG? — Ai System Design Guide
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 519
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:13:43-05:00'
sources: []
---

**1️⃣ Clarify**  
> *Question:* “What is agentic RAG?”  
We’re asked to define **Agentic Retrieval‑Augmented Generation (RAG)**—a design pattern that couples an autonomous decision‑making layer with a retrieval‑augmented language model.  
*Assumptions to confirm:*  
- The system uses a large LLM for generation.  
- Retrieval is from structured or unstructured corpora (e.g., knowledge bases, logs).  
- “Agentic” implies the agent decides *when*, *what*, and *how* to retrieve before generating.

**2️⃣ Approach**  
1. Outline core components: policy network, retrieval engine, LLM generator.  
2. Explain the control loop: observation → action (retrieve or generate) → new state.  
3. Highlight training signals: reward for factual accuracy, prompt relevance, and efficiency.

**3️⃣ Depth**  
Agentic RAG is a *reinforcement‑learning* policy that selects retrieval actions conditioned on user intent and context. The agent’s policy π(a|s) outputs either:  
- **Retrieve** – fetch top‑k documents via vector search or keyword matching;  
- **Generate** – directly produce an answer using the LLM with retrieved snippets as in‑prompt context.

The generator then fuses retrieved evidence (e.g., via attention over passages) to produce a grounded response. Training uses reward shaping: higher rewards for factual correctness, lower latency, and minimal retrieval overhead.

*Complexity:* Retrieval ≈ O(log N) per query; generation ≈ O(L·d²). The agent adds negligible overhead compared to LLM inference.

**4️⃣ Edge Cases**  
- **Sparse knowledge:** agent must fall back to pure generation.  
- **Noisy or conflicting docs:** policy learns to down‑weight uncertain sources.  
- **Cold start:** use heuristic rules before RL fine‑tuning.  
Testing: synthetic prompts, real user logs, and adversarial fact checks.

**5️⃣ Optimize & Communicate**  
Future improvements: multi‑step retrieval planning, hierarchical policies (macro vs micro actions), and cache‑aware retrieval to reduce latency. I would narrate the design by first framing the problem, then walking through each component with a diagram, and finally discussing trade‑offs—exactly what FAANG interviewers look for in clarity, depth, and communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
