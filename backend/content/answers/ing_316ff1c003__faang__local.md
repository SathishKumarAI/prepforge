---
qid: ing_316ff1c003__faang__local
question: 'Q29: How do you detect and handle hallucinations?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 451
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:39:12-05:00'
sources: []
---

**Q29 – Detecting & Handling Hallucinations in an LLM**

| Step | What to Do |
|------|------------|
| **Clarify** | *Goal:* Identify when the model’s output is factually incorrect (“hallucination”) and mitigate it before users see wrong info. <br>*Assumptions:* We have user‑query logs, a reference knowledge base (KB), and real‑time latency constraints (~200 ms). |
| **Approach** | 1️⃣ **Post‑generation verification layer**: run the generated text through an evidence retrieval module that queries the KB or a search API. <br>2️⃣ **Confidence scoring**: compute overlap between retrieved snippets & answer; if low, flag. <br>3️⃣ **User feedback loop**: allow users to mark hallucinations and feed back into fine‑tuning. |
| **Depth** | - Retrieval engine (BM25/FAISS) → top‑k passages. <br>- Scoring: Jaccard + semantic similarity (e.g., sentence embeddings). <br>- Threshold tuned via ROC on validation set; typical 0.65 for safety. <br>Complexity: retrieval O(log N), scoring O(k·d); overall ~150 ms, acceptable in real‑time. |
| **Edge Cases** | • Ambiguous queries → low‑confidence but no evidence → safe to refuse or ask follow‑up.<br>• KB gaps → fallback to “I’m not sure” instead of fabricating.<br>• Adversarial prompts that trick retrieval → add adversarial training data. |
| **Optimize & Communicate** | • Cache frequent queries to reduce latency. <br>• Use a lightweight transformer for scoring (e.g., DistilBERT) to keep compute low. <br>In interviews, explain the layered defense: generation → verification → user feedback, highlighting trade‑offs between speed and safety. This shows clear problem framing, systematic solution design, and awareness of production constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
