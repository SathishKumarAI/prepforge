---
qid: ing_3b695e9e86__faang__local
question: 'Explain: 1 Software 1.0, 2.0, and 3.0 — AI Concepts - by Neo Kim and Logan
  Thorneloe'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 735
total_tokens: 989
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:02:33-05:00'
sources: []
---

**Topic:** AI – “Software 1.0 / 2.0 / 3.0” (Neo Kim & Logan Thorneloe)  
**Goal:** Deliver a concise, interview‑ready explanation that scores high on **SIGNAL**.

---

## 1️⃣ Clarify  
*Question restated:* Explain the three “software generations” for AI as defined by Kim and Thorneloe.  
*Assumptions to confirm:*
- Audience knows basic ML terminology (models, data, inference).  
- They expect a conceptual map, not code.  

---

## 2️⃣ Approach  
1. Define each generation’s core focus.  
2. Illustrate with concrete examples.  
3. Highlight the evolution of responsibilities: *data → model → system*.  

---

## 3️⃣ Depth (Core Answer)

| Generation | Core Idea | Key Characteristics | Example |
|------------|-----------|----------------------|---------|
| **Software 1.0** | *Model‑centric* AI | • Engineers train a model on labeled data.<br>• Deployment is “model + API” – no extra context. <br>• Evaluation relies on static metrics (accuracy, F1). | Image classifier deployed as a REST endpoint that returns class probabilities. |
| **Software 2.0** | *System‑centric* AI | • Treats the model as a component of a larger pipeline.<br>• Adds data ingestion, preprocessing, monitoring, and feedback loops.<br>• Focus on MLOps: versioning, reproducibility, A/B testing. | Conversational bot that pulls user logs, updates embeddings nightly, and uses an RL agent to personalize replies. |
| **Software 3.0** | *AI‑as‑a‑Service* (or “AI‑powered” systems) | • Embeds AI into business logic; decisions are contextualized with external state.<br>• Supports real‑time inference, multi‑modal inputs, and continuous learning from user interactions.<br>• Requires governance: explainability, bias mitigation, compliance. | Autonomous delivery drone that fuses vision, LIDAR, GPS, and weather APIs to plan routes on the fly while logging outcomes for policy updates. |

**Evolutionary Insight:**  
- 1.0 → *model*  
- 2.0 → *pipeline + ops*  
- 3.0 → *contextualized decision‑making + governance*

---

## 4️⃣ Edge Cases & Testing  

| Case | Why it breaks | What to test |
|------|---------------|--------------|
| Model overfits in 1.0 | No feedback loop | Cross‑validation, dropout |
| Data drift in 2.0 | Pipeline not retrained | Drift detectors, CI/CD for data |
| Regulatory violations in 3.0 | Unchecked decision logic | Bias audits, explainability logs |

---

## 5️⃣ Optimize & Communicate  

- **Optimization:** In 3.0, use *edge inference* and *model distillation* to meet latency constraints.  
- **Narrative:** “Think of Software 1.0 as a single‑liner code block; Software 2.0 builds the scaffolding around it; Software 3.0 turns that scaffold into an autonomous, self‑learning system.”  

This structured walk‑through demonstrates clear thinking, depth, and awareness of practical constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
