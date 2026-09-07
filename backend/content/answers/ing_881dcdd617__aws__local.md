---
qid: ing_881dcdd617__aws__local
question: 'Explain: Injection Examples — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 400
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:32:01-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional AI team for a fintech client, we discovered that user prompts could be exploited to inject malicious code into the LLM’s prompt context (prompt injection). The goal was to harden the model against such attacks without hurting latency or cost.

**Action**  
1. **Dive Deep:** I ran a controlled experiment with 10 000 synthetic prompts, measuring success rate of injection attempts (0.73% before mitigation).  
2. **Design & AWS Services:**
   * *AWS Lambda* for real‑time prompt sanitization (regex + whitelist).  
   * *Amazon GuardDuty* to flag suspicious prompt patterns.  
   * *SageMaker Endpoint* with a custom “safe‑prompt” layer that rejects or rewrites flagged inputs.  
3. **Bias for Action:** Implemented a two‑tier filter—client‑side JS sanitization + server‑side Lambda before invoking SageMaker.  
4. **Deliver Results:** Injection success dropped to 0.02% (≈96 % reduction) while keeping <30 ms latency and <$0.001 per inference cost.

**Result**  
- Customer Obsession: Achieved a 99.98% safe‑prompt rate, improving user trust in the product.  
- Ownership: Rolled out monitoring dashboards in CloudWatch; set up automated alerts for any rise above 0.05%.  

**Bar‑raiser Takeaway**  
Showed ownership by owning the full pipeline, deep dive into attack vectors, quantified impact (reduction %, latency), and learned from early false positives to refine regex rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
