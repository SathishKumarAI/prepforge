---
qid: ing_cc6c587be5__think__local
question: 'Q: What is the biggest anti-pattern you see in LLM applications?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 446
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:26:29-05:00'
sources: []
---

**1️⃣ Clarify & Set Assumptions**  
First, pin down what “anti‑pattern” means in this context: a recurring design or usage flaw that degrades reliability, safety, or value of LLM systems. Assume the audience is familiar with LLM concepts but may not know specific pitfalls; keep language accessible yet technical enough for practitioners.

**2️⃣ Mental Model / Framework**  
Use the classic *Design‑Fail* triad:  
- **Intentionality** (does the pattern arise from deliberate design? or accidental oversight?)  
- **Impact** (user experience, safety, performance)  
- **Remediation** (is there a known fix or mitigation?)  

Map candidate anti‑patterns onto this grid to surface the most damaging one.

**3️⃣ Step‑by‑Step Reasoning**  
1. List common LLM pitfalls: prompt injection, hallucination, over‑reliance on “confidence scores”, lack of grounding, data leakage, monolithic models, poor version control, ignoring context limits, and misusing chain‑of‑thought prompting.  
2. Evaluate each against the triad: which has highest intentionality (often a deliberate shortcut), biggest impact (user harm or misinformation), and hardest remediation.  
3. Identify the pattern that scores top across all three axes.

**4️⃣ Common Traps to Avoid**  
- *Over‑generalizing*: assuming one anti‑pattern dominates without evidence.  
- *Neglecting domain nuance*: e.g., a pattern dangerous in medical apps may be less critical elsewhere.  
- *Ignoring user perspective*: focusing solely on technical metrics can miss real‑world harm.

**5️⃣ Sanity Check & Communication**  
Re‑examine the chosen anti‑pattern against recent case studies (e.g., ChatGPT hallucinations causing misinformation). Verify that its prevalence and severity justify labeling it “biggest.” When presenting, start with a concise definition, illustrate with a concrete example, then explain why alternatives are less critical. End with actionable mitigation steps to help listeners immediately apply the insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
