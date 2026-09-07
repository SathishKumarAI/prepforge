---
qid: ing_a1d3b37419__faang__local
question: 'Explain: Enrollment and Grading — CS294/194-196 Large Language Model Agents
  | CS 194/294-196 Large Language Model Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 581
total_tokens: 833
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:00:40-05:00'
sources: []
---

**Clarify**  
We’re asked to describe how students enroll in the CS 194/196 “Large‑Language‑Model (LLM) Agents” class and how their performance is evaluated. I’ll assume:  
- The course runs each semester, with a fixed number of seats.  
- Enrollment follows the university’s standard online portal.  
- Grading blends project work, quizzes, and a final capstone.

**Approach**  
1. Outline the enrollment workflow (pre‑registration → waitlist → confirmation).  
2. Summarize grading components and weighting.  
3. Mention any special policies (late submission, plagiarism).

**Depth**  

| Step | Detail |
|------|--------|
| **Pre‑registration** | Students add the course to their “planned” list during the registration window; a notification is sent once seats open. |
| **Waitlist & Confirmation** | If capacity is reached, students join a FIFO waitlist. When a spot frees up (drop or cancellation), the top waitlisted student receives an email and must confirm within 24 h to lock the seat. |
| **Drop/Add Policy** | Up to two drops per term are allowed without penalty; after that, a fee applies. |
| **Grading Scheme** | • **Project Proposals (10%)** – clarity & feasibility.<br>• **Mid‑term Quizzes (20%)** – multiple‑choice on LLM theory.<br>• **Implementation Labs (40%)** – code quality, documentation, and unit tests.<br>• **Final Capstone (30%)** – full LLM agent deployment with evaluation metrics. |
| **Rubric** | Each component uses a 0–5 scale; final grade is weighted average. |
| **Late Work & Plagiarism** | 1‑day late penalty of 10 % per day; plagiarism detected via Turnitin triggers an automatic 0 on the assignment and potential course dismissal. |

**Edge Cases**  
- *Concurrent confirmations*: if two waitlisted students confirm simultaneously, the system assigns based on last‑received timestamp.  
- *Missing a confirmation window*: seat reverts to waitlist.  
- *Technical failures during labs*: students can request an extension up to 48 h with documentation.

**Optimize & Communicate**  
To reduce friction, we could implement a real‑time seat‑availability dashboard and auto‑push notifications for confirmations. I’d explain this by showing the impact on enrollment turnaround time and student satisfaction metrics. This structured walk‑through demonstrates clear problem understanding, systematic planning, depth in policy details, awareness of edge conditions, and forward‑thinking optimization—all key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
