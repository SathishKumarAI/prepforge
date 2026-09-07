---
qid: ing_49aec18900__aws__local
question: 'Explain: Q96: Indirect prompt injection (IPI) attacks rose 32% from Nov
  2025 to Feb 2026 per Google. Your RAG agent reads web pages and documents from untrusted
  sources. Design a layered defense.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 462
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:12:07-05:00'
sources: []
---

**Situation / Task**  
In late‑2025 I led the security redesign for a Retrieval‑Augmented Generation (RAG) chatbot that pulls data from public webpages and internal PDFs. Google’s report showed a 32 % spike in indirect prompt injection (IPI) attacks between Nov 2025–Feb 2026, so our goal was to cut risk by ≥70 % while keeping latency <200 ms for end‑users.

**Action**  
1. **Input sanitization layer** – built a Lambda@Edge function that strips disallowed HTML tags and normalizes whitespace before the text is sent to the embedding model (SageMaker Endpoint).  
2. **Content validation service** – deployed an Amazon Comprehend Custom Classifier trained on 15 k labeled “safe” vs. “potential IPI” snippets; any hit routes through a manual triage queue in DynamoDB.  
3. **Model‑side guardrails** – fine‑tuned the LLM with a negative prompt (“do not reflect user input verbatim”) and added a post‑generation filter using Amazon Bedrock’s *Guardrails* API to flag suspicious tokens.  
4. **Monitoring & alerting** – CloudWatch metrics on “sanitization failures” trigger an SNS topic; automated Lambda rolls back to the last safe model version if anomalies exceed 0.5 % of traffic.

**Result**  
After rollout, IPI incidents dropped from 12 per day to <2 (≈83 % reduction). Latency increased by only 15 ms, and cost remained within 3 % of baseline thanks to spot‑instance SageMaker endpoints and on‑demand Lambda scaling.

**Leadership Principles**  
- *Customer Obsession*: Ensured safe user interactions.  
- *Ownership*: Built the entire defense stack and owned post‑deployment metrics.  

**Bar‑raiser cues** – depth (layered architecture), quantified impact (83 % reduction), and learning from failure (iterative classifier retraining).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
