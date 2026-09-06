---
qid: ing_a260a881b4__think__local
question: 'Explain: Measuring Hallucinations — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 440
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:48:52-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Identify *what* “hallucination” means in an LLM context (fabricated facts, wrong citations).  
- Assume we’re evaluating a legal‑AI system (BigLaw Bench) that outputs references to statutes or cases.  
- Assume we have access to ground‑truth documents and a metric framework.

**2️⃣ Adopt a structured evaluation framework**  
Use the *precision–recall* paradigm plus a *temporal‑relevance* layer:  
- **Precision** = correct citations / total citations.  
- **Recall** = correct citations / all true citations in the target set.  
Add a *hallucination score* (e.g., 1 – precision) to capture false positives.

**3️⃣ Step‑by‑step reasoning**  
a. Extract every citation the model generates.  
b. Map each to the corresponding legal source via a unique ID.  
c. Cross‑check IDs against the gold set; flag mismatches as hallucinations.  
d. Compute precision, recall, and the derived hallucination rate.  
e. If needed, weight citations by importance (precedential value) or recency.

**4️⃣ Avoid common pitfalls**  
- Don’t conflate *non‑existent* citations with *mis‑formatted* ones; both are hallucinations but may need different remediation.  
- Beware of *partial correctness*: a citation might be to the right case but wrong paragraph—count it appropriately.  
- Resist over‑focusing on numeric metrics; qualitative review (e.g., legal impact) remains vital.

**5️⃣ Sanity‑check & communicate clearly**  
- Verify that precision + recall fall within 0–1 and sum logically.  
- Present results with visual aids: bar charts for each metric, heatmaps of frequent hallucination sources.  
- Summarize findings in plain language for stakeholders: “The model’s hallucination rate is 12 %, meaning roughly one out of eight citations is fabricated or incorrect.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
