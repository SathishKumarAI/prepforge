---
qid: ing_8333ea50df__faang__local
question: Classify support tickets into 40 categories. LLM API, fine-tuned small model,
  or classical classifier - how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 498
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:50:03-05:00'
sources: []
---

**Clarify**  
We need a system that assigns every incoming support ticket to one of **40 predefined categories** (e.g., billing, technical issue, feature request). The tickets are unstructured text; latency matters for real‑time routing, and the model must stay cost‑efficient. Key assumptions:  

- Volume ≈ 10k tickets/day  
- Average ticket length ~200 words  
- Accuracy target ≥ 92 %  
- Budget limited to a few dollars/month of inference

**Approach**  
1. **Baseline classical pipeline** – TF‑IDF + linear SVM or logistic regression.  
2. **Fine‑tuned small transformer** (e.g., DistilBERT) fine‑tuned on 5k labeled tickets.  
3. **LLM API call** for each ticket (ChatGPT, Claude).  

Compare precision/recall, latency (~10 ms vs ~200 ms), and cost ($0.0001/ticket vs $0.02/ticket).

**Depth**  
- Classical model: 40‑class softmax, training in <5 min, inference ≈ 2 ms per ticket, cost negligible.  
- Fine‑tuned DistilBERT: 10 min training, inference ~30 ms, memory 150 MB, GPU free tier. Accuracy typically +3–5 % over classical on such tasks.  
- LLM API: 200–300 ms per ticket, $0.02 each → ~$200/day; accuracy may be highest but cost dominates.

**Edge Cases**  
- Rare categories with <10 examples → class imbalance → use focal loss or oversampling.  
- Ambiguous tickets (e.g., “I can’t log in” could be technical or account). Test confidence thresholds and fallback to human review.  

**Optimize & Communicate**  
Start with the classical baseline; if > 90 % accuracy is met, keep it for cost/latency. If not, move to DistilBERT and evaluate A/B on live traffic. Only consider LLM API if a critical business need (e.g., multi‑language support) justifies the expense. This staged plan balances performance, scalability, and budget while clearly communicating trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
