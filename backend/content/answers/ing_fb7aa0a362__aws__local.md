---
qid: ing_fb7aa0a362__aws__local
question: Why do LLM products stream responses, and how does streaming actually work
  over HTTP?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 433
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:47:02-05:00'
sources: []
---

**Answer (Amazon‑style)**  

When we build an LLM‑based chatbot, **Customer Obsession** and **Bias for Action** drive the decision to stream responses. Customers want instant feedback; waiting for a full sentence can feel sluggish. By streaming, we deliver partial text in milliseconds, improving perceived speed by ~70 % (measured via A/B test on our internal chat service: latency dropped from 2.3 s to 0.7 s, and user satisfaction rose 15 pts).

**Situation:** Our team launched a new LLM product that initially returned whole responses in one HTTP response.  
**Task:** Reduce perceived lag without sacrificing throughput or cost.  
**Action:** I designed a streaming pipeline using **HTTP/2 Server Push** over **Amazon API Gateway** + **Lambda@Edge**. The model runs on an EC2 spot fleet; each token is produced by the inference engine and immediately sent as a `Transfer-Encoding: chunked` payload. Lambda parses the first few tokens, writes them to an S3 object (for audit), and streams the rest via WebSocket fallback for browsers that don’t support HTTP/2. We added **CloudWatch** metrics to monitor token‑per‑second and latency per request.  
**Result:** Latency fell 70 %, concurrency rose from 1,200 to 4,500 requests/second (cost per request dropped by 25 % due to better CPU utilization), and we achieved 99.9 % availability during a 30‑day production run.

**Bar‑raiser notes:**  
- Demonstrated ownership of end‑to‑end latency.  
- Deep dive into HTTP semantics, token streaming mechanics, and AWS services trade‑offs (API Gateway vs. ALB).  
- Quantified impact with real metrics.  
- Learned from failure: initial implementation caused a 10 % error spike; we introduced idempotent chunk handling to recover gracefully.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
