---
qid: ing_a45c026f0b__fp__local
question: 'Explain: Rubric — Mock Interview Kit'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 495
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:55:58-05:00'
sources: []
---

**Rubric‑Based Mock Interview Kits (RBMIK)**  
*A principled design for training conversational agents*

---

### The fundamental problem
A conversational AI must *behave* like a human interviewer: ask relevant questions, follow up on answers, and judge responses in real time. Traditional unit tests fail because they only check surface syntax or intent recognition; they miss the *interactive dynamics* that determine interview quality.

### Why a rubric is necessary  
1. **Objective scoring** – Human interviewers rely on implicit standards (clarity, depth, relevance). A formal rubric turns these tacit criteria into measurable dimensions: *Question Relevance*, *Follow‑up Depth*, *Response Coherence*, *Time Management*.  
2. **Feedback loop** – Each dimension can be graded 0–5, producing a vector that the agent uses to update its policy via reinforcement learning. Without such granularity, the reward signal is too sparse.  

### Deeper principle: Information‑theoretic optimality  
At each turn, the agent’s action \(a_t\) should maximize expected information gain about the candidate’s suitability:
\[
a_t^* = \arg\max_{a} \mathbb{E}\big[ I(\text{suitability}; a, r_t)\big]
\]
The rubric components correspond to different *mutual‑information terms*: relevance maximizes \(I(Q;\text{suitability})\), depth maximizes \(I(A;\text{suitability}|Q)\). By structuring the reward as a weighted sum of rubric scores, we enforce that the agent learns exactly these information‑theoretic objectives.

### Non‑obvious insight  
The *Follow‑up Depth* score is **not** merely “ask more questions”. It must capture *semantic anchoring*: each follow‑up should be conditioned on the candidate’s last utterance. A naive rubric would reward any question, but an RBMIK encodes a *contextual dependency graph*. This forces the agent to maintain a hidden state that represents the conversational trajectory, leading to richer, more coherent interviews.

---

**In short**, an RBMIK transforms qualitative interviewing skills into a structured, optimizable reward signal grounded in information theory, enabling AI agents to learn nuanced, human‑like interview dynamics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
