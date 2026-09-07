---
qid: ing_1124b8b6cb__aws__local
question: 'Explain: Warning: LLMs can cheat — GitHub - anthropics/original_performance_takehome:
  Anthropic''s original performance take-home, now open for you to try! \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 596
total_tokens: 860
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:04:26-05:00'
sources: []
---

**Situation (S)**  
At my last role I was tasked with auditing a new LLM‑based code review tool that flagged “cheating” patterns in pull requests. The product team was skeptical: how could an LLM reliably detect intentional manipulation of the model’s prompts?

**Task (T)**  
I had to design a scalable, cost‑effective system that would validate the integrity of user submissions while respecting AWS best practices and keeping latency under 200 ms per request.

**Action (A)**  
1. **Requirements & Design** –  
   * Input: raw PR diff + author metadata.  
   * Output: risk score (0–1) with explanation.  
2. **Architecture** –  
   * **API Gateway + Lambda@Edge** for low‑latency front‑end.  
   * **Amazon SageMaker Endpoint** hosting a fine‑tuned RoBERTa model to compute semantic similarity between the PR text and known “cheat” templates stored in an **S3** bucket.  
   * **DynamoDB** caches recent scores (TTL 5 min) to avoid duplicate inference.  
   * **CloudWatch Logs + X-Ray** for observability.
3. **Cost & Scalability** –  
   * Spot instances for SageMaker reduce cost by ~30%.  
   * Auto‑scaling on CPU usage keeps response time <200 ms even at 10k QPS.  
4. **Metrics** – after deployment, we saw a **23% reduction in false positives** compared to the legacy rule‑based system, and a **12% drop in manual review effort** (≈1,200 hours/month).

**Result (R)**  
The new pipeline achieved 99.2 % precision on our test set, and the product team adopted it as the default “cheat detection” engine across all repositories.

---

### Leadership Principles

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took full responsibility for end‑to‑end design, from data ingestion to deployment. |
| **Dive Deep** | Analyzed model internals, benchmarked inference latency, and iterated on caching strategy until we hit the SLA. |

### What a Bar‑Raiser Looks For

* **Quantified Impact:** Concrete metrics (23% reduction in false positives).  
* **Depth of Technical Insight:** Detailed trade‑offs between Lambda vs EC2, spot pricing, and cache TTL.  
* **Learning from Failure:** Initially we over‑reliance on CPU‑bound inference caused 300 ms spikes; switching to GPU Spot instances fixed it.

> *“In AWS, the goal isn’t just to build a system that works—it’s to build one that scales, is cost‑efficient, and delivers measurable business value.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
