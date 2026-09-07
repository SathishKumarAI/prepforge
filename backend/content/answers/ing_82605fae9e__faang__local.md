---
qid: ing_82605fae9e__faang__local
question: Some annotators are pasting your tasks into ChatGPT and submitting the output.
  How do you detect and handle it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 420
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:48:05-05:00'
sources: []
---

**Clarify**  
We need a system that flags when an annotator’s “human‑generated” label is actually produced by ChatGPT (or similar LLM) and takes action (reject or retrain).  
Assumptions to confirm:  

1. We have access to the raw text, timestamp, and user ID for each annotation submission.  
2. The same model can be queried to score a text’s “LLM‑ness.”  
3. There is no legal restriction on re‑scoring or storing the content.

**Approach**  
1. **Feature extraction** – run every incoming label through an LLM‑detection classifier (e.g., OpenAI’s `text-davinci-003` prompt for “Is this AI-generated?”).  
2. **Thresholding** – flag submissions above a confidence threshold (say 0.85).  
3. **Audit trail** – log flagged entries, notify the annotator, and route to a human reviewer.  
4. **Feedback loop** – retrain the detector with confirmed cases.

**Depth**  
- The detection model can be a lightweight fine‑tuned classifier or a prompt-based approach; inference cost is O(1) per label.  
- Complexity: O(N) for N annotations, negligible latency if batched.  
- Trade‑off: higher thresholds reduce false positives but increase missed LLM outputs.

**Edge Cases**  
- Human annotators might use LLMs legitimately (e.g., drafting). We should allow a “self‑report” flag to override automatic rejection.  
- Very short labels may be ambiguous; treat them as low confidence and require manual review.  

**Optimize & Communicate**  
Explain that the system balances accuracy with cost: we first filter automatically, then involve humans only when uncertainty is high. We’ll monitor precision/recall monthly and adjust thresholds accordingly, ensuring compliance with data privacy policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
