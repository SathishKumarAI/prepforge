---
qid: ing_000026fbcb__faang__local
question: 'Explain: Contract Intelligence — Harvey | AI software for legal and professional
  services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 476
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:44:23-05:00'
sources: []
---

**Contract Intelligence – Harvey (AI for Legal & Professional Services)**  

| Step | What I’d Say |
|------|--------------|
| **Clarify** | “Harvey is an AI‑powered platform that automates contract review and drafting for law firms and corporate legal departments. It uses NLP to extract clauses, flag risks, and suggest edits.”  *Assumptions*: target users are attorneys with existing document workflows; the system integrates via APIs or a browser extension; data privacy/compliance (GDPR, CCPA) is critical. |
| **Approach** | 1️⃣ Build an ingest pipeline: OCR → tokenization → semantic parsing. <br>2️⃣ Train transformer models on legal corpora for clause classification and risk scoring. <br>3️⃣ Provide a UI for attorneys to review suggestions, annotate feedback, and export revised contracts. <br>4️⃣ Continuous learning loop from user edits. |
| **Depth** | • NLP stack: BERT‑style encoder fine‑tuned on contract data; use attention masks to capture clause boundaries. <br>• Risk scoring via a supervised binary classifier (e.g., logistic regression over embeddings). <br>• Complexity: O(n log n) for parsing, inference latency ~200 ms per paragraph on GPU. <br>• Trade‑offs: larger models → higher accuracy but slower inference; smaller models → faster but may miss nuanced clauses. |
| **Edge Cases** | • Non‑standard contract languages (e.g., multiple jurisdictions). <br>• Highly confidential documents—need on‑prem or edge inference to satisfy compliance. <br>• Zero‑shot clauses that never appeared in training data—fallback to human review. |
| **Optimize & Communicate** | • Deploy model distillation for mobile/edge use, reducing size by 5× with <2% loss. <br>• Use explainable AI (attention heatmaps) so attorneys trust suggestions. <br>• In conversation: “We’ll start with a robust transformer backbone, then iterate on speed and compliance—ensuring every clause gets the right balance of automation and human oversight.” |

*Word count*: ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
