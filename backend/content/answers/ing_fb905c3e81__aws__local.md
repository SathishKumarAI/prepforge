---
qid: ing_fb905c3e81__aws__local
question: 'Explain: F2: Stuck-in-modal loop — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 447
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:47:11-05:00'
sources: []
---

**Situation & Task**  
While leading the *Computer‑Use Agent* (CUA) project for an enterprise productivity suite, we observed that users were repeatedly trapped in a “stuck‑in‑modal” loop: after initiating a modal dialog (e.g., file upload), the agent would keep re‑prompting them because it couldn’t detect when the dialog had closed. This hurt user satisfaction and inflated support tickets by **35 %**.

**Action – Technical & Design**  
1. **Requirement Clarification** – The agent must reliably recognize modal state transitions without intrusive hooks.  
2. **Solution Architecture**  
   * **AWS Lambda** + **S3 event triggers** to process screenshot streams from the UI test harness.  
   * **Amazon Rekognition** for OCR and visual element detection, tagging “modal” layers.  
   * **DynamoDB** to store a lightweight state machine per session (last seen modal hash).  
   * **Step Functions** orchestrate retries with exponential back‑off, ensuring idempotency.  
3. **Scalability & Cost** – Rekognition scales to 10k images/sec; Lambda’s pay‑per‑execution model keeps cost <$0.01/image.  
4. **Availability** – All services are region‑redundant; failover to a standby Step Function state machine guarantees >99.9 % uptime.

**Result**  
Within two weeks, the loop was eliminated: modal detection accuracy rose from 72 % to **97 %**, and support tickets dropped by **42 %** (≈$12k/month). The new pipeline processes ~15k screenshots/day with <1 s latency per image.  

**Learning & Bar‑raiser Insight**  
I owned the end‑to‑end solution, dove deep into Rekognition’s confidence metrics, quantified impact via ticket volume and cost savings, and iterated quickly—exactly what Amazon looks for in a candidate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
