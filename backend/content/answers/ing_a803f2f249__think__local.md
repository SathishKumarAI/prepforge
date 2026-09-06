---
qid: ing_a803f2f249__think__local
question: 'Explain: A bad and a good example — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 394
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:08:48-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - Identify *what* “bad” vs. “good” means in this context (e.g., interview performance, design clarity, scalability).  
   - Assume the interviewer wants a concise, structured answer that shows depth of ML knowledge and system‑design thinking.

**2️⃣ Adopt a mental model: The System‑Design Checklist**  
   1. Problem statement & constraints  
   2. Functional vs. non‑functional requirements  
   3. High‑level architecture (components, data flow)  
   4. Trade‑offs & scalability considerations  
   5. ML‑specific concerns (model training, inference latency, drift)

**3️⃣ Step‑by‑step reasoning**  
   - **Bad example**: jump straight into code snippets or vague “just use TensorFlow” without articulating constraints or trade‑offs.  
   - **Good example**: start by asking clarifying questions (“What user data is available?”), outline requirements, sketch a diagram, then discuss how to deploy models (edge vs. cloud) and monitor performance.

**4️⃣ Avoid common traps**  
   - Don’t over‑use jargon; explain terms for non‑ML interviewers.  
   - Skip the “I’ll just add more GPUs” solution—focus on architecture first.  
   - Ignore security/consent issues that are critical in mobile ML apps.

**5️⃣ Sanity‑check & verbalize**  
   - Re‑frame the answer: “In a bad example, the candidate bypasses requirement gathering; in a good one, they start with constraints and build a scalable, privacy‑respecting design.”  
   - Keep it under 2–3 minutes—concise yet complete.  

Follow this structure to demonstrate thoughtful system design while highlighting ML nuances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
