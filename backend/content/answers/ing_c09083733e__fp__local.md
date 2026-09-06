---
qid: ing_c09083733e__fp__local
question: 'Explain: Self-mock protocol (no partner) — Mock Interview Kit'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 421
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:52:14-05:00'
sources: []
---

### Self‑Mock Protocol (No Partner) – A “Mock Interview Kit”

**Problem statement**  
A candidate needs to rehearse an interview *without* a human partner. The goal is to generate realistic question–answer exchanges, evaluate performance, and provide actionable feedback. The challenge: the system must **imitate** a conversational partner, maintain context, and critique its own responses—all while staying within limited resources.

**Why it works**  
1. **Generative modeling** (e.g., GPT‑style transformer) supplies the “partner” by sampling from a distribution of plausible interview questions conditioned on the candidate’s profile.  
2. **Self‑evaluation** uses an auxiliary model trained to predict rubric scores (clarity, depth, relevance). By treating its own answers as input, the system performs *self‑critique* without external supervision.  
3. **Iterative refinement** frames the process as a Markov decision problem: at each step the candidate’s answer is a state, the model selects a follow‑up question (action), and receives a reward from the critique model. Reinforcement learning fine‑tunes the question policy to maximize expected interview quality.

**Deeper principle**  
This is an instance of *self‑supervised optimization* on a latent conversational space: the system learns a joint distribution over questions and evaluations, turning the interview into a closed‑loop control problem where the evaluator is also the generator.

**Non‑obvious insight**  
Because the critique model shares parameters with the question generator, the system naturally **aligns its notion of “good” answers with what it deems useful to ask next**. This co‑adaptation reduces hallucinations and ensures that practice questions progressively target identified weaknesses—something a naïve random‑question bot would miss.

---

*Word count: 190*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
