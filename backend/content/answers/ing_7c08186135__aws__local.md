---
qid: ing_7c08186135__aws__local
question: How would you evaluate a meeting-summarisation feature before shipping it
  to a hundred million users?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 424
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:05:46-05:00'
sources: []
---

**Situation / Task**  
I was tasked to launch an AI‑powered meeting‑summarisation feature for a video‑conferencing platform that serves 100 M daily users. The goal was to deliver accurate, real‑time summaries while keeping latency under 2 s and cost per minute below \$0.01.

**Action (Design & Evaluation)**  
1. **Data‑driven Pipeline** – Capture audio streams → Transcribe with Amazon Transcribe (real‑time). Feed transcripts into a custom summariser built on Amazon Bedrock (LLM) fine‑tuned for business context.  
2. **Scalability & Availability** – Use AWS Lambda + Step Functions for orchestration; autoscale via API Gateway throttling and DynamoDB for metadata storage (eventual consistency, high write throughput).  
3. **Cost Control** – Batch summarisation in 30‑s windows, use Spot Instances for LLM inference, cache common phrases with Amazon ElastiCache.  
4. **Metrics & Testing** – Define NPS, F1‑score on summary relevance, and latency SLA. Run a phased rollout: A/B test 5 % traffic → monitor accuracy (target >0.85 F1) and cost (<\$0.009/min).  

**Result**  
After two weeks of staged rollouts, we achieved an average F1 of **0.87**, latency **1.6 s**, and reduced per‑minute cost to **\$0.008**. The feature saw a 12% increase in meeting engagement (tracked via click‑through on summary links).  

**Learning & Bar‑raiser Signals**  
I took full ownership, diving deep into LLM performance trade‑offs, iterating based on real user feedback, and quantified impact with clear metrics—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
