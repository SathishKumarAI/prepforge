---
qid: ing_ce3a44ef6d__think__local
question: Tell me about a time your eval metrics and real user feedback disagreed.
  Which did you trust?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 375
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:35:30-05:00'
sources: []
---

**1️⃣ Clarify the context & assumptions**  
   - *What* metrics are we talking about (precision/recall, AUC, NPS, etc.)?  
   - *Who* are “real users” and how is their feedback collected?  
   - Assume both sources are valid but can conflict due to sample bias or lag.

**2️⃣ Adopt a mental model**  
   - Treat metrics as **proxy signals**; user feedback as the ground truth.  
   - Use the **validation‑triangulation framework**: compare, analyze variance, and look for systemic biases.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify where the divergence lies (e.g., high recall but low satisfaction).  
   2. Quantify confidence intervals of metrics; check if user sample size is sufficient.  
   3. Map metric components to user experience dimensions (speed, relevance, trust).  
   4. Prioritize the dimension most critical for business goals.  
   5. Decide: adjust model or gather more feedback?  

**4️⃣ Common traps to avoid**  
   - *Confirmation bias*: only looking at data that supports your hypothesis.  
   - Assuming higher metric scores always equal better UX.  
   - Ignoring temporal drift—metrics may lag behind evolving user expectations.

**5️⃣ Sanity‑check & communicate**  
   - Run a small A/B test or pilot to see if changes based on the chosen signal actually improve real outcomes.  
   - Explain: “We trusted user feedback because it directly reflects satisfaction, but we’ll continue monitoring metrics to ensure we haven’t compromised objective quality.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
