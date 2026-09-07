---
qid: ing_fb4add79dc__faang__local
question: 'Explain: Q107: You''re an AI Product Manager. Write the structure of a
  PRD for a generative AI feature that includes hallucination policy, fallback behavior,
  and an eval methodology section.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 612
total_tokens: 873
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:24:34-05:00'
sources: []
---

**Q107 – PRD Structure for a Generative‑AI Feature**

| Section | Purpose & Key Elements |
|---------|------------------------|
| **1️⃣ Problem Statement** | *What problem are we solving?* <br>– Users need concise, accurate explanations of complex topics.<br>– Current model frequently hallucinates. |
| **2️⃣ Goals & Success Metrics** | • Accuracy ≥ 92 % (against ground truth).<br>• Hallucination rate ≤ 3 %.<br>• User satisfaction > 4.5/5. |
| **3️⃣ Target Users & Personas** | Researchers, students, customer‑support agents. |
| **4️⃣ Feature Description** | • Prompt‑guided explanation generator.<br>• Input: user query + optional context.<br>• Output: structured paragraph + citations. |
| **5️⃣ Hallucination Policy** | *Detection* – confidence thresholds, fact‑checking API calls.<br>*Mitigation* – flag ambiguous content, offer “source not found” message.<br>*Escalation* – if confidence < 0.6, route to fallback. |
| **6️⃣ Fallback Behavior** | • Return “I’m sorry, I don’t have enough information.”<br>• Suggest related queries or external resources.<br>• Log for analyst review. |
| **7️⃣ Evaluation Methodology** | • **Offline**: run on a held‑out benchmark set; compute BLEU, ROUGE, and hallucination precision/recall.<br>• **Online A/B**: compare new vs legacy flows; measure click‑through, time‑to‑answer, and post‑interaction surveys.<br>• **Human Review**: quarterly audit of flagged hallucinations. |
| **8️⃣ Technical Constraints** | • Latency ≤ 1.2 s (GPU + caching).<br>• Model size ≤ 3B parameters for edge deployment. |
| **9️⃣ Release Plan & Roll‑out** | Phased rollout: internal beta → limited users → full public. |
| 🔟 Risks & Mitigations | • Over‑cautious filtering → low coverage (balance thresholds).<br>• Privacy of user data in hallucination checks (enforce tokenization). |

---

### **Why This Works**

- **Clarity**: Each section spells the intent and constraints, removing ambiguity.  
- **Depth**: Hallucination policy and fallback logic are detailed enough for engineers to implement without guesswork.  
- **Edge‑Case Testing**: Explicit hallucination metrics guide QA focus.  
- **Optimization**: Latency & size caps ensure scalability; A/B testing drives data‑driven decisions.  

This structured PRD aligns with FAANG standards—clear scope, measurable goals, and a rigorous evaluation plan that keeps user trust at the forefront.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
