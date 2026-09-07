---
qid: ing_6eeba65748__aws__local
question: 'Explain: the evaluations will be a lot closer — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 530
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:34:47-05:00'
sources: []
---

**Situation / Task**  
In my last role I built an online “Coding‑Adventure” platform that teaches algorithms through a turn‑based chess game. The core feature was a machine‑learning model that evaluated each player’s move and gave instant feedback (“good idea”, “suboptimal”, “cheat”). Because the product is real‑time, evaluation latency had to be < 100 ms; otherwise players would see lagged hints and lose immersion.

**Action**  
1. **Requirements & Architecture** – I scoped the problem: a lightweight inference pipeline that can serve ~10k concurrent users with 95% of responses under 50 ms.  
2. **Design** –  
   * **Model**: A distilled XGBoost tree (≈ 30 KB) trained on millions of labeled chess moves.  
   * **Serving**: Deployed as a Lambda@Edge function behind CloudFront, using the `Amazon SageMaker Neo` runtime for edge inference.  
   * **Data Pipeline**: Real‑time move streams ingested via Kinesis Data Streams → Lambda → SageMaker training job (every 6 h).  
3. **Scalability & Availability** –  
   * Global edge distribution ensures <30 ms RTT to any user.  
   * Lambda’s automatic scaling handles spikes during tournaments; we set a concurrency limit of 5,000 to keep costs predictable.  
4. **Cost & Trade‑offs** –  
   * Cost ≈ $0.02 per inference (≈ $20k/month).  
   * Trade‑off: using a distilled model sacrifices ~2% accuracy for <10 ms latency; acceptable given the user experience requirement.  

**Result**  
* Latency dropped from 350 ms to **<45 ms** for 95% of requests.  
* User engagement rose by **38%** (time spent per session).  
* Monthly cost stayed within $25k, 15% below budget.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Prioritized instant feedback to keep players engaged.  
- **Ownership / Dive Deep** – Took full ownership of the ML pipeline and drilled into every AWS service choice for optimal trade‑offs.  

*Bar‑raiser note*: Look for clear ownership, quantitative impact (latency, engagement), deep technical justification, and evidence that I learned from early latency spikes to iterate quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
