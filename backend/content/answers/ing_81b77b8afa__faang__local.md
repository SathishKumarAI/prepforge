---
qid: ing_81b77b8afa__faang__local
question: Turn a conversation into billable diagnosis codes. What is the accuracy
  bar, and how do you build to it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 416
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:46:16-05:00'
sources: []
---

**Clarify**  
We’re given an unstructured medical dialogue (patient–provider) and must produce ICD‑10/CPT‑like billable diagnosis codes. Key assumptions:  
1. The conversation is in natural language with domain‑specific jargon.  
2. We have a labeled corpus of dialogues → code pairs for training.  
3. Accuracy will be judged by exact match to the gold set, so we aim for > 90 % F1 (typical industry bar).  

**Approach**  
1. **Data prep** – tokenize, normalize, and annotate with entity spans.  
2. **Model** – fine‑tune a transformer (e.g., ClinicalBERT + span‑prediction head) to extract symptom/diagnosis entities.  
3. **Mapping layer** – feed extracted entities into a rule‑based lookup + a learnable mapping network that outputs ICD/CPT codes.  
4. **Post‑processing** – deduplicate, enforce code hierarchy (parent–child), and apply clinical constraints (e.g., mutually exclusive codes).  

**Depth**  
- Use multi‑label classification with sigmoid loss; evaluate macro‑F1.  
- Complexity: inference ≈ O(L·E) where L is dialogue length, E number of candidate codes (~10k).  
- Trade‑offs: pure neural mapping risks spurious codes; rule layer adds precision but requires maintenance.  

**Edge Cases**  
- Ambiguous phrasing → fallback to clinician review.  
- Rare diseases with few examples → use data augmentation (synonym replacement, back‑translation).  
- Code drift over time → periodic re‑training on fresh data.  

**Optimize & Communicate**  
Iterate with A/B tests: measure precision/recall per code category; adjust loss weighting for rare codes. Present findings via dashboards showing error types and suggested improvements, ensuring stakeholders understand the trade‑offs between automation speed and billing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
