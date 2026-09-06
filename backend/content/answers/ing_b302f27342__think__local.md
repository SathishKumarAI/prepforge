---
qid: ing_b302f27342__think__local
question: 'Explain: Sub-Agent Architectures — What is Context Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 507
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:48:39-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - *What is “Sub‑Agent Architecture”?* I’ll assume it’s a hierarchy where a master agent delegates to lower‑level sub‑agents (e.g., in multi‑agent RL or hierarchical policy learning).  
   - *What does “Context Engineering” mean here?* It refers to designing the information flow that each sub‑agent receives—how context is extracted, transformed, and passed up/down the hierarchy.  
   - Assume we’re talking about reinforcement learning or planning systems, not just generic ML pipelines.

**2️⃣ Mental model: hierarchical decision‑making**  
   - Picture a tree: root agent → child agents → leaf agents.  
   - Each node receives *context* (state summary, goals, constraints).  
   - Engineering that context is like designing the interface between nodes—deciding what to expose and how.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify the **levels of abstraction** needed for the task.  
   2. For each level, decide what *information* is relevant (e.g., high‑level goals vs. low‑level kinematics).  
   3. Design a **context representation**: vector embeddings, symbolic descriptors, or structured graphs.  
   4. Define **transformation functions** (learned or handcrafted) that map raw observations to the chosen context format.  
   5. Implement *communication protocols* (message passing, shared memory, policy gradients) ensuring consistency and avoiding bottlenecks.

**4️⃣ Common traps**  
   - Over‑engineering: sending too much raw data → latency & noise.  
   - Under‑engineering: stripping away useful signals → sub‑agents stuck in local optima.  
   - Ignoring non‑stationarity: context may drift as agents learn; need adaptive encoding.

**5️⃣ Sanity checks & verbalizing**  
   - Ask: “Does each sub‑agent get exactly what it needs to act without redundant info?”  
   - Verify dimensionality matches downstream models.  
   - Explain aloud how the root’s high‑level goal is distilled into a concise vector that a motion‑control sub‑agent can use, illustrating the flow and its rationale.

By following this checklist, you’ll systematically engineer context for any sub‑agent architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
